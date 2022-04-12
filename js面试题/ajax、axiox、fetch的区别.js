/**
 * Ajax，Axios，Fetch的核心区别
 */

// 原生Ajax前后端数据通信[同源，跨域]
let xhr = new XMLHttpRequest;
xhr.open('get', 'https://api.apiopen.top/getJoke?page=1&count=2&type=video')
xhr.onreadystatechange = function (){
  if(xhr.readyState === 4 && xhr.status === 200){
    let text = JSON.parse(xhr.responseText)
    console.log(text)
  }
}
xhr.send()


// JQ Ajax
// 优点：对原生Ajax进行封装，核心是XMLHttpRequest，请求步骤变简单了
// 缺点：容易形成回调地狱（一个接口请求成功回调里继续请求另一个接口）
$.ajax({
  url:'https://api.apiopen.top/getJoke?page=1&count=2&type=video',
  method: 'get',
  data: null,
  success: function(res) {
    console.log(res)
    if(res.code === 200){
      $.ajax({
        url:'https://api.apiopen.top/getJoke?page=2&count=2&type=video',
        method: 'get',
        data: null,
        success: function(res) {
          console.log(res)
        }
      })
    }
  }
})

// Axios 对Ajax的一个封装
// 优点：对原生Ajax进行封装，核心是XMLHttpRequest，基于promise管理请求，很好的解决了回调地狱问题
(async function (){
  let res1 = await axios.post('https://api.apiopen.top/getJoke?page=1&count=2&type=video')
  console.log(res1.data)
  if(res1.data.code === 200){
    let res2 = await axios.post('https://api.apiopen.top/getJoke?page=2&count=2&type=video')
    console.log(res2.data)
  }
})()

// Fetch是es6新增的通信方法，不是Ajax，但是它本身实现数据通信，就是基于promise管理的
(async function (){
  let res1 = await fetch('https://api.apiopen.top/getJoke?page=1&count=2&type=video', {
    method: 'post',
    body: null,

  }).then((res) => {
    return res.json()
  }).then((myJson) => {
    return myJson
  });
  console.log(res1)
  if(res1.code === 200){
    let res2 = await fetch('https://api.apiopen.top/getJoke?page=2&count=2&type=video', {
      method: 'post',
      body: null,

    }).then((res) => {
      return res.json()
    }).then((myJson) => {
      return myJson
    });
    console.log(res2)
  }
})()


