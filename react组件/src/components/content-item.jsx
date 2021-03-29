import React from 'react'
// 导入样式表
import style from '../css/style.css'
console.log(style)
// css是在全局生效的
// vue中可以使用scoped解决这个问题，
//react中可以给css-loader添加参数modules启用模块化,css-loader?modules
// 注意：模块化只针对class或者id选择器，标签选择器仍然是全局的
class CmtItem extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    const { list } = this.props
    const display = list.length === 0 ? 'block' : 'none'
    console.log(list)
    return <div>
      <h2 style={{ display: display }}>没有数据啦</h2>
      {list.map((item, index) => {
        return <div key={index} className={style.box}>
          <div className={style.name}>{item.name}</div>
          <div className={style.content}>
            <div>{item.content}</div>
            <button className='title' onClick={() => this.del(index)}>删除</button>
          </div>
        </div>
      })}
    </div>
  }
  del(index) {
    let { list } = this.props
    console.log(list)
    console.log(index)
    if (window.confirm(`确定删除${list[index].name}的评论吗`)) {
      //确认后删除
      this.props.delList(index)
    }
  }
  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  changeContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }
}
export default CmtItem