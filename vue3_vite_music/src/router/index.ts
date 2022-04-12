
import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../views/home.vue';
import Mine from '../views/mine.vue';
import SongDetail from '../views/songDetail.vue';
import { Store, useStore } from "vuex"
const store: Store<any> = useStore()

console.log(store)
// // 调用store方法，设置state
// store.dispatch('SET_TODO', todo)
const routes= [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  {
    path: '/songDetail',
    name: 'songDetail',
    component: SongDetail
  }
]

const router = createRouter({
  // createWebHistory路由模式路径不带#号
  // createWebHashHistory路由模式路径带#号
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(to.name)

  next()
})
export default router;

