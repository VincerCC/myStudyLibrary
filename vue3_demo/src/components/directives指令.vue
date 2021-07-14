<template>
  <div>
    局部自定义指令，控制自动聚焦

    <input type="text" v-focus:我是参数arg="我是值value">
  </div>
  <div>
    全局自定义指令，控制显示隐藏 -- permissions {{myPermissions}}
    <input type="text" v-permissions="myPermissions">
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "",
    directives: {
      // 局部自定义指令
      focus: {
        // 指令的定义
        mounted(el, binding) {
          console.log([el],'el')

          el.value='我是自动填充'

          el.focus()

          el.onfocus = ()=>{
            console.log('我聚焦了')
          }
          console.log(binding,'binding')
          console.log(binding.arg,'binding.arg')
          console.log(binding.value,'binding.value')
        }
      }
    },
    setup() {
      let myPermissions = ref('no')

      setTimeout(()=>{
        myPermissions.value = 'yes'
        console.log(myPermissions)
      },3000)
      return {
        msg: '我是自定义指令',
        myPermissions,
      }
    },
  });
</script>
<style lang="" scoped>
</style>