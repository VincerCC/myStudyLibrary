<template>
  <div class="header">
    <div class="left">
      <span class="iconfont icon-31liebiao"></span>
      <span class="unRead"> {{ unReadNum }}</span>
    </div>
    <slot name="center"></slot>
    <slot name="right">
      <span class="iconfont icon-sousuo1"></span>
    </slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "header",
    props: ['unReadNum'],
    setup(props){
      const { unReadNum } = props
      console.log(props)
      return {
        unReadNum
      }
    }
  });
</script>
<style lang="" scoped>
.header {
  position: fixed;
  top: 0;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  max-width: 750px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #ffffff;
}
.iconfont {
  font-size: 24px;
}
.left {
  position: relative;
}
.unRead {
  position: absolute;
  left: 12px;
  top: -2px;
  width: 20px;
  height: 15px;
  font-size:10px;
  border-radius: 10px;
  text-align: center;
  line-height: 15px;
  background-color: #d71345;
  color: #ffffff;
}
</style>