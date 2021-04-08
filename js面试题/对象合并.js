const options = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  data: null,
  arr: [10, 20, 30],
  config: {
    xhr: {
      async: true,
      cache: false
    }
  }
}
const params = {
  url: 'www.baidu.com',
  headers: {
    'X-Token': '465365635asdas4224q'
  },
  data: {
    lx: 1,
    from: 'weixin'
  },
  arr: [40, 50],
  config: {
    xhr: {
      cache: true
    }
  }
}
function isObject(origin){
  // 校验是否为普通对象
  return Object.prototype.toString.call(origin).slice(8, -1).toLowerCase() === 'object'
}


// 对象合并：
// 方法一：Object.assign() ,基于前比较 实现 对象的替换，params会替换掉options的
// let mergeObj = Object.assign({}, options, params)
// console.log(mergeObj)

// 方法二：手写merge(原始对象，替换的目标对象)，target替换origin
// A -> origin中的key值     B -> target中的key值
// 1.A，B都是原始值类型：B替换A即可
// 2.A是原始值，B是对象，B替换A即可
// 3.A是对象，B是原始值，抛出异常
// 4.A，B都是对象，依次遍历B中的每一项，替换A的内容
function merge(origin, target={}){
  for(let key in target){
    let originIsObj = isObject(origin[key])
    let targetIsObj = isObject(target[key])
    if(originIsObj && !targetIsObj) throw new TypeError(`${key} in params must be object`)
    if(originIsObj && targetIsObj) {
      origin[key] = merge(origin[key], target[key])
    }
    if((!originIsObj && !targetIsObj) || (!originIsObj && targetIsObj)){
      // B替换A
      origin[key] = target[key]
    }
  }
  return origin
  // 确保都是对象
}
console.log(merge(options, params))