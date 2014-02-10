
$(document).ready(function(){
	tooltipOtherFrendList();
	tooltipUpcomingFrendList();
	tooltipmultiple();
	calenderAlertPopups();
	
});

function tooltipmultiple(){
   var m = 100;
   $('.show_tip').click(function(){
	var zIndex = $(this).nextAll('.tooltip_box:first').css('z-index');
	$(this).nextAll('.tooltip_box:first').css('z-index', m +=1);
	$(this).next('.tooltip_box').show();
	});
	$('.hide_tip').click(function(){
		$(this).parents(".tooltip_box:first").hide();
	});
}

function tooltipUpcomingFrendList() {
	$('.tootltipUpcoming').hide();
	
	$('.tooltipUpcomingFriends').live('click', function() {
	 $(this).parents('.tooltip_box:first').find(".tootltipUpcoming").show();
	});
	$('.tip_cross, .hidetootltipUpcoming').live('click', function() {
		$('.tootltipUpcoming').hide();																 
	});
}

//Open Friends Invite Accepted and Decline
function tooltipOtherFrendList() {
	$('.tootltipFriendList').hide();	
	$('.tooltipOtherFriends').live('click', function() {
	 $(this).parents('.UIImageBlock_Content:first').find(".tootltipFriendList").show();
	 return false;
	});
	$('.tip_cross, .hidetooltipOtherFriends').live('click', function() {
		$('.tootltipFriendList').hide();																 
	});
	
	$(".edit_tooltip").click(function(evt){
		 
	});
}


function calenderAlertPopups(){
$('.clrTooltipCtn .accept').live('click', function(){
	smoke.confirm('Are you sure you want to <span class="font-bold"> Accept</span> <BR><span class="font-bold dark-blue">Double Eagle Tournament @ Sequoia Woods Country Club </span> ?', function(e){
		if (e){
		  $('.tooltip_box ').hide();
		}else{	 
		}
	}, {ok:"Yes", cancel:"No"});		
	return false;
	});

$('.clrTooltipCtn .decline').live('click', function(){
	smoke.confirm('Are you sure you want to <span class="font-bold">Decline</span> <BR><span class="font-bold dark-blue">Double Eagle Tournament @ Sequoia Woods Country Club </span> ?', function(e){
		if (e){
		  $('.tooltip_box ').hide();
		}else{	 
		}
	}, {ok:"Yes", cancel:"No"});		
	return false;
	});

$('.joinTheGameconfirm').live('click', function(){
	smoke.alert('You have successfully joined the <BR><span class="font-bold dark-blue">Double Eagle Tournament @ Sequoia Woods Country Club </span>', function(e){
 	});		
	$('.tooltip_box ').hide()
		return false;
	});

}