<template>
  <myButton>按钮</myButton>
  <myInput placeholder="我是文本框"></myInput>
  <HelloWorld />
  <!-- {{count}}
  <childrenComponents :title="textCount" :count="count" @add="add"/> -->
  <!-- <debounceInput /> -->
  <!-- <computed /> -->
  <!-- <my-read-only /> -->
  <!-- <myWatch /> -->
  <!-- <myWatchEffect /> -->

  <!-- <myReactive /> -->
  <!-- <myRef /> -->
  <!-- <lifeFn /> -->
  <!-- <provideAndInject /> -->
  <!-- <myRefs /> -->
  <!-- <myToRef /> -->
  <myToRefs />
  <!-- <ul>
    <li v-for="(item,index) in data.responseData" :key="index">{{item.name}}</li>
    <li v-for="(item,index) in responseData" :key="index">{{item.name}}</li>
  </ul> -->
</template>

<script>
import { reactive, ref,watch, provide,readonly,toRefs, getCurrentInstance } from 'vue'
// import myWatch from './components/watch.vue'
// import myWatchEffect from './components/watchEffect.vue'
// import computed from './components/computed.vue'
// import debounceInput from './components/customRef实现防抖.vue'
// import myReadOnly from './components/readonly.vue'
// import myReactive from './components/reactive.vue'
// import myRef from './components/ref.vue'
// import childrenComponents from './components/childrenComponents.vue'
// import lifeFn from './components/生命周期函数.vue'
// import provideAndInject from './components/依赖and注入/provide.vue'
// import myRefs from './components/通过ref拿到元素或组件.vue'
// import myToRef from './components/toRef.vue'
import myToRefs from './components/toRefs.vue'



// import { h } from 'vue'
// vue 2 的mounted watch computed 均写在最外层
// vue 3 的 { onMounted, watch, computed } from 'vue' 都要写在setup函数内

// setup函数相当于vue2.0的beforeCreate和created,setup在beforeCreate之后执行



// h()是一个渲染函数，可以在setup中return，这个h()会替换掉整个template的内容


export default {
  name: 'App',
  components:{
    // myWatch,
    // debounceInput,
    // computed,
    // myReadOnly,
    // myWatchEffect,
    // myReactive,
    // myRef,
    // childrenComponents
    // lifeFn,
    // provideAndInject,
    // myRefs,
    // myToRef,
    myToRefs
  },
  setup(props, ctx) {
    return
    console.log(props, ctx)
    let count = ref(0)

    let textCount = ref('我是给子组件的值')

    let data = reactive({
      responseData:[]
    })
    let responseData = reactive([])
    setTimeout(() => {
      console.log('666')
      let respData = [
        {name:'name1'},
        {name:'name2'},
        {name:'name3'},
      ]
      data.responseData = respData
      responseData = respData
      console.log(responseData)
      console.log(data)
    }, 3000);

    setTimeout(() => {
      textCount.value = '3秒后传递给子组件的值改变了'
    }, 3000);
    const add = (val)=>{
      console.log('子组件传的值'+val)
      count.value += val
    }
    return {
      // 会被合并到template中，能够直接在template中使用，但是这样定义的是静态数据，不是响应式数据
      add,
      count,
      textCount,
      data,
      responseData
    }
    // return ()=>h('h1',[count.value])//会直接替换上边的template
  },

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
