<template>
  <div class="mine">

      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in swiperImageList" :key="index">
          <!-- <img src="" class="swipeImg"> -->
          <div class="swipeImg">
          hahah</div>
        </van-swipe-item>
      </van-swipe>
      111
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "mine",
    setup() {
      let value = ref(10)

      const swiperImageList = [
        'http://p1.music.126.net/cMV5v5cAT3X9B7u4g6YoQg==/109951166552991004.jpg?imageView&quality=89',
        'http://p1.music.126.net/EV_3jPdl1YtnVWOA8nKhpA==/109951166552433372.jpg?imageView&quality=89',
        'http://p1.music.126.net/fMV8Prvmq1bTOYRcD2bvQw==/109951166553743439.jpg?imageView&quality=89'
      ]
      return {
        value,
        swiperImageList
      }
    },
  });
</script>
<style lang="" scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>