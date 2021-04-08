

// 基于promise.all实现ajax的串行和并行
// 串行：请求是异步的，需要等待上一个请求成功，才能执行下一个请求
// 并行：同时发送多个请求[HTTP请求可以同时进行]，等待所有请求都成功我们再去做什么事情。。。
let task = [
  // ()=>{return new Promise((resolve)=>{resolve(1)})},
  // ()=>{return new Promise((resolve)=>{resolve(2)})},
  // ()=>{return new Promise((resolve)=>{resolve(3)})},
  // ()=>{return new Promise((resolve)=>{resolve(4)})},
  // ()=>{return new Promise((resolve)=>{resolve(5)})},
  // ()=>{return new Promise((resolve)=>{resolve(6)})},
  // ()=>{return new Promise((resolve)=>{resolve(7)})},
  // ()=>{return new Promise((resolve)=>{resolve(8)})},
    () => axios.post('https://api.apiopen.top/getJoke?page=1&count=2&type=video'),
    () => axios.post('https://api.apiopen.top/getJoke?page=2&count=2&type=video'),
    () => axios.post('https://api.apiopen.top/getJoke?page=3&count=2&type=video'),
    () => axios.post('https://api.apiopen.top/getJoke?page=4&count=2&type=video'),
    () => axios.post('https://api.apiopen.top/getJoke?page=5&count=2&type=video'),
    () => axios.post('https://api.apiopen.top/getJoke?page=6&count=2&type=video'),
    () => axios.post('https://api.apiopen.top/getJoke?page=7&count=2&type=video'),
    () => axios.post('https://api.apiopen.top/getJoke?page=8&count=2&type=video'),
    () => axios.post('https://api.apiopen.top/getJoke?page=9&count=2&type=video')
]



function creatRequestLimit() {

  let results = []
  return function request(tasks, limit){
    // 如果没有传入urls或max则不继续执行
    if (!tasks || !limit) return
    return new Promise((res, rej) => {
      (function fn(tasks, limit) {
        // 使用splice方法返回当前要使用的请求集合，同时删除原有的请求集合
        const onceMaxUrlArr = tasks.splice(0, limit)
        // 当请求地址数组集合长度为0，则执行回调函数（如果有的话），并结束后续执行
        if(onceMaxUrlArr.length === 0) {
          res(results)
          return
        }

        // 进行map转换，将url参数转换为promise
        const onceMaxFetchArr = onceMaxUrlArr.map(url => axios.post(url))

        // 使用当前这一队列
        Promise.all(onceMaxFetchArr)
        .then(res => {
          results = results.concat(res)
          // 递归请求
          fn(tasks, limit)
        })
        .catch(err => rej(err))
      })(tasks, limit)
    })
  }

}
let requestLimit = creatRequestLimit()
requestLimit([
  'https://api.apiopen.top/getJoke?page=1&count=2&type=video',
  'https://api.apiopen.top/getJoke?page=2&count=2&type=video',
  'https://api.apiopen.top/getJoke?page=3&count=2&type=video',
  'https://api.apiopen.top/getJoke?page=4&count=2&type=video',
  'https://api.apiopen.top/getJoke?page=5&count=2&type=video',
  'https://api.apiopen.top/getJoke?page=6&count=2&type=video',
  'https://api.apiopen.top/getJoke?page=7&count=2&type=video',
  'https://api.apiopen.top/getJoke?page=8&count=2&type=video',
  'https://api.apiopen.top/getJoke?page=9&count=2&type=video',
], 2).then((res)=>{
  console.log(res)
})
