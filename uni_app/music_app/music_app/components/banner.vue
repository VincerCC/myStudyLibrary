<template>
  <div class="swipeWrap">
    <swiper class="my-swipe" autoplay :interval="3000" circular indicator-dots indicator-active-color="red">
      <swiper-item v-for="(item, index) in imageList" :key="index" @click="toDetail(item.id)">
        <img :src="item.url" class="swipeImg">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "banner",
    props: {
      'imageList': {
        type: Array,
        default: () => []
      }
    },
	mounted() {
		console.log(this.imageList)
	}
  };
</script>
<style lang="less" scoped>
.swipeWrap {
  padding: 12px;
}
.my-swipe {
  width: 100%;
  max-width: 750px;
  height: 140px;
  border-radius: 10px;
}
.swipeImg {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>