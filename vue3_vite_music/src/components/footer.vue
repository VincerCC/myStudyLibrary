<template>
  <div class="footerList">
    <div
        :class="['footerItem', currentRouter === item.routerName ? 'active' : '']"
        v-for="(item, index) in footerList"
        :key="index"
        @click="changeRouter(item.routerName)">
        <span :class="['icon','iconfont', item.icon]"></span>
        <span class="footerName">{{ item.name }}</span>
      </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { useRouter } from 'vue-router'
  export default defineComponent({
    name: "",
    setup() {
      const router = useRouter();
      const footerList = [
        {
          icon: 'icon-yinle',
          name: '发现',
          routerName: 'home'
        },
        {
          icon: 'icon-leida',
          name: '播客',
          routerName: 'boke'
        },
        {
          icon: 'icon-shouye',
          name: '我的',
          routerName: 'mine'
        },
        {
          icon: 'icon-guanzhu',
          name: '关注',
          routerName: 'like'
        },
        {
          icon: 'icon-w_cunzhuang',
          name: '云村',
          routerName: 'yuncun'
        }
      ]
      let currentRouter = ref('home')

      const changeRouter = function(routerName) {
        currentRouter.value = routerName
        if( !['home', 'mine'].includes(routerName)) return
        console.log(';')
        router.push({
            name: routerName
        })

      }

      return {
        footerList,
        currentRouter,
        changeRouter
      }
    },
  });
</script>
<style lang="" scoped>
.footerList {
  z-index: 99;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  max-width: 750px;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #dcdcdc;
}
.footerItem {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.icon {
  font-size: 22px;
}
.active {
  color:rgb(215, 19, 69);
}
.footerName {
  font-size: 13px;
  margin-top: 5px;
}
</style>