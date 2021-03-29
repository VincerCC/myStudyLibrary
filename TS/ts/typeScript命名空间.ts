// 命名空间
// 使用namespace包裹代码
// 目的是为了变量命名的冲突

// 需要在cmd中，进入到js文件目录，使用node typeScript命名空间.js 看效果
namespace vince {
  //创建类
  export class Animal{

    public fullName:string = ''
    constructor(firstName:string){
      this.fullName = `我是${firstName}`
    }
    // 实例方法
    say():void{
      console.log(this.fullName,'命名空间被访问了')
    }
  }

  // 继承类
  export class Dog extends Animal{
    dogName:string = '狗类'
    constructor(firstName:string){
      // 调用父类构造函数
      super(firstName)
    }
    say():void{
      //能获取到父类的public属性fullName
      console.log(this.fullName,'dog类中读取父类的fullName')
    }
  }

}

var v =new vince.Animal('命名空间')
v.say()
