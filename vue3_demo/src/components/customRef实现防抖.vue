<template>
  <div class="">
    {{text}}
    <input type="text" v-model="text">
  </div>
</template>

<script>
import { customRef } from 'vue';
// customRef
// 创建一个自定义引用，显式控制其依赖项跟踪和更新触发。
// 它需要一个 factory 函数，该函数将 track 和 trigger 函数作为参数接收，并且应该返回一个带有 get 和 set 的对象。
console.log(customRef)
let inputDebounce = function(value, timeout){
  let t = null;
  return customRef((track, trigger)=>{
    return {
      get(){
        track();
        return value;
      },
      set(newVal){
        clearTimeout(t);
        t = setTimeout(() => {
          value = newVal;
          trigger();
        }, timeout);
      }
    }
  })
}
export default {
  name: 'customRef',
  setup() {
    let text = inputDebounce('',200)
    return {
      text
    }
  },
 }
</script>

<style lang="" scoped>
</style>