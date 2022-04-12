<template>
    <div class="applicationList">
      <div
        class="applicationItem"
        v-for="(item, index) in applicationList"
        @click="toAppDetail(item.url)"
        :key="index">
        <div class="applicationIcon">
          <img :src="item.iconUrl">
        </div>
        <span class="applicationName">{{ item.name }}</span>
      </div>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Dialog } from 'vant';
  export default defineComponent({
    name: "applicationList",
    props: {
      'applicationList': {
        type: Array,
        default: () => []
      }
    },
    setup() {
      function toAppDetail(id) {
        Dialog({ message: '别催，wdnmd，功能还没做！' });
      }
      return {
        toAppDetail
      }
    }
  });
</script>
<style lang="" scoped>
.applicationList {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  overflow-x: scroll;
  flex-wrap: no-wrap;
}
.applicationItem {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.applicationName {
  font-size: 14px;
  margin-top: 10px;
}
.applicationIcon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgb(215, 19, 69);
}
.applicationIcon img {
  width: 100%;
  height: 100%;
}
</style>