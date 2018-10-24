$(document).ready(function() {
	$(".nav-bar-item").mousemove(function() {
		$(this).css("border-top", "2px solid red");
		$(this).children(".nav-bar-hide").css("display","block");
	})
	$(".nav-bar-item").mouseout(function() {
		$(this).css("border-top", "2px solid  #262A2D ");
		$(this).children(".nav-bar-hide").css("display","none");
	});
	
	$(".item-list").mousemove(function(){
		$(this).next(".product-hide").css("display","block");
	})
	$(".product-hide").mousemove(function(){
		$(this).css("display","block");
	})
	$(".item-list").mouseout(function(){
		$(this).next(".product-hide").css("display","none");
	})
	$(".product-hide").mouseout(function(){
		$(this).css("display","none");
	})
	$(".btn-list").mousemove(function(){
		$(this).css({"background":"red","color":"white"});
	})
	$(".btn-list").mouseout(function(){
		$(this).css({"background":"white","color":"red"});
	})
	$(".item-list").mousemove(function(){
		$(this).next(".product-hide-right").css("display","block");
	})
	$(".product-hide-right").mousemove(function(){
		$(this).css("display","block");
	})
	$(".item-list").mouseout(function(){
		$(this).next(".product-hide-right").css("display","none");
	})
	$(".product-hide-right").mouseout(function(){
		$(this).css("display","none");
	})
	$(".nav-bar-hide-item").mousemove(function(){
		$(this).css("background","#E62232")
	})
	$(".nav-bar-hide-item").mouseout(function(){
		$(this).css("background","#262A2D")
	})
	$(".content-item").mouseenter(function(){
		$(this).children(".move-box").css("display","block").animate({left:'305px'},400);
	})
	$(".content-item").mouseout(function(){
		
		$(this).children(".move-box").css("display","none").animate({left:'0'},1);
	})
});