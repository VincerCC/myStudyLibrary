// 类型保护，就是能够更精确知道当前是什么类型，从而调用当前类型的方法
function double(input:string | number | boolean){
  //这里只能input.字符串，数字，布尔值共有的方法，input.toLocaleString,input.toString,input.valueOf
  if(typeof input === 'string'){
    // 这里就能使用字符串所有方法
    input.toUpperCase()
  }else if(typeof input === 'number'){
    // 这里就能使用数字所有方法
    input.toFixed(0)
  }else{
    // 这里就能使用布尔值所有方法
    input.valueOf()
  }
}


class Animal{
  public name:string='动物'
}
class Bird extends Animal{
  public swing:number=2
}
function getAnimalName(val:Animal){
  // 这里只能访问到Animal的属性name
  // val.name
  if(val instanceof Bird){
    // 这里能访问Bird的属性已经父类Animal属性
    val.name
    val.swing
  }else{
    val.name
  }
}


