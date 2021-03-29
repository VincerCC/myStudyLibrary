class Compute{
  plus(a,b){
    return a+b
  }
  minus(a,b){
    return a-b
  }
  mul(a,b){
    return a*b
  }
  div(a,b){
    return a/b
  }
}
class Calculator extends Compute {
  constructor(document){
    super()
    // 获取显示结果的节点
    this.result = document.getElementsByClassName('result')[0]
    // 获取输入框所有节点
    this.fInput = document.getElementsByClassName('fInput')[0]
    this.sInput = document.getElementsByClassName('sInput')[0]

    // 获取按钮
    // this.btnGroup = document.getElementsByClassName('btn-group')
    this.btnList = document.querySelectorAll('button')

    // 使用defineData函数，监听数据的改变
    // 当data对象的任意一个值改变，将会触发set方法
    this.data = this.defineData()

    this.btnIndex = 0
    console.log(this.btnList[0])
  }
  init(){
    // 绑定点击事件处理函数
    this.bindBtnEvent()
    // 绑定输入框 输入事件
    this.bindInputEvent()
  }
  bindBtnEvent(){
    let self = this
    // 这个this指向类Calculator
    // console.log(self)
    let lis = this.btnList
    for (var i = 0; i < lis.length; i++) {
      // 将有类名的(活跃的)存储起来
      if (lis[i].className) var obj = lis[i];

      lis[i].onclick = function (e) {
        // 取消之前活跃的样式
        obj.className = "";
        // 将自身设置为活跃状态
        this.className = "current";
        // 更新获取的对象
        obj = this;
        // console.log(this)//这个this指向点击的那个button
        // 点击对应按钮，赋值给data ，触发数据改变的监听，控制台打印 field被改变了"push"
        // console.log( this.getAttribute('data-field'))
        self.data.field = this.getAttribute('data-field')
      }
    }
  }
  bindInputEvent(){
    this.fInput.addEventListener('input',()=>{
      // 将输入框的value值 赋值给data，触发数据改变的监听，控制台打印 fNumber被改变了"1"
      this.data.fNumber = this.fInput.value.replace(/\s+/g,'')
    })
    this.sInput.addEventListener('input',()=>{
      this.data.sNumber = this.sInput.value.replace(/\s+/g,'')
    })
  }
  defineData() {
    const self = this
    let data = {}
    let fNumber = 0
    let sNumber = 0
    let field = 'plus'
    // 监听的对象的改变
    // Object.defineProperties是Object.defineProperty的复数形式，支持同时给data创建多个key
    Object.defineProperties(data,{
      fNumber: {
        get(){
          console.log('fNumber获取到了"' + fNumber + '"')
          return fNumber
        },
        set(newVal){
          fNumber = newVal
          // 每次改变fNumber就执行计算方法
          self.computedNumber(fNumber,sNumber,field)
          console.log('fNumber被改变了"' + fNumber + '"')
        }
      },
      sNumber: {
        get(){
          console.log('sNumber获取到了"' + sNumber + '"')
          return sNumber
        },
        set(newVal){
          sNumber = newVal
          self.computedNumber(fNumber,sNumber,field)
          console.log('sNumber被改变了"' + sNumber + '"')
        }
      },
      field: {
        get(){
          console.log('field获取到了"' + field + '"')
          return field
        },
        set(newVal){
          field = newVal
          self.computedNumber(fNumber,sNumber,field)
          console.log('field被改变了"' + field + '"')
        }
      }
    })
    return data
  }
  // 计算
  computedNumber(fNumber,sNumber,field){
    // 调用对应的 计算函数 this.plus(1,2)
    let result = this[field](Number(fNumber),Number(sNumber))
    console.log(result)
    console.log(this.result.innerHTML)
    // 将计算结果同步到页面上
    this.result.innerHTML = result
  }
}
new Calculator(document).init()