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
var $con = getElementsByClassName("con")[0];
var $nav = getElementsByClassName("ul_nav")[0];
var $con_c = $con.childNodes;
var $nav_c = $nav.childNodes;
var oldindex = 1;
var timer = setInterval(autoplay,3000);
var ting;
function autoplay(){
	var newindex;
	if(oldindex<$con_c.length-1){
		newindex=oldindex+1;
	}
	else{
		newindex=0;
	}
			showchange(oldindex,newindex);
		}
function showchange(_old,_new){
			if (_old!=_new) {
				$con_c[_old].style.opacity="1";
		$con_c[_old].style.display="block";
		var t1=setInterval(function(){
		var oldOc=$con_c[_old].style.opacity;
		if(oldOc<0.1){
			clearInterval(t1);
				$con_c[_old].style.opacity="0";
				$con_c[_old].style.display="none";
			}
			else{
				$con_c[_old].style.opacity=$con_c[_old].style.opacity/2;
			}
			},50);
			$con_c[_new].style.opacity="0";
			$con_c[_new].style.display="block";

		var t2=setInterval(function(){
				var newOc=$con_c[_new].style.opacity;
			if(newOc>0.9){
				clearInterval(t2);
				$con_c[_new].style.opacity="1";
			}
			else{
				$con_c[_new].style.opacity=(1+Number($con_c[_new].style.opacity))/2;
			}
		},50);
			};
			oldindex=_new;
			$nav_c[_old].removeClass("xian-b");
			$nav_c[_new].addClass("xian-b");
}
$nav.addHandler("mouseover",function(e){
	var e = e||window.event;
	var target = e.target||e.srcElement;
	if (target.tagName=="LI") {
		ting=setTimeout(function(){
			showchange(oldindex,target.index())
		},200);
		clearInterval(timer);
	};
})
$nav.addHandler("mouseout",function(e){
	var e = e||window.event;
	var target = e.target||e.srcElement;
	if (target.tagName=="LI") {
		clearTimeout(ting);
		timer = setInterval(autoplay,3000);
	};
})



var $xnav = getElementsByClassName('x-nav')[0];
var $xnr = getElementsByClassName('x-nc')[0];
var $xnav1 = getElementsByClassName('x-nav')[1];
var $xnr1 = getElementsByClassName('x-nc')[1];
Element.prototype.xxk=function(nr){
	var $x_nav = this.childNodes;
	var $x_nr = nr.childNodes;
	this.addHandler("mouseover",function(e){
	var e = e||window.event;
	var target = e.target||e.srcElement;
	if (target.tagName =="LI") {
		showtab(target.index());
	};
})
function showtab(inx){
	for (var i = 0; i <$x_nav.length; i++) {
		if (i==inx) {
			$x_nav[inx].addClass("x-ys");
			$x_nr[inx].removeClass("none");
		}else{
			$x_nav[i].removeClass("x-ys");
			$x_nr[i].addClass("none");
		}
	};
}
}
$xnav.xxk($xnr);
$xnav1.xxk($xnr1);


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




//手风琴
$('.sfq-warp').on("mouseenter","div",function(){
	$(this).removeClass('sfq-ys')
	$(this).siblings().addClass('sfq-ys');
})

$('.se-left').on('mouseenter',function(){
	$('.se-img:eq(0)').slideDown(200);
})
$('.se-left').on('mouseleave',function(){
	$('.se-img:eq(0)').slideUp(200);
})
$('.se-s').on('mouseenter',function(){
	$('.se-img:eq(1)').slideDown(200);
})
$('.se-s').on('mouseleave',function(){
	$('.se-img:eq(1)').slideUp(200);
})
$('.se-s1').on('mouseenter',function(){
	$('.se-img:eq(2)').slideDown(200);
})
$('.se-s1').on('mouseleave',function(){
	$('.se-img:eq(2)').slideUp(200);
})
$('.se-bot').on('mouseenter',function(){
	$('.se-img:eq(3)').slideDown(200);
})
$('.se-bot').on('mouseleave',function(){
	$('.se-img:eq(3)').slideUp(200);
})

//随机图片;
var sjt = ["images/sj-tu1.png","images/sj-tu2.png","images/sj-tu3.png"]
var sjt_length = sjt.length;
var  numm= Math.floor(Math.random()*sjt_length);
var  numm1= Math.floor(Math.random()*sjt_length);
var  numm2= Math.floor(Math.random()*sjt_length);
$('.sj-se img:eq(0)')[0].src=sjt[numm];
$('.sj-se img:eq(1)')[0].src=sjt[numm1];
$('.sj-se img:eq(2)')[0].src=sjt[numm2];

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
		var _top = document.body.scrollTop||document.documentElement.scrollTop;
		if (_top==0) {
			clearInterval(ting);
		}else{
			scrollTo(0,_top/2)
		}
	}
})

//
$('.sj-che:eq(0)').on("mouseenter",function(){
	$('.che-nr:eq(0)').show();
})
$('.sj-che:eq(0)').on("mouseleave",function(){
	$('.che-nr:eq(0)').hide();
})
$('.sj-che:eq(1)').on("mouseenter",function(){
	$('.che-nr:eq(1)').show();
})
$('.sj-che:eq(1)').on("mouseleave",function(){
	$('.che-nr:eq(1)').hide();
})
$('.sj-che:eq(2)').on("mouseenter",function(){
	$('.che-nr:eq(2)').show();
})
$('.sj-che:eq(2)').on("mouseleave",function(){
	$('.che-nr:eq(2)').hide();
})