$(document).ready(function() {
	$(".left-item").mouseover(function() {
		$(this).children(".left-item-hide").css("display", "block");
		//$(this).children(".header-a").css({"border":"1px solid red"});
	});
	$(".left-item").mouseout(function() {
		$(this).children(".left-item-hide").css("display", "none");
		//$(this).children(".header-a").css({"border":"1px #F5F5F5"});
	});
	$(".index-list>li").mouseover(function() {
		$(this).children("a").css("color", "black");
	});
	$(".index-list>li").mouseout(function() {
		$(this).children("a").css("color", "white");
	});
	$(".item,.item7,.item8").mouseenter(function() {
		//alert(123);
		$(this).children("a").children("img").animate({left:'-10px'},400);
	});
	$(".item,.item7,.item8").mouseleave(function() {
		//alert(123);
		$(this).children("a").children("img").animate({left:'10px'},400);
	});
	$(".img-list>ul>li").mouseenter(function() {
		$(this).children("a").children("img").animate({width:'126px',height:'126px'});
	});
	$(".img-list>ul>li").mouseleave(function() {
		$(this).children("a").children("img").animate({width:'120px',height:'120px'});
	});
	$(".botton-list>ul>li").mouseenter(function() {
		$(this).children("a").children("img").animate({width:'84px',height:'84px'});
	});
	$(".botton-list>ul>li").mouseleave(function() {
		$(this).children("a").children("img").animate({width:'80px',height:'80px'});
	});
	$(".code-wrapper>img").mouseover(function() {
		$(this).next(".code").css("display", "block");
	});
	$(".code-wrapper>img").mouseout(function() {
		$(this).next(".code").css("display", "none");
	});
	$(".code").mouseover(function() {
		$(this).css("display", "block");
	}).mouseout(function() {
		$(this).css("display", "none");
	});;
	
	var len = 0;
	var i = 0;
	var timer;
	$(".img-item>li").eq(0).show().siblings(".img-item>li").hide();
	//调用showTimer函数进行轮播
	showTimer();
	//获取图片的个数
	len = $(".img-item>li").length;
	//鼠标至上面时，按钮变宽，并跳转至相应照片
	$(".btn-item > li").mousemove(function() {
		$(this).children().css({ "width": "30", "border": "3px solid red", "color": "red" });
		i = $(this).children().html();
		i = i - 1;
		show();
		clearInterval(timer);
	});
	//鼠标移除时，恢复原状，并继续接着轮播
	$(".btn-item > li").mouseout(function() {
		$(this).children().css({ "width": "20", "border": "3px solid whitesmoke", "color": "white" });
		showTimer();
	});

	//鼠标点击左侧的箭头
	$('.left-img').click(function() {
		$(".left-img").css("opacity", "0.8");
		clearInterval(timer);
		if(i == 0) {
			i = len; //注意此时i的值
		}
		i--;
		show();
		showTimer();
	});

	//鼠标点击右侧的箭头
	$('.right-img').click(function() {
		$(".right-img").css("opacity", "0.8");
		clearInterval(timer);
		if(i == 4) {
			i = -1; //注意此时i的值
		}
		i++;
		show();
		showTimer();
	});

	$(".btn").mouseout(function() {
		$(".btn").css("opacity", "0.2");
	})
	$(".right-img").mousemove(function() {
		$(".right-img").css("opacity", "0.5");
	});
	$(".left-img").mousemove(function() {
		$(".left-img").css("opacity", "0.5");
	});

	//轮播函数
	function showTimer() {
		timer = setInterval(function() {
			show();
			i++;
			if(i == len) {
				i = 0;
			}
		}, 4000);
	}
	//显示照片
	function show() {
		$(".img-item >li").eq(i).show().siblings(".img-item>li").hide();
	};
})