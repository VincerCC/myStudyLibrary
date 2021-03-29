import React from 'react'//创建组件，虚拟Dom元素，生命周期
import CmtList from '@/component/content'
class Hello extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.name,
            age:this.props.age,
            msg:''
        }
    }
    btnFn=()=>{
        console.log(this.refs.cmtList)
        console.log(this.state)
        this.refs.cmtList.show()
    }
    parent=(val)=>{
        this.setState({
            msg:val
        })
        console.log('我是父组件的一个方法,我通过参数传递给子组件，子组件调用了我',val)
    }
    render(){
        return <div>
            <h1>你好，{this.state.name},我是Hello组件,我{this.state.age}岁了~~</h1>
            <h2>子组件传递参数给父组件：{ this.state.msg }</h2>
            <CmtList ref='cmtList' parentFn={this.parent}/>
            <button onClick = { () => { this.btnFn() }}>点我触发子组件的方法</button>
        </div>
    }
    componentDidMount(){
        console.log('组件完成挂载')
    }
}
export default Hello