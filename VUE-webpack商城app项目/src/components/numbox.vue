<template>
	<div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max' ref='numboxmax'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" @change="getCount" ref='numbox'/>
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
			getCount(){
				//每当文本框的value发生变化，调用方法传递值给父组件
				
				//将值传给父组件
				this.$emit('getcount',parseInt(this.$refs.numbox.value))
			}
		},
		props:["max"],
		watch:{
		'max':function(newvalue,oldvalue){
				mui('.mui-numbox').numbox().setOption('max',newvalue)
			}
		}
		
	}
</script>

<style>
</style>