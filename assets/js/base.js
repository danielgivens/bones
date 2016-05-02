$(document).ready(function(){
	$('.stretched').anystretch();
});
$(window).on('resize load',function(){
	scrolling();
}).scroll(function(){
	scrolling();
});
function scrolling(){
	$scrolled = $(window).scrollTop();
	$('#wrap').css({'perspectiveOrigin': '0 '+ $scrolled +'px',});
}
