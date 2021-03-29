/**
 * @name: debounce防抖函数
 * @param {*}
 * @return {*}
 */
function debounce(cb, time){
  // 声明一个变量接收定时器
  let timer = null
  return function(e){
    // 如果已经存在一个定时器，清空上一个定时器
    if(timer) clearTimeout(timer)
    // 启动定时器
    timer = setTimeout(()=>{
      cb.call(this, e)
      timer = null
    }, time)
  }
}
/**
 * @name: throttle节流函数
 * @param {*}
 * @return {*}
 */
// 立即执行版 节流
function throttle(cb, time){
  // 定义一个开始时间
  let start = 0;
  // 当前触发时间
  let nowTime = 0

  return function(e){
    // 判断当前时间与开始时间的间隔，与间隔时间time判断
    // 获取当前时间戳
    nowTime = Date.now()
    if(nowTime - start <= time) return
    cb.call(this, e)
    start = nowTime
  }
}
/**
 * @name: myCall
 * @param {*} fn 需要改变this指向的函数
 * @param {*} obj 改变后的this指向的目标对象
 * @param {*} args 函数的参数，单个传递
 * @return {*}
 */
function myCall(fn, obj, ...args) {
  let result = ''
  // 当obj为undefined或者null，this指向全局对象 globalThis
  if(obj === undefined || obj === null){
    obj = globalThis
  }
  // 这个函数作用是将fn函数的this指向传入对象obj
  // 所以直接在obj上声明一个函数，接收fn
  obj.temp = fn
  // 再用obj调用函数，此时函数的this就是obj
  result = obj.temp(...args)
  // 删除新增的函数
  delete obj.temp
  return result
}

/**
 * @name: myBind
 * @param {*} fn 需要改变this指向的函数
 * @param {*} obj 改变后的this指向的目标对象
 * @param {*} args 函数的参数，单个传递
 * @return {*}
 */
// bind 和 call区别在于，call是直接执行函数，bind是返回一个函数
function myBind(fn, obj, ...oArgs) {
  // 返回一个新的函数
  return function(...iArgs){
    // 函数返回一个call包装后执行的结果
    return myCall(fn, obj, ...oArgs, ...iArgs)
  }
}
/**
 * @name: myApply
 * @param {*} fn 需要改变this指向的函数
 * @param {*} obj 改变后的this指向的目标对象
 * @param {array} args 函数的参数，传入数组
 * @return {*}
 */
function myApply(fn, obj, args) {
  let result = ''
  // 当obj为undefined或者null，this指向全局对象 globalThis
  if(obj === undefined || obj === null){
    obj = globalThis
  }
  // 这个函数作用是将fn函数的this指向传入对象obj
  // 所以直接在obj上声明一个函数，接收fn
  obj.temp = fn
  // 再用obj调用函数，此时函数的this就是obj
  result = obj.temp(...args)
  // 删除新增的函数
  delete obj.temp
  return result
}

/**
 * @name: myReduce
 * @param {*} arr 传入需要操作的数组
 * @param {*} fn  对数组的操作函数
 * @param {*} defaultVal 从什么值开始计算
 * @return {*}
 */
function myReduce(arr, fn, defaultVal) {
  let result = defaultVal
  for(let index = 0; index < arr.length; index++){
    // 执行方法的回调，将返回值保存到数组对应下标中
    result = fn(result, arr[index])
  }
  // 返回新数组
  return result
}
/**
 * @name: myMap
 * @param {*} arr 传入需要操作的数组
 * @param {*} fn  对数组的操作函数
 * @return {*}
 */
function myMap(arr, fn) {
  let result = []
  for(let index = 0; index < arr.length; index++){
    // 执行方法的回调，将返回值保存到数组对应下标中
    result[index] = fn(arr[index], index)
  }
  // 返回新数组
  return result
}

/**
 * @name: myFind
 * @param {*} arr 传入需要操作的数组
 * @param {*} fn  对数组的操作函数
 * @return {*}
 */
function myFind(arr, fn) {
  for(let index = 0; index < arr.length; index++){
    // 执行方法的回调，将判断结果返回值拿到
    let res = fn(arr[index], index)
    if(res){
      // 如果校验通过
      // 直接返回满足的项
      return arr[index]
    }
  }
  return undefined
}
/**
 * @name: myFindIndex
 * @param {*} arr 传入需要操作的数组
 * @param {*} fn  对数组的操作函数
 * @return {*}
 */
function myFindIndex(arr, fn) {
  for(let index = 0; index < arr.length; index++){
    // 执行方法的回调，将判断结果返回值拿到
    let res = fn(arr[index], index)
    if(res){
      // 如果校验通过
      // 直接返回满足的下标
      return index
    }
  }
  return -1
}

/**
 * @name: myForEach
 * @param {*}
 * @return {*}
 */
