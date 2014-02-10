
function showTooltip() {
/* Can view and edit tooltip (steady position)*/
	$(".edit_tooltip").click(function(evt){
		 evt.preventDefault();
		 $(".tooltip_box").hide();
	 	$(this).next(".tooltip_box").fadeIn();

		// Below code for tooltip which is present in table
		Left_space_td_tooltip=$(this).offset().left;
		Top_space_td_tooltip=$(this).offset().top;

		var button_width = $(this).width();


		if($(this).hasClass('td_tooltip')) {
			if($(this).hasClass('button') || $(this).hasClass('submit') || $(this).hasClass('submit_light'))  {
				var minus_top_val = 30;
				var minus_left_val = 13;
			}
			else {
				var minus_top_val = 9;
 				var minus_left_val = 0;
			}
			$(this).next(".tooltip_box").css('left',Left_space_td_tooltip+minus_left_val);
			$(this).next(".tooltip_box").css('top',Top_space_td_tooltip+minus_top_val);
 		}
		// For client Logged dashboard page popups.
	  if($(this).next(".right_arrow_tooltip")) {

				var minus_left_val = 13;

			$(this).next(".right_arrow_tooltip").css('left',Left_space_td_tooltip+button_width-120);
			$(this).next(".right_arrow_tooltip").css('top',Top_space_td_tooltip+12);
			//alert(button_width);
		}
	 if($(this).next(".left_arrow_tooltip")) {
			$(this).next(".left_arrow_tooltip").css('left',Left_space_td_tooltip+20);
			$(this).next(".left_arrow_tooltip").css('top',Top_space_td_tooltip+12);
		}
	//	$("#facebox_overlay").fadeIn();
 })


	/* Can only view tooltip and not edit start */
	$(".view_tooltip").hover(function(event){
		//event.preventDefault();
		var top_space = $(this).offset().top+17;
		$(".tip_cross").remove();
		$(this).next(".tooltip_box").prepend("<span class='tip_cross' title='close'>x</span>");
		$(".tooltip_box").hide();
		$("tr").removeClass("tr_highlight");
		$(this).next(".tooltip_box").css('top',top_space);
		$(this).next(".tooltip_box").show();
		$(this).parents("tr:first").addClass("tr_highlight");
	})

	// For hide view toolitp.
	$(".tip_cross, .closeTooltip").live('click', function(){
		$(".tooltip_box").fadeOut();
		$(this).parents("tr:first").removeClass("tr_highlight");
	})
	/* end */

	// For textfield tooltip message.
	$(".edit_tooltip").focus(function(evt){
		 evt.preventDefault();
		 $(".tooltip_msg_txt").hide();
	 	$(this).parents("div:first").next(".tooltip_msg_txt").fadeIn();
 	})

	$(".edit_tooltip").blur(function(evt){
		 evt.preventDefault();
		 $(".tooltip_msg_txt").hide();
		$(this).parents("div:first").next(".tooltip_msg_txt").fadeOut();  ;
 	})


	$(".close").click(function(){
		$(".tooltip_box").fadeOut();
		$("#facebox_overlay").fadeOut();
		return false;
	})

}

