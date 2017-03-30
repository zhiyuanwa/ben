$('.logo').on("mouseenter",function(){
	$('.erweima').fadeIn(200);
})
$('.logo').on("mouseleave",function(){
	$('.erweima').stop(true,false).fadeOut(200);
})

	$('.yiji').on("mouseenter","li",function(){
			$(this).children(".erji").slideDown();
		})
	
	$('.yiji').on("mouseleave","li",function(){
		$(this).children(".erji").stop(false,false).slideUp();
	})


//回到顶部
$(document).on('scroll',function(){
	var scr = $(this).scrollTop();
	if (scr>300) {
		$('.wang-s').fadeIn(200);
	}else{
		$('.wang-s').fadeOut(50);
	}

})
$('.wang-s').on("click",function(){
	console.log(document.body.scrollTop)
	var ting = setInterval(aotu,50);
	function aotu(){
		var _top = document.body.scrollTop ||document.documentElement.scrollTop;
		if (_top==0) {
			clearInterval(ting);
		}else{
			scrollTo(0,_top/2/3)
		}
	}
})


//星星点击
$('.xing').on("click","img",function(){
	var $xing = $('.xing')[0].childNodes;
	for (var i = 0; i < $(this).index(); i++) {
		$xing[i].src="images/hui-x.png";
	};
	if ($(this)[0].getAttribute('src')=="images/hui-x.png") {
		$(this)[0].src="images/bai-x.png";
	}else{
		$(this)[0].src="images/hui-x.png";
	}
	if ($(this)[0].nextSibling.getAttribute('src')=="images/hui-x.png") {
		$(this)[0].src="images/hui-x.png";
		for (var i = $(this).index()+1; i <$xing.length; i++) {
			$xing[i].src = "images/bai-x.png";
		};
	}
})

//随机图片;
var sjt = ["images/sj-tu1.png","images/sj-tu2.png","images/sj-tu3.png"]
var sjt_length = sjt.length;
var  numm= Math.floor(Math.random()*sjt_length);
$('.sj-che img')[0].src=sjt[numm];

$('.sj-che:eq(0)').on("mouseenter",function(){
	$('.che-nr').show();
})
$('.sj-che:eq(0)').on("mouseleave",function(){
	$('.che-nr').hide();
})


//瀑布流
$(function(){
	var perz = 1;
		var pnum = 0;
		var domready = true;
		ajaxall();
		function ajaxall(){
			$.ajax({
				type:"GET",
				url:"http://www.hulupiao.com/index.php?r=goods/list&callback=?",
				data:{
					"page":perz++
				},
				dataType:"jsonp",
				success:function(data){
					pnum = data.pcount
					var str="";
					for (var i = 0; i <data.list.length; i++) {
						str = str+"<li><img src='"+data.list[i].pic+"'>";
						str = str+"<p>"+data.list[i].name+"</p></li>";
					};
					$('.nr-left-ul').append(str);
					domready = true;
					var ul_hei = $('.nr-left-ul').height()
					if (ul_hei>100) {
						$('.-wan').removeClass('fix')
					}
				}
			})
		}
		$(window).on("scroll",function(){
			// console.log($(this).scrollTop())
			var scrollall = $(this).scrollTop()+$(this).height()>$('.loa').offset().top
			if (scrollall&&domready) {
				domready = false;
				$('.loa').html('Loading in ......')
				if (perz<=pnum) {
					ajaxall();
				}else{
					$('.loa').html('No content is not fast to buy a car')
				}
			};
		})
})

// 转换 fix
var che = $('.sj-che').offset().top;

$(document).on('scroll',function(){
	var $top = document.body.scrollTop ||document.documentElement.scrollTop;
	var this_top = $(this).scrollTop();
	if (this_top>che) {
		$('.sj-che').css("top",$top-160)
	}else{
		$('.sj-che').css("top",324)
	}
	
})

//登陆弹窗
	$('.denglu').on("click",function(){
		$('.tan').css({
			display:"block"
		})
		$('.bg').css({
			display:"block"
		})
	})

	$('.X').on('click',function(){
		$('.tan').css({
			display:"none"
		})
		$('.bg').css({
			display:"none"
		})
	})
	$('.zhuce').on('click',function(){
		$('.tan-zc').css({
			display:"block"
		})
		$('.tan').css({
			display:"none"
		})
	})
	$('.tan-zc .zc-top .X').on('click',function(){
		$('.tan-zc').css({
			display:"none"
		})
	})
//cookie
	$('.tan-bot').on('submit',function(){
		var username = $('.txt').val();
		var password = $('.pass').val();
		if ($.trim(username) == "") {
			$('.tan-bot span:eq(0)').removeClass('none');
			return false;
		};
		if(password==""){
			$('.tan-bot span:eq(1)').removeClass('none')
			return false;
		};
		$(".tan .tishi").text("正在登录中请稍等....");
		$('.tan-bot').hide();
		$('.tishi').show();
		$.ajax({
			type:"get",
			url:'http://www.hulupiao.com/index.php?r=api/login',
			data:{
				'user_name': username, 
				'password': password
			},
			dataType:'jsonp',
			success:function(data){
				if (data.success == 1) {
					var $user = username+"你已经购买你心爱的car";
					var dt = new Date;
					dt.setTime(dt.getTime()+(3*60*1000));
					$.cookie('username','admin',{expires:dt});
					$(".tan .tishi").text($user);
					$('.denglu').text(username);
					$('.tui').show();
					
				}else{
					$(".tan .tishi").text("抱歉，登录失败")
				}
			}
		})
		$('.tui').on('click',function(){
			$('.tui').hide();
			$('.tishi').hide();
			$('.tan-bot').show();
		})
		return false;
	})
	// $('.bg').on('click',function(){
	// 	$('.tan').css({
	// 		display:"none"
	// 	})
	// 	$('.bg').css({
	// 		display:"none"
	// 	})
	// })

