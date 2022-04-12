<template>
  <div class="recommendationSongList">
    <div class="titleHead">
      <div class="title">推荐歌单</div>
      <div class="more">更多
        <span class="iconfont icon-gengduo"></span>
      </div>
    </div>
    <div class="songList">
      <div class="songItem" v-for="(item, index) in songList" :key="index" @click="toDetail(item.id)">
        <div class="songCount">
          <img :src="item.coverImgUrl" class="songImg">
          <span class="playWrap">
            <span class="playIcon iconfont icon-bofang"></span>
            <span class="playCount">{{toChineseNum(item.playCount)}}</span>
          </span>
        </div>
        <div class="songName maxLineTwo">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useRouter } from 'vue-router'
  import { defineComponent, ref } from "vue";
  import { getHighGualityApi, getHighQualityDetailApi,getSongUrlApi } from '../api/index'
  export default defineComponent({
    name: "recommendationSongList",
    setup() {
      const router = useRouter()
      let songList = ref([])
      getHighGualityApi({limit: 20}).then(res => {
        if(res.code !== 200) return
        console.log(res);
        songList.value = res.playlists
      })
      function toChineseNum(num) {
        const n = new Number(num/10000)
        return n.toFixed(1) + '万'
      }
      function toDetail(id) {
        router.push({
          name: 'songDetail',
          query: {
            detailId: id
          }
        })
        getHighQualityDetailApi({id})
        // getSongUrl({id:'1413481294'})
      }
      return {
        songList,
        toChineseNum,
        toDetail
      }
    },
  });
</script>
<style lang="" scoped>
.recommendationSongList {
  border-top: 1px solid rgb(220, 220, 220, .4);
  padding: 10px;
  margin-top: 10px;
  border-bottom: 10px solid rgb(220, 220, 220, .4);
}
.titleHead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.title {
  font-weight: bold;
}
.more {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 20px;
  font-size: 13px;
}
.songList {
  display: flex;
  overflow-x: scroll;
  padding: 0 10px;
  margin-top: 20px;

}
.songItem {
  border-radius: 20px;
  margin-right: 15px;
}
.songCount {
  width: 120px;
  height: 120px;
  position: relative;
  border-radius: 20px;
}
.songImg {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.playWrap {
  position: absolute;
  top: 5px;
  right: 7px;
  color: rgb(255, 255, 255);
  line-height: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 3px;
}
.playIcon {
  font-size: 13px;
  margin-right: 5px;
}
.playCount {
  font-size: 12px;
}
.songName {
  font-size: 13px;
  line-height: 20px;
}
</style>