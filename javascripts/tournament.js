
$(document).ready(function(){
	plusMinusBtnEdit();
	chooseWinnerRadioBtn();
	tableRowSelect();
	searchGolfCourseConfirm();	
	showhidecallaway();
	showhideclosed();
	showhideopentoall();
	showhideseries();
	showhideincrement();
	datepicker();
	pesspaidTooltips();
	tooltipOpanUnderScrollbar();
	tooltipDemo();
});

//GR_Edit_Scores_Creator_View_Other_Scores_Expanded.html
function plusMinusBtnEdit() {
	$('.editInput').live('click', function(){
		$('.increaseData, .decreaseData').attr('style', 'display: none!important');
		$(this).parents('.editScorebtn').find('.increaseData, .decreaseData').attr('style', 'display: block!important');
	});
}
function datepicker() {
$( ".datepicker").live('focus', function(){
	$('.datepicker').datepicker();
	})
}
function showhidecallaway(){
   $(".callaway").hide();
   $('.show').click(function(){
	$(".callaway").show();
	$(this).parents('body').append('<div id="facebox_overlay" class="facebox_overlay_tooltip"></div>');
	});
	$('.hide').click(function(){
	$(".callaway").hide();
	$(this).parents('body').find('#facebox_overlay').removeAttr('id');
	});
}


function showhideclosed(){
   $(".closed").hide();
   $('.show_closed').click(function(){
	$(".closed").show();
	$(this).parents('body').append('<div id="facebox_overlay" class="facebox_overlay_tooltip"></div>');
	});
	$('.hide_closed').click(function(){
	$(".closed").hide();
	$(this).parents('body').find('#facebox_overlay').removeAttr('id');
	});
}

function showhideopentoall(){
   $(".open_to_all").hide();
   $('.show_open_to_all').click(function(){
	$(".open_to_all").show();
	$(this).parents('body').append('<div id="facebox_overlay" class="facebox_overlay_tooltip"></div>');
	});
	$('.hide_open_to_all').click(function(){
	$(".open_to_all").hide();
	$(this).parents('body').find('#facebox_overlay').removeAttr('id');
	});
}


function showhideseries(){
   $(".increment_tooltip_box").hide();
   $('.increment').click(function(){
	$(".increment_tooltip_box").show();
	$(this).parents('.tooltipwrap').append('<div id="facebox_overlay" class="facebox_overlay_tooltip"></div>');
	});
	$('.hide_increment').click(function(){
	$(".increment_tooltip_box").hide();
	$(this).parents('.tooltipwrap').find('#facebox_overlay').removeAttr('id');
	});
}


function showhideincrement(){
   $(".series").hide();
   $('.show_series').click(function(){
	$(".series").show();
	$(this).parents('body').append('<div id="facebox_overlay" class="facebox_overlay_tooltip"></div>');
	});
	$('.hide_series').click(function(){
	$(".series").hide();
	$(this).parents('body').find('#facebox_overlay').removeAttr('id');
	});
}


function chooseWinnerRadioBtn() {
	$('.chooseWinner input[type="radio"]').live('click', function(){
		$('.chooseWinner').find('tr').removeClass('active');
		$(this).parents('tr').addClass('active');
	});	
}

function tableRowSelect() {
	$('.searchGolfCourse .searchResult tr').live('click', function(){
		$(this).parents('.searchResult').find('tr').removeClass('active');
		$(this).addClass('active');
});	
}

function searchGolfCourseConfirm(){
$('.searchGolfCourse .searchResult tr').live('click', function(){
	var name = $(this).find('.name').text();
	smoke.confirm('Select <span class="font-semibold">  ' + name + '</span>?', function(e){
		if (e){
		closefacebox();
		}else{
			$('.searchResult').find('tr.active').removeClass('active');
		}
	}, {ok:"Yes", cancel:"No"});		
	});
}

function pesspaidTooltips(){
	$('.pess .edit_tooltip').live('click', function(){								
		$(this).parents('body').append('<div id="facebox_overlay" class="facebox_overlay_tooltip"></div>')
	});
	
	$('.pess .tooltipwrap .green, .pess .tooltip_box .tip_cross').live('click', function(){
		$(this).parents('body').find('#facebox_overlay').removeAttr('id');
	});
}

//GR_PESS_Free.html Index HCP .. tooltip Opan Under Scrollbar
function tooltipOpanUnderScrollbar(){
	$('.chatlist  .edit_tooltip').live('click', function(){
		$(this).parents('.slimScrollDiv').css('position', 'static');
		$(this).parents('body').append('<div id="facebox_overlay" class="facebox_overlay_tooltip"></div>')
	});
	
	$('.chatlist  .tooltipwrap .green, .chatlist .tooltip_box .tip_cross').live('click', function(){
		$(this).parents('.slimScrollDiv').css('position', 'relative');	
		$(this).parents('body').find('#facebox_overlay').removeAttr('id');
	});
}

function tooltipDemo(){
 $(".test").livequery('click', function(){
	 	$(".tooltip_demo").hide();
		$(this).next(".tooltip_demo").show();		 	
})
   
   
    $(".hide").live('click', function(){
	 	 $(".tooltip_demo").hide();		 	
})
 
}

