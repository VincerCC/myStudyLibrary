<template>
  <div class="">
    toRefs -> F12 控制台看 console
    {{state.name}}-{{name}}
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// toRefs() 将响应式的对象变为普通对象 再解构，在模板中就可以直接使用属性，不用state.name

export default {
  name: '',
  setup() {
    const state = reactive({
      name: '张三',
      age: 18
    })
    const stateRefs = toRefs(state)
    console.log(stateRefs.name.value)
    console.log({
      ...stateRefs
    })
    console.log(state.name)





    return {
      state,
      ...stateRefs
    }
  }
 }
</script>

<style lang="" scoped>
</style>