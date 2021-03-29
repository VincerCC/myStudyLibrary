import VueRouter from 'vue-router'
import home from './components/tabbars/home.vue'
import member from './components/tabbars/member.vue'
import shopcar from './components/tabbars/shopcar.vue'
import newlist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photo from './components/photos/photo.vue'
import photoinfo from './components/photos/photoinfo.vue'
import shoplist from './components/shop/shoplist.vue'
import shopinfo from './components/shop/shopinfo.vue'
import shopdesc from './components/shop/shopdesc.vue'
import shopcom from './components/shop/shopcom.vue'
//创建路由对象
var router=new VueRouter({
	routes:[//配置路由规则
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/member',component:member},
		{path:'/shopcar',component:shopcar},
		{path:'/home/newslist',component:newlist},
		{path:'/home/newsinfo/:id',component:newsinfo},
		{path:'/home/photo',component:photo},
		{path:'/home/photoinfo/:id',component:photoinfo},
		{path:'/home/shoplist',component:shoplist},
		{path:'/home/shopinfo/:id',component:shopinfo},
		{path:'/home/shopdesc/:id',component:shopdesc},
		{path:'/home/shopcom/:id',component:shopcom}
	],
	linkActiveClass:'mui-active'//覆盖默认的路由高亮类router-link-active
})

//把路由暴露出去
export default router