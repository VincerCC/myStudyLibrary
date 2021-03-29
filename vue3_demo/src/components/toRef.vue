<template>
  <div class="">
    toRef -> F12 控制台看 console
    {{state.name}}-{{nameRef}}
    <button @click="changeName1">changeName李四</button>
    <button @click="changeName2">changeName王五</button>
  </div>
</template>

<script>
import { reactive, toRef } from 'vue'
// toRef 是将某个对象中的某个值转化为响应式数据，其接收两个参数，第一个参数为 obj 对象；第二个参数为对象中的属性名


// toRef 一般用在当外界的函数需要用到reactive里的属性时，如果直接传入state.name，外界函数【实参.value】获取不到，需要用toRef包裹一层，才能获取到
function s(name){
  console.log(name)
  return `Hi ${name.value}`
}
export default {
  name: '',
  setup(props) {
    const state = reactive({
      name: '张三',
      age: 18
    })
    const nameRef = toRef(state, 'name')
    console.log(nameRef.value)
    console.log(state.name)




    const changeName1 = ()=>{
      nameRef.value = '李四'
      console.log(nameRef.value)
      console.log(state.name)
    }
    const changeName2 = ()=>{
      state.name = '王五'
      console.log(nameRef.value)
      console.log(state.name)
    }
    const s1 = s(state.name)// Hi undefined
    const s2 = s(nameRef)// Hi 张三
    console.log(s1)
    console.log(s2)
    return {
      state,
      nameRef,
      changeName1,
      changeName2
    }
  }
 }
</script>

<style lang="" scoped>
</style>