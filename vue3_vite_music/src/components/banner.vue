<template>
  <div class="swipeWrap">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
      <van-swipe-item v-for="(item, index) in imageList" :key="index" @click="toDetail(item.id)">
        <img :src="item.url" class="swipeImg">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "banner",
    props: {
      'imageList': {
        type: Array,
        default: () => []
      }
    },
    setup(props, { emit }) {
      const toDetail = (id) => {
        emit('toDetail', id)
      }
      return {
        toDetail
      }
    },
  });
</script>
<style lang="" scoped>
.swipeWrap {
  padding: 12px;
}
.my-swipe {
  width: 100%;
  max-width: 750px;
  height: 170px;
  border-radius: 10px;
}
.swipeImg {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>