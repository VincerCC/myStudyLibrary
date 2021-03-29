import React from 'react'//创建组件，虚拟Dom元素，生命周期
// 第一种方式
function Hello(props){
    // 无论是vue还是react，组件的props都是只读的
    console.log(props)
    // return null//表示这个组件是空的，什么都不显示
    // 组件必须返回合法的虚拟DOM元素
    return <h1>你好，{props.name},我是Hello组件,我{props.age}岁了~~</h1>
}
// 将组件暴露出去
export default Hello