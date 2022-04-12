<template>
  <h2>子组件</h2>
  <h3>{{ msg }}</h3>
  <button @click="updateMsg">更新数据</button>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  onUnmounted,
  onBeforeUnmount,
  onBeforeUpdate,
  onUpdated,
  onBeforeMount,
  onMounted,
} from "vue";
export default defineComponent({
  name: "",
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
    const msg = ref("默认msg");
    const updateMsg = () => {
      msg.value = "我更新了msg数据";
    };
    onBeforeMount(() => {
      console.log("子组件onBeforeMount");
    });
    onMounted(() => {
      console.log("子组件onMounted");
    });
    onBeforeUpdate(() => {
      console.log("子组件onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("子组件onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("子组件onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("子组件onUnmounted");
    });
    return {
      msg,
      updateMsg,
    };
  },
});
</script>
<style lang="" scoped></style>
