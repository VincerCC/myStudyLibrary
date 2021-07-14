// state 唯一的数据源，我们需要把任何一个组件中需要抽取出来的变量放入到state中去
export default {
  count:0//在需要用的地方，在模板(html代码)中用$store.state.count使用这个数据，在js中要加上this
}