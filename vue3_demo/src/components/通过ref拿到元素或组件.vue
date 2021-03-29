<template>
  <div class="">
    <div ref="myDiv">张三</div>
    <!-- 循环绑定ref -->
    <!-- ref在for循环中使用方法 -->
    <ul>
      <li v-for="(item,index) in students" :key="index" :ref="el => { if(el) myLiRefs[index] = el}">{{item.name}}</li>
    </ul>
    <button @click="changeName">获取ref</button>
    <customRef ref="myCustomRef"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import customRef from './customRef实现防抖'
export default {
  name: 'refs',
  components:{
    customRef
  },
  setup(){
    let students = ref([
      {name:'李四'},
      {name:'王五'}
    ])
    let myDiv = ref(null)
    let myCustomRef = ref(null)
    // ref在for循环中使用方法
    let myLiRefs = ref([])
    const changeName = ()=>{
      console.log(myDiv.value)
      console.log(myCustomRef.value)
      console.log(myLiRefs.value)
    }
    return {
      myDiv,
      myCustomRef,
      students,
      myLiRefs,
      changeName
    }
  }
 }
</script>

<style lang="" scoped>
</style>