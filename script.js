$(document).ready(function(){
	
	$('#up-btn').click(function(){
		$('#player').animate({top:'-=100px'},500);
	});
	$('#down-btn').click(function(){
		$('#player').animate({top:'+=100px'},500);
	});
	$('#left-btn').click(function(){
		$('#player').animate({left:'-=100px'},500);
	});
	$('#right-btn').click(function(){
		$('#player').animate({left:'+=100px'},500);
	});
	
	$('#in-btn').click(function(){
		$('#player').fadeIn('slow');
	});$('#out-btn').click(function(){
		$('#player').fadeOut('slow');
	});
	
	
});
