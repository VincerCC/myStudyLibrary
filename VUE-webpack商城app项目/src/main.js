//入口文件
import Vue from 'vue'
//导入app组件
import app from './app.vue'
//导入mint-ui顶部组件
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui';
Vue.use(MintUI);
import {Header} from 'mint-ui';
Vue.component(Header.name, Header);

//导入mint-ui开关组件
import { Switch } from 'mint-ui';
Vue.component(Switch.name, Switch);
//导入轮播图
import {Swipe,SwipeItem} from 'mint-ui';
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
//导入button
import {Button} from 'mint-ui';
Vue.component(Button.name, Button);
//导入图片懒加载
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
//导入MUI库
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'
//导入Bootstrap库
import 'bootstrap/dist/css/bootstrap.css'

//导入路由包
import VueRouter from 'vue-router'
//安装路由模块
Vue.use(VueRouter)
//导入自己的router.js模块
import router from './router.js'

//导入vue-resource完成 ajax 请求
import vueResource from 'vue-resource'
Vue.use(vueResource)
//设置请求数据的根路径
Vue.http.options.root='http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON='true';

//导入axios
import axios from 'axios'
//设置数据根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3005';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//导入moment时间插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
	//moment()//直接调用将会得到当前时间
	return moment(dataStr).format(pattern)//传入指定时间
})

//安装缩略图插件
import VuePreview from 'vue-preview'
//挂载插件
Vue.use(VuePreview)

//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//从本地localStorage中导入数据到数组中
var shopCarArray=JSON.parse(localStorage.getItem('shopcar')||'[]')
var store=new Vuex.Store({
	state:{//this.$store.state.***
		shopcar:shopCarArray
//将购物车中的数据用数组存储到全局中，数组中可以存储一些商品的对象，可以设计成{id:商品id,count:购买的数量,price:商品单价，select:商品是否被选中}
	},
	mutations:{//this.$store.commit('方法名称',按需传参数)
		addToCar(state,shopinfo){
			//点击加入购物车，将商品信息保存到shopcar中
			//分析：
			//1.如果购物车中，已经有这件商品，那么只需要修改更新数量就行了
			//2.如果没有，则直接把商品数据push到shopcar中
			var flag=false//假设购物车中没有对应商品
			state.shopcar.some(item=>{
				if(item.id==shopinfo.id){
					item.count+=parseInt(shopinfo.count)//购物车已经有该商品,只需要将数量更新一下就行了
					flag=true;
					return true//终止some循环
				}
			})
			if(flag==false){//代表没有商品，则将商品所有信息加到shopcar中
				state.shopcar.push(shopinfo)
			}
			
			//更新shopcar后将数组存放到本地localStorage中
			localStorage.setItem('shopcar',JSON.stringify(state.shopcar))
		},
		updateshopinfo(state,shopinfo){
			//修改购物车中商品的数量值
			state.shopcar.some(item=>{
				if(item.id==shopinfo.id){
					//循环每一项，当当前循环的id=用户改变商品数量的id时候，更新商品的全局数量count
					item.count=parseInt(shopinfo.count)
					return true 
				}
			})
			//更新shopcar后将数组存放到本地localStorage中
			localStorage.setItem('shopcar',JSON.stringify(state.shopcar))
		},
		removedata(state,id){
			state.shopcar.some((item,i)=>{
				if(item.id==id){
					state.shopcar.splice(i,1)
				}
				return true
			})
			//删除之后重新将数据存放到本地
			localStorage.setItem('shopcar',JSON.stringify(state.shopcar))
		},
		updateSelect(state,obj){
			state.shopcar.some(item=>{
				if(item.id==obj.id){
					item.select=obj.select
				}
			})
			//将最新数据存放到本地
			localStorage.setItem('shopcar',JSON.stringify(state.shopcar))
		}
	},
	getters:{//this.$store.getters.***
		getAllCount(state){
			var c=0;
			state.shopcar.forEach(item=>{
				c+=item.count
			})
			return c
		},
		getCount(state){
			var obj={}
			state.shopcar.forEach(item=>{
				obj[item.id]=item.count
				//obj[item.id]是将item.id作为属性名,item.count作为属性值，加到obj中的
				//$store.getters.getCount[item.id],因为$store.getters.getCount返回的是对象，可以通过[属性名]来选择需要拿的属性值
			})
			return obj
		},
		getSwitch(state){
			var obj={}
			state.shopcar.forEach(item=>{
				obj[item.id]=item.select
				//obj[item.id]是将item.id作为属性名,item.select，加到obj中的
				//$store.getters.getCount[item.id],因为$store.getters.getCount返回的是对象，可以通过[属性名]来选择需要拿的属性值
			})
			return obj
		},
		getshopprice(state){
			var obj={
				count:0,//勾选的数量
				price:0//勾选的总价
			}
			state.shopcar.forEach(item=>{
				if(item.select==true){
					obj.count+=item.count
					obj.price+=item.count*item.price
				}
			})
			return obj
		}
	}
})

var vm=new Vue({
	el:'#app',
	data:{
	},
	methods:{},
	render:function(creatElement){
		return creatElement(app)//将组件的template渲染到html文件中id为app区域内
	},
	router:router,//挂载路由对象到实例上
	store:store
})
