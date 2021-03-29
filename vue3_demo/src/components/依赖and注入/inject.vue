<template>
  <div class="">
    {{user.name}} - {{user.age}}
    <button @click="changeName">子组件调用父组件的方法改变名字</button>
    <button @click="changeNameByChild">子组件直接改变名字</button>
  </div>
</template>

<script>
import { inject } from 'vue'
// inject(name,default) (注入的名称，默认值)
export default {
  name: '',
  setup() {
    let user = inject('user',{name:'默认的',age:18})
    // 拿到传递的函数，绑定给点击事件
    let changeName = inject('changeName')
    console.log(user)

    let changeNameByChild = ()=>{
      user.value.name = '赵钱孙李'
      // Set operation on key "name" failed: target is readonly
    }
    return {
      user,
      changeName,
      changeNameByChild
    }
  },
  // inject:['user']// vue2的写法
 }
</script>

<style lang="" scoped>
</style>