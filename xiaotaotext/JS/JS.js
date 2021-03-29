window.onload=function(){
	//js代码
	var getli=document.querySelectorAll(".seckill .seckill-nav li");
	var getul=document.querySelectorAll(".seckill .seckill-goods ul");
	var seckillNav=document.querySelector(".seckill-nav");
	// for(var i=0;i<getli.length;i++){
	// 	getli[i].index=i;//设置下标
	// 	getli[i].onclick=function(){	
	// 		for(var i=0;i<getli.length;i++){
	// 		var index=this.index;//获取当前点击的下标
	// 		if(i!=index){//设置除了index的其他元素
	// 			getli[index].parentNode.children[i].className="";
	// 			getul[index].parentNode.children[i].className="clearfix"
	// 		}else{
	// 			getli[index].className="active";
	// 			getul[index].className="clearfix show"
	// 		}
	// 		}
	// 	};
	// }
	for(let i=0;i<getli.length;i++){
		
		getli[i].onclick=function(){	
			for(let j=0;j<getli.length;j++){
			if(i===j){//如果点击的下标跟j相同，则添加样式
				getli[i].className="active";
				getul[i].className="clearfix show"
			}else{//否则他的兄弟元素删除样式
				getli[i].parentNode.children[j].className="";
				getul[i].parentNode.children[j].className="clearfix"
			}
			}
		};
	}
	
	//	添加 购物车
	var btn=document.querySelectorAll(".seckill .container .seckill-goods .seckill-info .btn");
	for(var i=0;i<btn.length;i++){
		
		btn[i].onclick=function(){
			var imgsrc=this.parentNode.previousElementSibling.firstElementChild.src;
			var name=this.parentNode.children[0].innerHTML;
			var money=this.parentNode.children[2].children[0].innerText;
			
			var li=document.createElement("li");
			var img=document.createElement("img");
			img.setAttribute('src',imgsrc);
			
			var div=document.createElement("div");
			div.className="topbar-cart-page-con-text  clearfix"
			
			var a=document.createElement("a");
			a.className="topbar-cart-page-name"
			a.setAttribute('href','#');
			a.innerText=name;
			
			var p=document.createElement("p");
			p.className="topbar-cart-page-money"
			p.innerText=money;
			
			div.appendChild(a);
			div.appendChild(p);
			
			
			li.appendChild(img);
			li.appendChild(div);
			
			var ul=document.getElementById("topbar-cart-page-con-ul");
			ul.appendChild(li)
		}
	}
	
	//鼠标滑入显示，滑出隐藏
	var cart=document.getElementsByClassName("topbar-cart");
	var page=document.getElementById("topbar-cart-page");
	cart[0].onmouseover=function(){
	page.className="topbar-cart-page";
	cart[0].children[0].className="a-hover";
	}
	cart[0].onmouseout=function(){
	page.className="topbar-cart-page-hide";
	cart[0].children[0].className="";
	}
	page.onmouseover=function(){
	page.className="topbar-cart-page";
	cart[0].children[0].className="a-hover";
	}
	page.onmouseout=function(){
	page.className="topbar-cart-page-hide";
	cart[0].children[0].className="";
	}
	
	

window.onscroll=function(){
		var scroll=document.documentElement.scrollTop||/*（解决兼容性问题）*/document.body.scrollTop;;//263
		if(scroll>260){
		seckillNav.className="seckill-nav seckill-navfixed";
	}else{
		seckillNav.className="seckill-nav";
	}
}
	
//function showlist(){
//	for(var i=0;i<getli.length;i++){
//		if(getli[i]===this){
//			getli[i].className="active";	
//			getul[i].className="clearfix show"
//		}else{
//			getli[i].className="";	
//			getul[i].className="clearfix"
//		}
//	}
//}


}

//JQuery方法
//$(function(){
//	$(".seckill .seckill-nav li").click(function(){
//		$(this).addClass("active");
//		$(this).siblings().removeClass("active");
//		var flag=$(this).index();
//		$(".seckill .seckill-goods ul").eq(flag).show();
//		$(".seckill .seckill-goods ul").eq(flag).siblings().hide();
//	})
//})
