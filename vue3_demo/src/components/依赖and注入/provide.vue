<template>
  <div class="">
    provide
    <myInject />
  </div>
</template>

<script>
import myInject from './inject'

import { provide,readonly, ref } from 'vue'
export default {
  name: '',
  components:{
    myInject
  },
  setup() {
    let user = ref({
      name:'张三',
      age: 18
    })
    provide('user',readonly(user))//readonly不允许子组件直接修改数据，需要通过父组件的方法修改
    const changeName = ()=>{
      user.value.name = '王五'
    }
    // 准备一个函数，传递下去
    provide('changeName',changeName)

    return {
      user
    }
  }
  // vue2的写法
  // provide(){
  //   return {
  //     user:this.user
  //   }
  // },
 }
</script>

<style lang="" scoped>
</style>