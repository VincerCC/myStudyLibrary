<template>
  <div class="">
  </div>
</template>

<script>
import { reactive, readonly } from 'vue';
export default {
  name: 'readonly',
  setup() {
    let myReactive = reactive({
      a:1,
      b:2,
      c:{
        d:3,
        e:4
      }
    })
    myReactive.a = 'a'
    console.log(myReactive)
    let readOnlyMyReactive = readonly(myReactive)
    readOnlyMyReactive.b='b'
    // 报警告，被readonly包裹是只读的，Set operation on key "b" failed: target is readonly.
    console.log(readOnlyMyReactive)
  },
 }
</script>

<style lang="" scoped>
</style>