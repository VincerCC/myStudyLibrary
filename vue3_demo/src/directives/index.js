/*
app.directive('xxx', {
  // 指令首次绑定到元素且在安装父组件之前...「等同于bind」
  beforeMount(el, binding, vnode, prevVnode) {

    // binding:数据对象
    //   + arg:传给指令的参数   v-xxx:n -> arg:"n"
    //   + modifiers:修饰符对象 v-xxx.stop -> modifiers:{stop:true}
    //   + value:指令绑定的值   v-xxx="1+1" -> value:2
    //   + oldValue:之前绑定的值
  },
  // 安装绑定元素的父组件时...「等同于inserted」
  mounted(el, binding) {},
  // 在包含组件的VNode更新之前...
  beforeUpdate(el, binding) {},
  // 在包含组件的VNode及其子VNode更新后...「等同于componentUpdated」
  updated(el, binding) {},
  // 在卸载绑定元素的父组件之前...
  beforeUnmount(el, binding) {},
  // 指令与元素解除绑定且父组件已卸载时...「等同于unbind」
  unmounted() {el, binding}
})
*/
export default (app) => {
  //自定义指令

  // 根据权限校验，选择元素显示隐藏
  let displayDom = function(el, binding){
    if(binding.value === 'no') {
      el.style = 'display:none;'
    } else {
      el.style = ''
    }
  }
  app.directive('permissions', {

    mounted(el, binding) {
      console.log([el],'el mounted')
      console.log(binding.value,'binding mounted')
      displayDom(el, binding)
    },
    updated(el, binding) {
      console.log([el],'el updated')
      console.log(binding.value,'binding updated')
      displayDom(el, binding)
    },
  })
}