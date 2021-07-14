// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入store
import store from './store/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render:function(creatElement){
  //   return creatElement(App)//将组件的template渲染到html文件中#app区域内
  //   //可以简写为render:h=>h(App)
  // },
  render:c=>c(App),
  store
})
