<template>
  <div class="">
    {{state.num}}
    <button @click="add">add+1</button>
    <hr>
    {{shallowState.name}}-{{shallowState.age.num}}
    <button @click="changeShallowReactiveNum">changeShallowReactiveNum</button>
    <button @click="changeShallowReactiveName">changeShallowReactiveName</button>
    <br />
    {{reactiveState.name}}-{{reactiveState.age.num}}
    <button @click="changeReactiveNum">changeReactiveNum</button>
    <button @click="changeReactiveName">changeReactiveName</button>
  </div>
</template>

<script>
import {
  reactive,
  isProxy,
  readonly,
  isReactive,
  isReadonly,
  shallowReactive } from 'vue'
// vue2.0的data(){ return {} } ==> vue3.0 变成在setup函数中return {}，但是不是响应式数据
// 要变成响应式数据，需要使用vue3.0的api
// import { reactive, ref } from 'vue',
// 然后 const state = reactive({count:0})
// js访问需要state.count
// 模板中也需要state.count
// 在setup中return { state }

// shallowReactive 只能代理到第一层的值，深层级都不代理


// isProxy检测一个对象是不是由reactive或者readonly包装的proxy对象
export default {
  name: '',
  setup(props) {
    // shallowReactive包裹的，深度变量不会触发响应式
    const shallowState = shallowReactive({
      name:'张三',
      age:{
        num:0
      }
    })
    console.log(isReactive(shallowState.age))//false，没被代理，不是响应式数据

    const changeShallowReactiveNum = ()=>{
      // 深度的num，不会触发响应式
      shallowState.age.num++
    }
    const changeShallowReactiveName = ()=>{
      // 会触发响应式
      shallowState.name = '李四'
    }


    // reactive包裹的，深度变量都具有响应式
    const reactiveState = reactive({
      name:'张三',
      age:{
        num:0
      }
    })
    console.log(isReactive(reactiveState.age))//false，没被代理，不是响应式数据

    const changeReactiveNum = ()=>{
      // 深度的num，会触发响应式
      reactiveState.age.num++
    }
    const changeReactiveName = ()=>{
      // 会触发响应式
      reactiveState.name = '李四'
    }




    const state = reactive({
      num:0
    })
    console.log(isProxy(state), isReactive(state), isReadonly(state)) // true true false

    const stateReadOnly = readonly(state)
    console.log(isProxy(stateReadOnly), isReactive(stateReadOnly), isReadonly(stateReadOnly))  //true true true

    const stateReadOnly2 = readonly({name:'a'})
    console.log(isProxy(stateReadOnly2), isReactive(stateReadOnly2), isReadonly(stateReadOnly2))  //true false true

    const objProxy = new Proxy({a:1},{})
    console.log(isProxy(objProxy))  //false 只有reactive或者readonly包裹的proxy才算


    const add = ()=>{
      state.num++
    }
    return {
      // 变量start
      state,
      shallowState,
      reactiveState,
      // 变量end


      // 方法start
      add,
      changeShallowReactiveNum,
      changeShallowReactiveName,
      changeReactiveNum,
      changeReactiveName
      // 方法end
    }
  }
 }
</script>

<style lang="" scoped>
</style>