type NameString = string;
// let N:NameString = 1//不能将类型“number”分配给类型“string”
let N:NameString = '1'

type NameNumber = number
type NumberOrString = NameNumber | NameString;


// 参数 n: NumberOrString === n:number | string
// 函数返回string类型
function getName(n: NumberOrString): NameString {
  return ''
}
