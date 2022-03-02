var timeout;
var $eat;
var $clickTimeout;
var $countTimeout;
var $aboutCycle;
var mouse = new Array();
$mobile = false;
var bark4 = new Howl({
	src: ['assets/sounds/bark-1.m4a'],
	autoplay: false,
	volume: 0.1,
	loop: false	
});
var bark2 = new Howl({
	src: ['assets/sounds/bark-2.m4a'],
	autoplay: false,
	volume: 0.1,
	loop: false	
});
var bark3 = new Howl({
	src: ['assets/sounds/bark-5.m4a'],
		autoplay: false,
		volume: 0.1,
		loop: false,
		rate:0.88
	});
var bark5 = new Howl({
	src: ['assets/sounds/bark-4.m4a'],
	autoplay: false,
	volume: 0.1,
	loop: false,
	rate: 0.9	
});
var squeak = new Howl({
	src: ['assets/sounds/squeak.m4a'],
	autoplay: false,
	volume: 0.2,
	loop: false,
	rate: 1	
});
var sniff = new Howl({
	src: ['assets/sounds/sniff.m4a'],
	autoplay: true,
	volume: 0,
	loop: true	
});
var pant = new Howl({
	src: ['assets/sounds/pant.m4a'],
	autoplay: true,
	volume: 0,
	loop: true	
});
var chomp = new Howl({
	src: ['assets/sounds/chomp.m4a'],
	autoplay: true,
	volume: 0,
	loop: true	
});
$landscape = false;

