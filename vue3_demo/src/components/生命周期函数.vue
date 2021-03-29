<template>
  <div>
    <h1>{{count}}</h1>
  </div>
</template>

<script>
// getCurrentInstance 获取当前实例
import { onBeforeMount, onMounted, getCurrentInstance, onBeforeUpdate, onUpdated,ref } from 'vue'
// vue3.0 onMounted =>vue2.0 mounted
export default {
  name: '',
  setup(props) {
    const instance = getCurrentInstance()
    const count = ref(0)
    setTimeout(() => {
      count.value = 1
    }, 3000);
    console.log(instance)
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(()=>{
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    return {
      count
    }
  }
 }
</script>

<style lang="" scoped>
</style>