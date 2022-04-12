<template>
<h2>son子组件</h2>
<grandSon />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import grandSon from './grandSon.vue'
  export default defineComponent({
    name: "",
    components:{
      grandSon
    }
  });
</script>
<style lang="" scoped>
</style>