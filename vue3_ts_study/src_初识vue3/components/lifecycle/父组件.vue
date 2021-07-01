<template>
  <h2>父组件</h2>
  <!-- <button @click="showChild(true)">显示子组件</button><br /> -->
  <button @click="showChild">切换显示子组件</button>
  <child v-if="show" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeMount } from "vue";
import child from "./子组件.vue";
export default defineComponent({
  name: "",
  components: {
    child,
  },
  setup() {
    /**
     *  2.x                        3.x
     * beforeCreate     ---->     setup()
     * created          ---->     setup()
     * beforeMount      ---->     onBeforeMount()
     * mounted          ---->     onMounted()
     * beforeUpdate     ---->     onBeforeUpdate()
     * updated          ---->     onUpdated()
     * beforeDestroy    ---->     onBeforeUnmount()
     * destroyed        ---->     onUnmounted()
     * errorCaptured    ---->     onErrorCaptured()
     */
    onBeforeMount(() => {
      console.log("父组件onBeforeMount");
    });
    onMounted(() => {
      console.log("父组件onMounted");
    });
    let show = ref(true);
    const showChild = () => {
      show.value = !show.value;
    };
    return {
      show,
      showChild,
    };
  },
});
</script>
<style lang="" scoped></style>
