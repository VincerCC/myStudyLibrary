class Observer {
  constructor(target) {
    this.data = target
    console.log(this, 'this')
    switch (dataType(this.data)) {
      case 'Array':
        // 对于数组的监听
        break;
      case 'Object':
        // 对于对象的监听
        this.objectObserver(this.data)
        break;

      default:
        break;
    }
  }
  objectObserver(object) {
    for(let key in object) {
      if(dataType(object[key]) === 'Object') {
        this.objectObserver(object[key])
      } else {
        this.defineProperty(object, key)
      }
    }
  }
  defineProperty(data, key) {
    let value = data[key]
    Object.defineProperty(data, key, {
      get() {
        console.log(`${key}被读取了`)
        return value
      },
      set(newVal) {
        console.log(`${key}被设置了新值${newVal}`)
        value = newVal
      }
    })
  }
}
function dataType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}


const s = new Observer({
  name: '111',
  obj: {
    age: 18,
    h: {
      a: 0
    }
  }
})
console.log(s.data.obj.age, 's.data.obj.age')
s.data.obj.age = 188
console.log(s.data.obj.age, 's.data.obj.age')
console.log(s.data.obj.h.a, 's.data.obj.h.a')
s.data.obj.h.a = 1234
console.log(s.data.obj.h.a, 's.data.obj.h.a')