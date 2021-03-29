<template>
	<div class="shopcar-container">
		<!--商品展示区域-->
		<div class="shopcarlist" >
			<div class="mui-card" v-for="(item,i) in shopcarlist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getSwitch[item.id]" @change="selectChange(item.id,$store.getters.getSwitch[item.id])"></mt-switch>
						<img :src="item.thumb_path" />
						<div class="info">
							<h1>{{item.title}}</h1>
							<p>
								<span class="price">￥{{item.sell_price}}</span>
								<shopcarnumbox :initcount="$store.getters.getCount[item.id]" :shopid="item.id"></shopcarnumbox>
								<a href="#" @click.prevent="removecar(item.id,i)">删除</a>
								<!--如何改变购物车中文本框的value值为本地存储中的count值
									思路：我们可以先创建一个空对象，然后循环购物车中所有商品的数据，把当前循环商品的id作为对象的属性名，countt作为对象的属性值
										  这样得到的对象是这样的{88:2,89:1}
								-->
							</p>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		<!--商品结算区域-->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner jiesuan" >
					<div class="left">
						<p>总计（不含运费）</p>
						<p> 已勾选商品<span class="hongse">{{$store.getters.getshopprice.count}}</span> 件，总价<span class="hongse">￥{{$store.getters.getshopprice.price}}</span></p>
					</div>
					<mt-button type="danger" @click="msg">去结算</mt-button>
				</div>
			</div>
		</div>
		
		<p>{{$store.getters.getSwitch}}</p>
	</div>
</template>

<script>
	import shopcarnumbox from '../shopcarnumbox.vue'
	import axios from 'axios'
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return {
				shopcarlist:[],
				idArr:[]//用一个数组存放加入购物车商品的所有id
			}
		},
		created(){
			this.getshopcarlist()
		},
		methods:{
			getshopcarlist(){
				//这里的id就是store中所有商品的id
				this.$store.state.shopcar.forEach(item=>{
					this.idArr.push(item.id)//将shopcar中添加了购物车的商品id加到数组中
				})
				//如果购物车中没有商品则不需要请求数据接口
				if(this.idArr.length<=0){
					return
				}
				axios.get('api/goods/getshopcarlist/'+this.idArr.join(",")).then(result=>{
					this.shopcarlist=result.data.message
					console.log(this.shopcarlist)
				})
			},
			removecar(id,index){
				//id是 用来删除store中数据的，index是用来删除购物车页面渲染出来的
				this.shopcarlist.splice(index,1)
				this.$store.commit('removedata',id)
			},
			selectChange(id,val){
				//每当点击开关把最新的开关状态同步到store中
				this.$store.commit('updateSelect',{id:id,select:val})
			},
			msg(){
				Toast('暂未开放~')
			}
		},
		components:{
			shopcarnumbox
		}
	}
</script>

<style scoped="scoped">
	.mui-card-content-inner {
    position: relative;
    padding: 4px;
	}
	.shopcar-container{
		background-color: #eee;
		overflow: hidden;
	}
	.shopcarlist img{
		width: 60px;
		height: 60px;
		margin-left: 6px;
		margin-right: 6px;
	}
	.info h1{
		font-size: 13px;
	}
	.info .price{
		color: red;
		font-weight: bold;
	}
	.mui-card-content-inner{
		display: flex;
		align-items: center;
	}
	.jiesuan{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
	}
	.jiesuan .hongse{
		font-weight: bold;
		color: red;
	}
</style>