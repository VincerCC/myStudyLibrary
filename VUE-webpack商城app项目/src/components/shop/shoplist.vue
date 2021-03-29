<template>
	<div class="shoplist" >
		<div class="shopbox" v-for="item in shoplist" :key="item.id"  @click="toInfo(item.id)">
			<img :src="item.img_url" />
			<h1 class="title">{{item.title}}</h1>
			<div class="shopinfo">
				<p class="price">
					<span class="now">￥{{item.sell_price}}</span>
					<span class="old">￥{{item.market_price}}</span>
				</p>
				<p class="sell">
					<span> 热卖中</span>
					<span>剩余{{item.stock_quantity}}件</span>
				</p>
			</div>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return {
				pageindex:1,//默认展示第一页
				shoplist:[]
			}
		},
		created(){
			this.getshoplist();
		},
		methods:{
			//api/getgoods?pageindex=number接口需要传个pageindex页码
			//'api/getgoods?'+this.pageindex,
			getshoplist(){
				axios.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
					
					this.shoplist=this.shoplist.concat(result.data.message)
//					console.log(result.data.message)
				})
			},
			toInfo(id){
				this.$router.push({path:'/home/shopinfo/'+id})
			}
		}
	}
</script>

<style scoped="scoped">
	.shoplist{
		display: flex;
		flex-wrap: wrap;
		padding: 7px;
		justify-content: space-between;
	}
	
	.shopbox{
		width: 49%;
		border: 1px solid #ccc;
		box-shadow: 0 0 8px #ccc;
		margin: 3px 0;
		padding:1px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 293px;
	}
	.shopbox img{
		width: 100%;
	}
	.title{
		font-size: 14px;
	}
	.shopinfo{
		background-color: #eee;
	}
	.shopinfo p{
		margin: 0;
		padding: 5px;
	}
	
	.shopinfo .sell{
		display: flex;
		justify-content: space-between;
		font-size: 14px;
	}
	.shopinfo .price .now{
		color: #D9534F;
		font-size: 16px;
		font-weight: bold;
	}
	.shopinfo .price .old{
		text-decoration: line-through;
		font-size: 12px;
		margin-left: 10px;
	}
</style>