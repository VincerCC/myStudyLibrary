var len1 = ({} + {}).length
// 先将{}转换为原始类型，调用{}.valueOf()，返回的是对象本身
// 因为valueOf()返回的是对象本身，所以继续调用 {}.toString() => [object Object]
// 最终 '[object Object][object Object]'.length
console.log(len1) // 30

var len2 = ([] + []).length
// 因为隐式调用了 toString(), 实际上内部使用的是[].join(',')
// [].toString() => ''  [1,2,3].toString() => '1,2,3'
// 最终 ''.length
console.log(len2) // 0

var len3 = (function(){}).length
// 因为function test(a,b){}
//     test.length()  => 是形参个数
// 最终 0
console.log(len3) // 0