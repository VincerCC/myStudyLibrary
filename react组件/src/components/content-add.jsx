import React from 'react'
class CmtAdd extends React.Component{
    constructor(){
        super()
        this.state={
          name:'',
          content:''
        }
    }
    render(){
        return <div>
            <h1>我是评论组件</h1>
            {/* 如果不提供onChange的话，这里的value将是只读不可写的 */}
            {/* react默认是单向数据流，如果想要拿到文本框的值并且同步到state，有两种办法 */}
            {/* 1.通过在onChange中传一个参数e，在事件中用   e.target.value 获取     */}
            {/* 2.通过给input指定一个ref，事件中使用 this.refs.引用名.value 获取 */}
            用户名：
            <input type="text" ref="myInput" value={this.state.name} onChange={(e)=>this.changeName(e)} />
            内容：
            <input type="text" ref="myInput" value={this.state.content} onChange={(e)=>this.changeContent(e)} />
            <button onClick={() => this.add()}>添加</button>
      </div>
    }
    add=()=>{
        //触发父组件的方法，添加对象到父组件的数组
        let obj = this.state
        this.props.addList(obj)
        //清空输入数据
        this.setState({
            name:'',
            content:''
        })
      console.log(obj)
    }
    changeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    changeContent=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
}
export default CmtAdd