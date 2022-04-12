<template>
  <h2>provide 与 inject</h2>
  <p>当前颜色： {{ color }}</p>
  <button @click="color = 'red'">父触发改变红色</button>
  <button @click="color = 'yellow'">父触发改变黄色</button>
  <button @click="color = 'green'">父触发改变绿色</button>
  <son />
</template>

<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import son from "./son.vue";
export default defineComponent({
  name: "",
  components: {
    son,
  },
  setup() {
    const color = ref("red");
    provide("color", color);
    const changeBlue = () => {
      color.value = "blue";
    };
    provide("changeBlue", changeBlue);
    return {
      color,
    };
  },
});
</script>
<style lang="" scoped></style>
