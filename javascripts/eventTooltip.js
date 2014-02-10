
$(document).ready(function(){
		
	showhidetooltipevent();
});

function showhidetooltipevent(){
   $(".tooltip_event_box").hide();
   $('.event_boxshow').click(function(evt){
		 evt.preventDefault();
		 $(".tooltip_event_box").hide();
	 	$(this).next(".tooltip_event_box").fadeIn();
	$(this).parents('body').append('<div id="facebox_overlay" class="facebox_overlay_tooltip"></div>');
	});
	$('.event_boxhide').click(function(){
	$(".tooltip_event_box").hide();
	$(this).parents('body').find('#facebox_overlay').removeAttr('id');
	});
}