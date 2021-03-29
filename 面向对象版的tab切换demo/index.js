window.onload=function(){
  console.log('6')
  var that
  class Tab{
    constructor(id){
      that = this
      // 获取元素
      this.main = document.getElementById(id)

      this.ulEle = this.main.querySelector('ul')
      this.contentEle = this.main.querySelector('.content')
      this.addEle = document.getElementsByClassName('add')[0]
      this.init()
    }
    init(){

      this.list = this.main.querySelectorAll('li')
      this.contents = this.main.querySelectorAll('section')

      this.closeEle = this.main.querySelectorAll('.close')
      console.log(this.list)
      console.log(this.closeEle)
      // 初始化，绑定事件
      this.list && this.list.forEach((item,index) => {
        item.index = index
        item.onclick = this.change
      })
      this.closeEle && this.closeEle.forEach((item,index) => {
        item.index = index
        item.onclick = this.del
      })
      this.addEle.onclick = this.add
    }
    // 切换
    change(){
      that.clearClass()
      // this 指向调用者 this.list.item
      this.className = 'navItem active'
      // 此句会报错，因为this指向问题，导致拿不到contents
      // this.contents[this.index].className = 'contentActive'
      that.contents[this.index].className = 'contentActive'

    }
    clearClass(){
      this.list.forEach((item)=>{
        item.className = 'navItem'
      })
      this.contents.forEach((item)=>{
        item.className = 'hide'
      })
    }
    // 添加
    add(){
      that.ulEle.insertAdjacentHTML('beforeend','<li class="navItem">新选项卡<span class="close">x</span></li>')
      that.contentEle.insertAdjacentHTML('beforeend','<section class="hide">新内容</section>')
      that.init()
    }
    // 删除
    del(e){
      let index = this.index
      console.log('index',this.index)
      console.log('index',Array.from(that.list))
      // 阻止冒泡
      e.stopPropagation();
      // 删除元素
      that.list[index].remove()
      that.contents[index].remove()
      that.init()
    }
    // 修改
    edit(){}
  }
  let tab = new Tab('app')
}