var dog = (function () {	  
	window.addEventListener("orientationchange", function() {
		if($(window).height() > $(window).width()){
			$landscape = false;
		} else{
			$landscape = true;
		}
		setStage();
	}, false);
	if($(window).height() > $(window).width()){
		$landscape = false;
	} else{
		$landscape = true;
	}
	$(window).on('resize load',function(){
		if(!$('.hide-mobile').is(':visible')){
			$mobile = true;
			$('body').addClass('show-treat');
			$('body').addClass('give-treat');
			setStage();
		} else{
			$('body').removeClass('show-treat');
			$('body').removeClass('give-treat');
			$mobile = false;
			setStage();
		}	

	});
	var element = document.getElementById("dog")
		, width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
		, height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
		, fps = 60
		, easy = 2
		, maxspeed = 200
		, delay = 2
		, mouse = {x: width/2, y: height/2}
		, defs
		, parts
	;
	
	parts = [
		{x:mouse.x, y:mouse.y, z:44, },
		{x:mouse.x, y:mouse.y, z:43, },
		{x:mouse.x, y:mouse.y, z:42, },
		{x:mouse.x, y:mouse.y, z:41, },
		{x:mouse.x, y:mouse.y, z:40, },
		{x:mouse.x, y:mouse.y, z:39, },
		{x:mouse.x, y:mouse.y, z:38, },
		{x:mouse.x, y:mouse.y, z:37, },
		{x:mouse.x, y:mouse.y, z:36, },
		{x:mouse.x, y:mouse.y, z:35, },
		{x:mouse.x, y:mouse.y, z:34, },
		{x:mouse.x, y:mouse.y, z:33, },
		{x:mouse.x, y:mouse.y, z:32, },
		{x:mouse.x, y:mouse.y, z:31, },
		{x:mouse.x, y:mouse.y, z:30, },
		{x:mouse.x, y:mouse.y, z:29, },
		{x:mouse.x, y:mouse.y, z:28, },
		{x:mouse.x, y:mouse.y, z:27, },
		{x:mouse.x, y:mouse.y, z:26, },
		{x:mouse.x, y:mouse.y, z:25, },
		{x:mouse.x, y:mouse.y, z:24, },
		{x:mouse.x, y:mouse.y, z:23, },
		{x:mouse.x, y:mouse.y, z:22, },
		{x:mouse.x, y:mouse.y, z:21, },
		{x:mouse.x, y:mouse.y, z:20, },
		{x:mouse.x, y:mouse.y, z:19, },
		{x:mouse.x, y:mouse.y, z:18, },
		{x:mouse.x, y:mouse.y, z:17, },
		{x:mouse.x, y:mouse.y, z:16, },
		{x:mouse.x, y:mouse.y, z:15, },
		{x:mouse.x, y:mouse.y, z:14, },
		{x:mouse.x, y:mouse.y, z:13, },
		{x:mouse.x, y:mouse.y, z:12, },
		{x:mouse.x, y:mouse.y, z:11, },
		{x:mouse.x, y:mouse.y, z:10, },
		{x:mouse.x, y:mouse.y, z:9, },
		{x:mouse.x, y:mouse.y, z:8, },
		{x:mouse.x, y:mouse.y, z:7, },
		{x:mouse.x, y:mouse.y, z:6, },
		{x:mouse.x, y:mouse.y, z:5, },
		{x:mouse.x, y:mouse.y, z:4, },
		{x:mouse.x, y:mouse.y, z:3, },
		{x:mouse.x, y:mouse.y, z:2, },
		{x:mouse.x, y:mouse.y, z:1, },
		{x:mouse.x, y:mouse.y, z:0, }
	]
	function setStage(){
		if(!$mobile){
			$('#profile video').each(function(){
				$src = $(this).attr('data-src');	
				$(this).find('source').attr('src',$src);
				$(this)[0].load();
			});
			mouse = {x: $(window).width()/2, y: $(window).height()/2}			
		} else{
			if($landscape){
				mouse = {x: $(window).width()/4, y: $(window).height()/2}			
			} else{
				mouse = {x: $(window).width()/2, y: $(window).height()/4}							
			}
			$('#profile video').each(function(){
				$(this).find('source').attr('src','');				
			});
		}
	}
	function init() {
		document.addEventListener('mousemove', mousemove);
		setInterval(loop, 1000/fps);
		if(!$('.hide-mobile').is(':visible')){
			$mobile = true;
			$('body').addClass('show-treat');
			$('body').addClass('give-treat');
		} else{
			$mobile = false;
		}
		$('.treat').hover(function(){
		   $('body').addClass('show-treat'); 
		}, function(){
			if(!$mobile){
				$('body').removeClass('show-treat'); 			
			}
		});
		$('.about').hover(function(){
			if(!$mobile){
				bark2.volume(0.2);
				bark2.stop();
				bark2.play();
			}
		},function(){
			bark2.volume(0);
			bark2.stop();			
		});
		$('.about').click(function(){
			$('body').addClass('show-about');
			aboutCycle();
		});
		$('.back').click(function(){
			$('body').removeClass('show-about');
			clearTimeout($aboutCycle);
		});
		$('.box a').hover(function(){
			if(!$mobile){
				squeak.volume(.2);
				squeak.stop();
				squeak.play();
			}
		},function(){
			squeak.volume(0);
			squeak.stop();
			
		});
		$('.box div').hover(function(){
		    $text = $(this).find('span').html();
		    $('#cta').html($text);
		}, function(){
			$text = $('#cta').attr('data-default');
		    $('#cta').html($text);	    
		});
		$('.treat').on('mousemove', function(){
			if($('.clicked').length <= 0){
				$('body').addClass('show-treat'); 
				$('.clicked').removeClass('clicked');
			}
		});
		$('.treat').on('mousedown',function(){
		    if($('#dog').hasClass('change')){
			    if(!$mobile){
					$('body').removeClass('show-treat'); 
					$('body').removeClass('give-treat');
				}
				$(this).addClass('clicked'); 
				clearTimeout($eat);
				clearTimeout($clickTimeout);
				sniff.fade(0.5, 0, 200);
			    pant.fade(0, 0.05, 200);	
			    $this = $(this);
				$.getJSON("https://api.countapi.xyz/hit/bones.dog/visits", function(response) {
					//$("#visits").text(commaSeparateNumber(response.value));
					$('#count').fitText(1);
				   $('#count h2').html(commaSeparateNumber(127466 + response.value));
				   $('body').addClass('show-count');
				});
				$.ajax({
					url: 'treat.php', 
					success: function(result){
						$('#count').fitText(1);
				   		$('#count h2').html(commaSeparateNumber(result));
				   		$('body').addClass('show-count');
				   		
					}
				});
				$eat = setTimeout(function(){
					sniff.volume(0);
					pant.volume(0);
					chomp.volume(1);
					setTimeout(function(){
						chomp.volume(0);
					},500);
					$('#dog').removeClass('change');
					$clickTimeout = setTimeout(function(){
						$this.removeClass('clicked'); 
										
					},1500);
					$countTimeout = setTimeout(function(){
			   			$('body').removeClass('show-count');			   		
			   		},1500);
				}, 550);
			}
		});
	}
	$r = 3;
	$i = 0;
	function aboutCycle(){
		$aboutCycle = setTimeout(function () {
			if($i == $r){
				$i = 0;
			} 
			$i++;
			$('#profile figure.shown').removeClass('shown');
			$('#profile figure:nth-of-type('+$i+') video').get(0).currentTime = 0;
			$('#profile figure:nth-of-type('+$i+')').addClass('shown');
			aboutCycle();					
		}, 2000);
	}
	function mousemove(e) {
		mouse = {x: e.clientX, y: e.clientY}
	}
	
	function loop() {
		for (var i = 0; i < parts.length; i++) {
		  var params = { mouse:mouse, part:parts[i] };
		  $('#dog img:nth-of-type('+i+')').css({
		    'transform':'translateX(-55%) translateY(-60%) matrix(1, 0, 0, 1, '+parts[i].x+', '+parts[i].y+')',
		    'z-index':100 - parts[i].z});
		   setTimeout(transform, parts[i].z*delay, params );
		};
	}

	function touchHandler(event)
	{
	    var touches = event.changedTouches,
	        first = touches[0],
	        type = "";
	    switch(event.type)
	    {
	        case "touchstart": type = "mousedown"; break;
	        case "touchmove":  type = "mousemove"; break;        
	        case "touchend":   type = "mouseup";   break;
	        default:           return;
	    }
	
	    // initMouseEvent(type, canBubble, cancelable, view, clickCount, 
	    //                screenX, screenY, clientX, clientY, ctrlKey, 
	    //                altKey, shiftKey, metaKey, button, relatedTarget);
	
	    var simulatedEvent = document.createEvent("MouseEvent");
	    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
	                                  first.screenX, first.screenY, 
	                                  first.clientX, first.clientY, false, 
	                                  false, false, false, 0/*left*/, null);
	
	    first.target.dispatchEvent(simulatedEvent);
	   //event.preventDefault();
	}

	document.addEventListener("touchmove", touchHandler, true);	  
	document.addEventListener("touchend", touchHandler, true);	  
	document.addEventListener("touchstart", touchHandler, true);	  
	$(document).on('mousemove resize', function() {
		clearTimeout(timeout);
		if($('.clicked').length <= 0 && $('body').hasClass('hide-intro') && !$('body').hasClass('show-about')){	
			if(!$('body').hasClass('show-treat')){
				if(!$mobile){
				    sniff.volume(.5);
					pant.volume(0);
				}
				$('body').removeClass('give-treat');
				$('#dog').removeClass('change');
			    timeout = setTimeout(function() {
					$('.clicked').removeClass('clicked');
					if(!$mobile){ 
						sniff.fade(0.5, 0, 200);
					}
			    }, 200);
			} else if(!$('body').hasClass('show-about')){
				if(!$mobile){
				    sniff.volume(.5);
					pant.volume(0);
				}
				$('#dog').removeClass('change');
				if(!$mobile){
					$('body').removeClass('give-treat');				
				}
			    timeout = setTimeout(function() {
					$('body').addClass('show-treat'); 
					if(!$mobile){
						sniff.fade(0.5, 0, 200);
					    pant.fade(0, 0.05, 200);
				    }
				    $('#dog').addClass('change');
				    $('body').addClass('give-treat');	
					$('.clicked').removeClass('clicked'); 
			    }, 200);
			}
		}
	});
	
	function transform(params) {
		params.part.x = definemaxspeed(params.mouse.x - params.part.x ) / easy + params.part.x ;
		params.part.y = definemaxspeed(params.mouse.y - params.part.y ) / easy + params.part.y ;
	}
	
	function definemaxspeed(speed) {
		if (speed > 0 && speed > maxspeed) return maxspeed;
		if (speed < 0 && speed < -maxspeed) return -maxspeed;
		return speed;
	}
	
	return {init: init};
})();
dog.init();
$(window).blur(function() {
	sniff.volume(0);
	pant.volume(0);
	if(!$mobile){
		$('body').removeClass('show-treat'); 
	}
});
$(window).load(function() {
	$('body').addClass('loaded');
	setTimeout(function(){
		$('#intro span:nth-of-type(1)').addClass('show');
		bark4.play();		
		setTimeout(function(){
			$('#intro span:nth-of-type(1)').removeClass('show');
			$('#intro span:nth-of-type(2)').addClass('show');
			bark2.play();
			setTimeout(function(){
				$('#intro span:nth-of-type(2)').removeClass('show');
				$('#intro span:nth-of-type(3)').addClass('show');
				bark3.play();
				setTimeout(function(){
					$('#intro span:nth-of-type(3)').removeClass('show');
					$('#intro span:nth-of-type(4)').addClass('show');		
					bark4.play();		
					setTimeout(function(){
						$('#intro span:nth-of-type(4)').removeClass('show');
						$('#intro span:nth-of-type(5)').addClass('show');	
						bark5.play();			
						setTimeout(function(){
							$('body').addClass('hide-intro');
							//growl.play();		
						},300);	
					},300);	
				},300);			
			},300);		
		},300);
	},600);

});
function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
	  val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
	}
	return val;
}