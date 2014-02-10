$(document).ready(function(){
	hideshowmenu();
	hideshowmenuplayer();
	hideShowMenuWithExpandCollaps();
	toggleHeadingClass();
});

function hideshowmenu() {
	$(".toggle_container").hide();
	$("h4.expand_heading").toggle(function(){
		$(this).addClass("active"); 
		}, function () {
		$(this).removeClass("active");
	});
	$("h4.expand_heading").click(function(){
		$(this).next(".toggle_container").slideToggle("slow");
	});
	
}

function hideshowmenuplayer() {
	$(".player_container").hide();
	$("h4.player_heading").toggle(function(){
		$(this).addClass("active"); 
		}, function () {
		$(this).removeClass("active");
	});
	$("h4.player_heading").click(function(){
		$(this).next(".player_container").slideToggle("slow");
	});
	$(".player_all").toggle(function(){
		$(this).addClass("expanded"); 
		}, function () {
		$(this).removeClass("expanded");
	});
	$(".player_all").click(function(){
		$(".player_container").slideToggle("slow");
	});
}


function toggleHeadingClass(){
	$(".mainExpand_heading").click(function(e){ 
											//console.log($(this).parents('td:first').find(".userEmail").attr('class'))
		//e.preventDefault();
		//if($(this).parents('td:first').find(".userEmail").hasClass('dark-blue')){
			console.log($(this).parents('td:first').find(".userEmail").attr('class'))
			$(this).parents('td:first').find(".userEmail").toggleClass('dark-blue');
			$(this).parents("table:first").find("tr td:eq(2) table, tr td:eq(5) table").toggleClass("dark-blue");
			
		//}		 
	})	
}


function hideShowMenuWithExpandCollaps() {
	$(".mainToggle_container").hide();
//Toggle Plus minus same event click
	$(".mainExpand_heading").toggle(function(){
		if ($(this).hasClass('expandActive')) 
			{$(this).removeClass("expandActive");
		  	 //$(this).parents('td:first').find(".userEmail").removeClass('dark-blue');
		 }
		else {  
			$(this).addClass("expandActive" );
		 	//$(this).parents('td:first').find(".userEmail").addClass('dark-blue');
		 }
			}, function () {
		if ($(this).hasClass('expandActive')) 
			{$(this).removeClass("expandActive");
			 //$(this).parents('td:first').find(".userEmail").removeClass('dark-blue');
		 }
		else {  
			$(this).addClass("expandActive" );
		 	//$(this).parents('td:first').find(".userEmail").addClass('dark-blue');
		 }
	});
	
	$(".mainExpand_heading").click(function(){
 		$(this).parents('table:first').next(".mainToggle_container").slideToggle("slow");
 	});
/*
	$(".mainExpand_heading").click(function(){
										if($(this).hasClass('expandActive')){
										$(this).parents('td:first').find(".userEmail").addClass('dark-blue');
										$(this).parents('table:first').next(".mainToggle_container").slideToggle("slow");
										}
										else {
										$(this).parents('td:first').find(".userEmail").removeClass('dark-blue');
											$(this).parents('table:first').next(".mainToggle_container").slideToggle("slow");
										}
											});
*/
	
//Expand all click
	$(".expand_all").click(function(){
		$(this).parents('.expand_wrapper').find(".mainExpand_heading").each(function(){
		$(this).addClass("expandActive"); 
		$(this).parents('td:first').find(".userEmail").addClass('dark-blue');
 
			//$(this).addClass("expandActive"); 
	 		//$(this).parents('.playersbbteamsubRow:first').find('.userEmail').each(function(){$(this).addClass('dark-blue');});
			//$(this).parents('.playersteamRow:first').find('.userEmail').each(function(){$(this).addClass('dark-blue');});
			//$(this).parents('td:first').find(".userEmail").addClass('dark-blue');
		});
	$(this).parents('.expand_wrapper:first').find(".mainToggle_container").show("slow");
    //toggleHeadingClass();
    });
	
//Collapse all click

	$(".collapse_all").click(function(){
		$(this).parents('.expand_wrapper').find(".mainExpand_heading").each(function(){
		$(this).removeClass("expandActive");
		$(this).parents('td:first').find(".userEmail").removeClass('dark-blue');																					 
																					 
     		//$(this).removeClass("expandActive");
			//$(this).parents('.playersbbteamsubRow:first').find('.userEmail').each(function(){$(this).removeClass('dark-blue');})
			//$(this).parents('.playersteamRow:first').find('.userEmail').each(function(){$(this).removeClass('dark-blue');});
			//$(this).parents('td:first').find(".userEmail").removeClass('dark-blue');
	});
		
		$(this).parents('.expand_wrapper:first').find(".mainToggle_container").hide("fast");
		//toggleHeadingClass();
	});
}


