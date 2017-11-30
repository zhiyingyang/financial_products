		$(function(){
			var focusBanner=function(){
				var $focusBanner=$("#focus-banner"),
					$bannerList=$("#focus-banner-list li"),
					$focusHandle=$(".focus-handle"),
					$bannerImg=$(".focus-banner-img"),
					$nextBnt=$("#next-img"),
					$prevBnt=$("#prev-img"),
					$focusBubble=$("#focus-bubble"),
					bannerLength=$bannerList.length,
					_index=0,
					_timer="";

//					var _height=$(".focus-banner-img").find("img").height();
//					$focusBanner.height(_height);
//					$bannerImg.height(_height);
//					$("#left_nav").height(_height);

					$(window).resize(function(){
						window.location.reload()
					});

					for(var i=0; i<bannerLength; i++){
						$bannerList.eq(i).css("zIndex",bannerLength-i);
						$focusBubble.append("<li></li>");
					}
					$focusBubble.find("li").eq(0).addClass("current");
					var bubbleLength=$focusBubble.find("li").length;
					$focusBubble.css({
						"width":bubbleLength*22,
						"marginLeft":-bubbleLength*11
					});//初始化

					$focusBubble.on("hover","li",function(){
						$(this).addClass("current").siblings().removeClass("current");
						_index=$(this).index();
						changeImg(_index);
					});//点击轮换

					$nextBnt.on("click",function(){
						_index++
						if(_index>bannerLength-1){
							_index=0;
						}
						changeImg(_index);
					});//下一张

					$prevBnt.on("click",function(){
						_index--
						if(_index<0){
							_index=bannerLength-1;
						}
						changeImg(_index);
					});//上一张

					function changeImg(_index){
						$bannerList.eq(_index).fadeIn(100);
						$bannerList.eq(_index).siblings().fadeOut(100);
						$focusBubble.find("li").removeClass("current");
						$focusBubble.find("li").eq(_index).addClass("current");
						clearInterval(_timer);
						_timer=setInterval(function(){$nextBnt.click()},3000)
					}//切换主函数
					_timer=setInterval(function(){$nextBnt.click()},3000)
			}();
		});
		
