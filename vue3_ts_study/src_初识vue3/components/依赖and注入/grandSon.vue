<template>
  <h2 :style="{ color: color }">grandSon孙子组件</h2>

  <button @click="changeBlue">子触发父方法改变蓝色</button>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "",
  setup() {
    let color = inject("color", "red");
    let changeBlue = inject("changeBlue");
    return {
      color,
      changeBlue,
    };
  },
});
</script>
<style lang="" scoped></style>
