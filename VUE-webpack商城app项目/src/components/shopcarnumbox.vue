<template>
	<div class="mui-numbox"  data-numbox-min='1'   style="height:25px;">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="numbox" @change="countIsChange"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
	//导入mui的js
	import mui from '../lib/mui/js/mui.min.js'
	export default{
		data(){
			return {}
		},
		mounted(){
			mui('.mui-numbox').numbox()//需要在此时初始化数字输入框，否则页面会出现无法+或者-的情况
		},
		methods:{
			countIsChange(){
				//当购物车页面文本框发生改变，会触发change事件，将改变的商品id和count传给全局方法updateshopinfo
				//在main.js中的updateshopinfo方法中，修改全局store中的count
				this.$store.commit('updateshopinfo',{
					id:this.shopid,
					count:this.$refs.numbox.value
				})
			}
		},
		props:["initcount","shopid"]
	}
</script>

<style>
</style>