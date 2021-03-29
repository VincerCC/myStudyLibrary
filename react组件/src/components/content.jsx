import React from 'react'
// 导入样式表
import style from '../css/style.css'
console.log(style)
// css是在全局生效的
// vue中可以使用scoped解决这个问题，
//react中可以给css-loader添加参数modules启用模块化,css-loader?modules
// 注意：模块化只针对class或者id选择器，标签选择器仍然是全局的
class CmtList extends React.Component{
    constructor(){
        super()
        this.state={
            list:[
                {id:1,name:'张三',content:'哈哈哈'},
                {id:2,name:'李四',content:'啊啊啊'},
                {id:3,name:'王五',content:'哦哦哦'},
            ],
            msg:'aa'
        }
    }
    //简洁写法
    // state = {
    //     list:[
    //         {id:1,name:'张三',content:'哈哈哈00'},
    //         {id:2,name:'李四',content:'啊啊啊'},
    //         {id:3,name:'王五',content:'哦哦哦'},
    //     ],
    //     msg:'aa'
    // }
    render(){
        return <div>
            <h1>我是评论组件</h1>
            {/* 如果不提供onChange的话，这里的value将是只读不可写的 */}
            {/* react默认是单向数据流，如果想要拿到文本框的值并且同步到state，有两种办法 */}
            {/* 1.通过在onChange中传一个参数e，在事件中用   e.target.value 获取     */}
            {/* 2.通过给input指定一个ref，事件中使用 this.refs.引用名.value 获取 */}
            <input type="text" ref="myInput" value={this.state.msg} onChange={(e)=>this.change(e)} />
            <button onClick={() => this.add()}>添加</button>

            {this.state.list.map((item,index)=>{
                return <div key={index} className={style.box}><h1>{this.state.msg}</h1>
                    <div className={style.name}>{item.name}</div>
                        <div className={style.content}>
                            <div>{item.id}</div>
                            <div>{item.content}</div>
                            <button className='title' onClick={ ()=>this.del(index) }>删除</button>
                            <button className='title' onClick={ ()=>this.show(index) }>显示</button>
                        </div>
                    </div>
            })}
            </div>
    }
    del=(index)=>{
        console.log(index)
        this.state.list.splice(index,1)
        // console.log("删除了",this.state.list)
        this.setState(
            //setState只会修改对应的数据，不会覆盖其他未改变的数据
            {
            list:this.state.list,
            msg:'bb'
        },function(){
            console.log(this.state.msg)
        })

        //setState是异步的，不会即时拿到修改的值,如果希望即时使用最新值，应该在setState的回调中操作
        console.log(this.state.msg)
    }
    show=(index)=>{

        //setState是异步的，不会即时拿到修改的值,如果希望即时使用最新值，应该在setState的回调中操作
        console.log("显示")
        console.log(this.refs.myInput.value)
    }
    change=(e)=>{
        this.setState({
            msg:this.refs.myInput.value
        })

        // this.setState({
        //     msg:e.target.value
        // })

        console.log(this.refs.myInput.value)
        console.log(e.target,e.target.value)
        //setState是异步的，不会即时拿到修改的值,如果希望即时使用最新值，应该在setState的回调中操作
        console.log("显示")
    }
}
export default CmtList