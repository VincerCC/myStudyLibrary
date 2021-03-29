import React from 'react'
import CmtAdd from './content-add'
import CmtItem from './content-item'
class CmtList extends React.Component{
    constructor(){
        super()
        this.state={
            list:[
                {name:'张三',content:'哈哈哈'},
                {name:'李四',content:'啊啊啊'},
                {name:'王五',content:'哦哦哦'},
            ]
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


            <CmtAdd addList={this.addList}/>
            <br/>
            <hr/>
            <br/>
            <CmtItem list={this.state.list} delList={this.delList}/>
            </div>
    }
    addList=(obj)=>{
        let comments = this.state.list
        //添加对象到数组里边
        comments.unshift(obj)
        console.log(comments)
        //更新状态
        this.setState({
            list:comments
        })
    }
    delList=(index)=>{
        console.log(index)
        let comments = this.state.list
        //添加对象到数组里边
        comments.splice(index,1)
        console.log(comments)
        //更新状态
        this.setState({
            list:comments
        })
    }
}
export default CmtList