<template>
  <div class="songDetail">
songDetail
  </div>
</template>

<script lang="ts">
  import { useRoute } from 'vue-router'
  import { defineComponent } from "vue";
  import { getHighQualityDetailApi } from '../api/index'
  export default defineComponent({
    name: "songDetail",
    setup() {
      const route = useRoute()
      getHighQualityDetailApi({
        id:route.query.detailId
      })
    },
  });
</script>
<style lang="" scoped>
</style>