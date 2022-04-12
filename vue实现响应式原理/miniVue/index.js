/* 实现vue思路
* 1. 数据 -> 需要变为 响应式数据，使用Object.defineProperty 或者 Proxy
* 2.input -> input/keyup -> 事件处理函数绑定 -> 改变数据
* 3.相关的DOM -> 数据 -> 绑定

* 操作数据的某个属性，对应DOM就改变
*/
class VUE {
  constructor(el,data, isProxy){
    this._el = document.querySelector(el)
    this._data = data
    this.isProxy = isProxy
    this.domPool = {}
    this.data = {}
    this.init()
  }
  init(){
    this.isProxy ? this.proxyListenerData() : this.definePropertyListenerData()
    this.bindInput(this._el)
    this.bindDom(this._el)
  };
  // Object.defineProperty监听数据
  definePropertyListenerData(){
    const _this = this
    for(let key in _this._data){
      Object.defineProperty(this.data, key, {
        get(){
          console.log('获取数据：'+ key + '   ' + _this._data[key])
          return _this._data[key]
        },
        set(val){
          console.log('设置数据：'+ key + '   ' + val)
          _this._data[key] = val
          _this.domPool[key].innerText = val
        }
      })
    }
  };
  // proxy监听数据
  proxyListenerData(){
    const _this = this
    this.data = new Proxy(this._data, {
      get(target, key){
        return Reflect.get(target, key)
      },
      set(target, key, value){
        _this.domPool[key].innerText = value
        return Reflect.set(target, key, value)
      }
    })
  };
  bindInput(el){
    const _allInputs = el.querySelectorAll('input')
    _allInputs.forEach( input => {
      const _vModel = input.getAttribute('v-model')
      if(_vModel){
        // 绑定事件
        input.addEventListener('keyup', this.handleInput.bind(this, _vModel, input), false)
      }
    })
  }
  bindDom(el){
    // 拿到#app下边的所有子节点
    const childNodes = el.childNodes
    childNodes.forEach(item => {
      // 如果是文本节点
      if(item.nodeType === 3) {
        // 获取文本节点的nodeValue
        const _value = item.nodeValue
        // 如果文本节点有值
        if(_value.trim().length){
          // 匹配 值为{{}}这样的形式
          let isValid = /\{\{(.+?)\}\}/.test(_value)
          // 判断文本节点的值是否为{{xxx}}格式
          if(isValid){
            // 匹配到了，取出{{xxx}}内的内容xxx
            const _key = _value.match(/\{\{(.+?)\}\}/)[1].trim()
            // 设置对象{key,node}形式，便于set的时候修改innerText
            this.domPool[_key] = item.parentNode
            item.parentNode.innerText = this.data[_key] || undefined
          }
        }
      }

      // 如果这个节点下边还有子节点，递归遍历，直至找到最后一层
      item.childNodes && this.bindDom(item)
    })
  }
  handleInput(modelKey, input){
    // 设置值
    this.data[modelKey] = input.value
  }
}