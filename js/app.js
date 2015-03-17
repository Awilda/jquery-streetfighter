$(document).ready(function() {
 $('.ryu').mouseenter(function() {
 	$('.ryu-still').hide();
 	$('.ryu-cool').hide();
 	$('.ryu-ready').show();
 	$('.ryu-throwing').hide();
 	$('.hadouken').hide();
 })
 .mouseleave(function() {
 	$('.ryu-still').show();
 	$('.ryu-ready').hide();
 	$('.ryu-cool').hide();
 	$('.ryu-throwing').hide();
 	$('.hadouken').hide();
 })
 .mousedown(function () {
 	playHadouken();
 	$('.ryu-ready').hide();
 	$('.ryu-still').hide();
 	$('.ryu-cool').hide();
 	$('.ryu-throwing').show();
 	$('.hadouken').finish().show().animate(
 	 {'left': '1020px'},
 	 500,
 	 function() {
 	 	$(this).hide();
 	 	$(this).css('left', '520px');
 	});
 })
 .mouseup(function(){
 	$('.ryu-throwing').hide();
 	$('.ryu-ready').show();
 	$('.ryu-still').hide();
 	$('.ryu-cool').hide();
 	$('.hadouken').hide();
 })
});
function playHadouken() {
	$('#hadouken-sound')[0].volume= 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
$(document).keydown(function(e){
	if (e.which == 88) {
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').show();
		$('.hadouken').hide();
		$('.ryu-throwing').hide();
	}
});
$(document).keyup(function(e){
	if (e.which == 88) {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.hadouken').hide();
		$('.ryu-throwing').hide();
	}
})



$(document).ready(main);



