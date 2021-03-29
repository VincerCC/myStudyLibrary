<template>
  <div ref="myRef">{{text}}</div>
</template>

<script>
import { watchEffect, ref, onBeforeUpdate, onMounted } from 'vue';
export default {
  name: 'watchEffect',
  setup() {
    const text = ref('=text=')
    const myRef = ref(null)
    // 每当props更新都会执行watchEffect和watch
    // watchEffect 和 watch 最大区别是，watchEffect初次渲染也会触发，而watch是在监听值改变后触发

    // watchEffect 里所用到过的的所有数据（test），都会被自动监听
    // 使用变量接收watchEffect的返回值，执行即会取消监听
    // watchEffect的第一个参数，可以传入一个onInValidate，这是个函数，触发时机是在每次改变值之前
    // watchEffect默认会在组件被更新onBeforeUpdate之前调用
    // watchEffect的第二个参数，传入对象，里边有一些配置项
    let stop = watchEffect((onInValidate)=>{
      console.log(myRef.value)
      // 我使用了text，将会自动监听他的所有改变
      console.log(text.value)

      onInValidate(()=>{
        // 可以在这个回调里阻止值的改变
        console.log('WatchEffect is changed!')
      })
    },{
      flush:'post'//这个参数可以控制watchEffect在onBeforeUpdate之后触发
    });


    setTimeout(() => {
      text.value = '@text@'
      setTimeout(() => {
        stop()

        text.value = '被取消监听了'
      }, 2000);
    }, 2000);


    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate')
    })
    onMounted(() => {

    })
    return {
      text,
      myRef
    }
  },
 }
</script>

<style lang="" scoped>
</style>