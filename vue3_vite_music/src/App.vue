<template>
  <router-view class="view"></router-view>
  <Footer v-if="isShowFooter" :currentRoute="currentRoute"></Footer>
</template>

<script>
import {reactive, ref, watchEffect} from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  },
  setup(props, context) {
    const route = useRoute()
    let isShowFooter = ref(true)
    let currentRoute = reactive('home')
    watchEffect(()=>{
      isShowFooter.value = ['home', 'mine'].includes(route.name)
      currentRoute = route.name
    })
    console.log('currentRoute',currentRoute)
    console.log('route',route)
    return {
      isShowFooter,
      currentRoute
    }
  }
}
</script>
<style>
.view {
  /* margin-bottom: 60px; */
}

</style>