Array.prototype.myForEach = function (cb) {
  // 因为是[].myForEach，所以此时的this指向这个数组
  let _arr = this
  let _len = this.length
  // 第二个参数用于指定this指向， 不传默认指向window
  let _args = arguments[1] || window
  for (let i=0; i<_len; i++){
    cb.apply(_args, [_arr[i], i, _arr])
  }
}
/**
 * @name: myFilter
 * @param {*} arr 传入需要操作的数组
 * @param {*} fn  对数组的操作函数
 * @return {*}
 */
function myFilter(arr, fn) {
  let result = []
  for(let index = 0; index < arr.length; index++){
    // 执行方法的回调，将判断结果返回值拿到
    let res = fn(arr[index], index)
    if(res){
      // 如果校验通过，则压入结果数组
      result.push(arr[index])
    }
  }
  // 返回新数组
  return result
}

/**
 * @name: myEvery 数组每一项都需要满足条件，才返回true
 * @param {*} arr 传入需要操作的数组
 * @param {*} fn  对数组的操作函数
 * @return {*}
 */
function myEvery(arr, fn) {
  for(let index = 0; index < arr.length; index++){
    // 执行方法的回调，将判断结果返回值拿到
    let res = fn(arr[index], index)
    if(!res){
      // 如果有一项不满足条件，直接return false
      return false
    } else {
      // 如果都满足条件，返回true
      return true
    }
  }
}
/**
 * @name: myConcat 数组拼接
 * @param {*} arr 传入需要操作的数组
 * @param {*} args  要拼接到数组的数据
 * @return {*}
 */
function myConcat(arr, ...args) {
  let result = arr.slice()
  for(let i = 0; i < args.length; i++){
    let item = args[i]
    if(Object.prototype.toString.call(item).slice(8,-1) === 'Array'){
      result.push(...item)
    } else {
      result.push(item)
    }
  }
  return result
}
/**
 * @name: mySlice 数组切片
 * @param {*} arr 传入需要操作的数组
 * @param {*} begin  开始下标
 * @param {*} end  结束下标（不包括结束位置）
 * @return {*}
 */
function mySlice(arr, begin, end) {
  // 如果不传begin，默认为0
  begin = begin || 0
  if(arr.length === 0 || begin >= arr.length) return []
  // 如果不传end，默认为数组长度
  end = end || arr.length
  if(end < begin) {
    end = arr.length
  }
  let result = []
  for(let i = 0; i < arr.length; i++){
    if( i >= begin && i < end){
      result.push(arr[i])
    }
  }
  return result
}
/**
 * @name: myFlat 数组扁平化
 * @param {*} arr 传入需要扁平化的数组
 * @return {*}
 */
function myFlat(arr) {
  let result = []
  for(let i = 0; i < arr.length; i++){
    let item = arr[i]
    if(Object.prototype.toString.call(item).slice(8,-1) === 'Array'){
      result = result.concat(myFlat(item))
    } else {
      result.push(item)
    }
  }
  return result
}

/**
 * @name: 数组分块
 * @param {*} arr,传入需要分块的数组
 * @param {*} size,需要分成几块
 * @return {*}
 */
function myChunk(arr, size = 1){
  let result = [];
  let tmp = [];
  if(arr.length === 0){
    return []
  }
  arr.forEach((item) => {
    // 判断tmp长度是否为0
    if(tmp.length ===0){
      // 将tmp压入到结果数组result中
      result.push(tmp)
    }

    // 将元素压入到临时数组tmp中
    tmp.push(item)
    // 元素满了
    if(tmp.length === size){
      tmp = []
    }
  })
  return result
}

/**
 * @name: myDifference 数组取差异
 * @param {*} arr1
 * @param {*} arr2
 * @return {*}
 */
function myDifference(arr1, arr2){
  return arr1.filter((item) => {
    return !arr2.includes(item)
  })
}
/**
 * @name: mySome 数组只要有一项满足条件，就返回true
 * @param {*} arr 传入需要操作的数组
 * @param {*} fn  对数组的操作函数
 * @return {*}
 */
function mySome(arr, fn) {
  for(let index = 0; index < arr.length; index++){
    // 执行方法的回调，将判断结果返回值拿到
    let res = fn(arr[index], index)
    if(res){
      // 如果有一项满足条件，直接return true
      return true
    }
  }
  // 如果全部都不满足，返回false
  return false
}
/**
 * @name: unique1
 * @param {*} arr 去重的数组
 * @return {*}
 */
function unique1(arr){
  let result = []//保存去重后的数组
  for(let i = 0; i < arr.length; i++){
    let item = arr[i]
    if(result.indexOf(item) === -1){
      result.push(item)
    }
  }
  return result
}
/**
 * @name: unique2
 * @param {*} arr 去重的数组
 * @return {*}
 */
function unique2(arr){
  let map = new Map()
  let result = []//保存去重后的数组
  arr.forEach((item)=>{
    if(!map.has(item)){
      map.set(item)
      result.push(item)
    }
  })
  return result
}
/**
 * @name: unique3
 * @param {*} arr 去重的数组
 * @return {*}
 */
function unique3(arr){
  let result = new Set(arr)//保存去重后的数组
  return Array.from(result)
}

