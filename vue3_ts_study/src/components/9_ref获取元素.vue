<template>
  <h2>ref获取元素</h2>
  <input type="text" ref="inputRef" />
  <child ref="childRef" />
  <!-- 循环绑定ref -->
  <!-- ref在for循环中使用方法 -->
  <ul>
    <li
      v-for="(item, index) in students"
      :key="index"
      :ref="
        (el) => {
          if (el) myLiRefs[index] = el;
        }
      "
    >
      {{ item.name }}
    </li>
  </ul>
  <button @click="getEl">获取元素</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import child from "./8_toRefs.vue";
export default defineComponent({
  name: "",
  components: { child },
  setup() {
    let students = ref([{ name: "李四" }, { name: "王五" }]);

    const inputRef = ref<HTMLElement | null>(null);
    const childRef = ref<any>(null);
    const myLiRefs = ref([]);
    const getEl = () => {
      console.log(inputRef);
      console.log(childRef);
      console.log(myLiRefs);
      inputRef.value && inputRef.value.focus();
      console.log("name", childRef.value.name);
    };
    return {
      students,
      inputRef,
      childRef,
      myLiRefs,
      getEl,
    };
  },
});
</script>
<style lang="" scoped></style>
