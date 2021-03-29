<!--商品详情-->
<template>
	<div class="shopinfobody">
		
		<transition 
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			>
			<div class="ball" v-show="ballflag" id="ball"></div>
		</transition>
		<!--商品轮播图区域-->
		<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swipe :lunbotuList="lunbotuList"></swipe>
					</div>
				</div>
		</div>
		
		<!--商品购买区域-->
		<div class="mui-card">
			<div class="mui-card-header">{{this.shoplist.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
							市场价：<del>￥{{this.shoplist.market_price}}</del>
							&nbsp;
							销售价：<span class="nowprice">￥{{this.shoplist.sell_price}}</span>
						</p>
						<div class="buynum">
							购买数量：
							<!--分析：
								如何在点击购物车的时候，拿到numbox组件中选择的value数量值
								按钮属于shopinfo页面，数字属于numbox组件，涉及到了父子组件的嵌套所以无法直接获取值
								需要用子组件向父组件传值（父向子传一个事件，子调用事件把值传过来）
							-->
							<numbox @getcount='getSclectValue' :max="shoplist.stock_quantity"></numbox>
						</div>
						
						<p>
							<mt-button type="primary" size="small">立即购买</mt-button>
							<mt-button type="danger" size="small" @click="addshopcar">加入购物车</mt-button>

						</p>
					</div>
				</div>
		</div>
		
		<!--商品参数区域-->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{this.shoplist.goods_no}}</p>
						<p>库存情况：{{this.shoplist.stock_quantity}}</p>
						<p>上架时间：{{this.shoplist.add_time|dataFormat}}</p>
					</div>
				</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain @click="toshopdesc(id)">图文介绍</mt-button>
				<br />
				<mt-button type="danger" size="large" plain @click="toshopcom(id)">评论详情</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
	//导入数字框组件
	import numbox from '../numbox.vue'
	//导入轮播图组件
	import swipe from '../swipe.vue'
	import axios from 'axios' 
	export default{
		data(){
			return {
				id:this.$route.params.id,//将路由参数中的id挂载到data上
				lunbotuList:[],
				shoplist:[],
				ballflag:false,
				sclectCount:1
			}
		},
		
		created(){
			this.getlunbotu()
			this.getshoplist()
		},
		methods:{
			getlunbotu(){
				//获取轮播图数据
				axios.get('api/getthumimages/'+this.id).then(result=>{
					this.lunbotuList=result.data.message
//					console.log(this.lunbotuList)
				})
			},
			getshoplist(){//获取商品数据列表
				axios.get('api/goods/getinfo/'+this.id).then(result=>{
					this.shoplist=result.data.message[0]
//					console.log(this.shoplist)
				})
			},
			toshopdesc(id){//点击按钮跳转到图文详情
				this.$router.push({path:'/home/shopdesc/'+id})
			},
			toshopcom(id){//点击按钮跳转到评论页面
				this.$router.push({path:'/home/shopcom/'+id})
			},
			addshopcar(){
				//点击购物车显示小球动画
				this.ballflag=!this.ballflag
				
				//得到商品对象,保存到store中shopcar的数据对象
				var shopinfo={
					id:this.id,
					count:this.sclectCount,
					price:this.shoplist.sell_price,
					select:true
				}
				//调用store中的mutations的方法，将商品加到购物车
				this.$store.commit('addToCar',shopinfo)
			},
			beforeEnter(el){
				//beforeEnter表示动画入场之前，此时动画还没开始，可以在这里设置元素动画开始之前的起始样式
				//设置小球动画开始前，小球的起始位置
				el.style.transform="translate(0px,0px)"
			},
			enter(el,done){
				el.offsetWidth
				//enter表示动画开始之后的样式，这里可以设置小球完成动画之后的结束状态
				
				//小球动画适配不同分辨率以及不同滚动条时候的方法
				// 不能写死结束位置的值，应该动态计算这个值
				//分析：先得到徽标的横坐标纵坐标，再得到小球的横坐标纵坐标，然后分别相减，得到结果为横坐标和纵坐标要位移的距离
				//如何得到横纵坐标？？    .getBoundingClientRect()就可以获取元素的相对于视口的相对位置
				//实现：徽标.getBoundingClientRect().top-小球.getBoundingClientRect().top  徽标.getBoundingClientRect().left-小球.getBoundingClientRect().left 
				//vue虽然不提倡操作dom，但是特殊情况下也是可以操作dom的
				var shopcar=document.getElementById('shopcar').getBoundingClientRect()
//				console.log(shopcar)
				var ball=document.getElementById('ball').getBoundingClientRect()
//				console.log(ball)
				var left=shopcar.left-ball.left+'px'
				var top=shopcar.top-ball.top+'px'
				el.style.transform="translate("+left+","+top+")";
				el.style.transition="all 0.7s cubic-bezier(.4,-0.3,1,.68)";
				done();//这里的done()其实就是afterEnter函数的引用
			},
			afterEnter(el ){
				//动画完成之后，控制小球消失
				this.ballflag=!this.ballflag;
				//但是这样做小球会等一段时间才会消失，如果要立即消失需要在enter中使用第二个参数done
			},
			getSclectValue(count){
				//当子组件传值过来的时候，将值保存到data上
				this.sclectCount=count
//				console.log("父组件"+this.sclectCount)
			}
			
		},
		components:{
			swipe,//注册轮播图组件
			numbox//注册数字框组件
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.shopinfobody{
		background-color:#eee ;
		overflow: hidden;
	}
	.nowprice{
		color: red;
		font-size: 16px;
		font-weight: bold;
	}
	.buynum{
		padding: 10px 0;
		margin-bottom: 10px;
	}
	.mui-card-footer{
		display: block;
	}
	
	.ball{
		width: 15px;
		height: 15px;
		background-color: red;
		border-radius: 50%;
		position: absolute;
		z-index: 99;
		top: 524px;
		left: 152px;
	}
</style>