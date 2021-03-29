<template>
  <div class="">
    title:{{title}}
    <div style="border:1px solid #bfa;">
      <button @click="add">增加</button>
    </div>
  </div>
</template>

<script>
import { watch } from 'vue'
export default {
  name: '',
  props:{
    title:{
      type:String,
      default:'title'
    },
    count:{
      type:Number,
      default:0
    }
  },
  emits:[
    'add'
  ],
  setup(props,ctx) {
    console.log(props.title)
    // let title = props.title
    watch(()=>{
      // 监听父组件传递值title的改变
      return props.title
    },(newVal,oldVal)=>{
      console.log('父组件传递的new值',newVal)
      console.log('父组件传递的old值',oldVal)
    })
    const add = ()=>{
      ctx.emit('add',1)
    }
    return {
      add
    }
  }
 }
</script>

<style lang="" scoped>
</style>