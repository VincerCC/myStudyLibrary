<template>
  <h2>
    teleport组件，可以让组件的html在父组件界面（app）外的特定标签下插入显示
  </h2>
  <button @click="showModel = true">
    显示model，注意观察F12标签,会发现box组件会创建在app外层
  </button>
  <teleport to="body" v-if="showModel">
    <div class="box">
      <!-- <div class="dialog"></div> -->
      <div class="content">
        <div class="title">这是model</div>
        <div @click="showModel = false" class="close">关闭</div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const showModel = ref(false);
    return {
      showModel,
    };
  },
});
</script>
<style lang="css" scoped>
.box {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  text-align: center;
  border: 1px solid black;
  line-height: 100px;
  background: #fff;
}
.close {
  border-top: 1px solid black;
}
</style>
