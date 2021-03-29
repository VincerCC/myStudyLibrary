<template>
  <div id="app">
    <h1>HelloWorld</h1>
    <HelloWorld :msg="msg" @showMy="showMy"/>
    <hr/>
    <h1>ts</h1>
    <ts/>
  </div>
</template>

<script lang='ts'>
import HelloWorld from './components/HelloWorld.vue'
import ts from './components/ts.vue'

import { Component, Vue} from 'vue-property-decorator';
@Component({
  components:{
    HelloWorld,
    ts
  }
}) //装饰器
export default class App extends Vue {
  msg: string = 'Welcome to Your Vue.js App'
  showMy(res:string){
    console.log('触发了父组件的事件，子组件传递值为'+res)
    this.msg = res
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
