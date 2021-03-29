<template>
  <div class="">
    {{num}}
    <button @click="add">add+1</button>
  </div>
</template>

<script>
import { ref } from 'vue'
// vue2.0的data(){ return {} } ==> vue3.0 变成在setup函数中return {}，但是不是响应式数据
// 要变成响应式数据，需要使用vue3.0的api
// import { ref } from 'vue',
// 然后 const count = ref(0)
// js中访问需要使用count.value
// 模板中访问可以直接count
// 在setup中return { count }
export default {
  name: '',
  setup(props) {
    const num = ref(0)
    const add = ()=>{
      num.value++
    }
    return {
      num,
      add
    }
  }
 }
</script>

<style lang="" scoped>
</style>