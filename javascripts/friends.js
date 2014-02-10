
$(document).ready(function(){
 friendRequestSentConfirmation();
 friendsSearchDropdown();
 friendRequestAccepted();
 friendRequestSentConfirmation();
 selectAllCheckbox();
});

//Open Friends Invite Accepted and Decline
function friendRequestAccepted() {
$(".friend-list").find('.accept').live('click', function() {
	$(this).parents('.invite-accept').html('<div class="accepted">Friend Request Accepted</div>').fadeIn('1000').delay(300).queue(function() {
	});
});

$(".search-friends-ui .friend-list").find('.invite-accept .decline').live('click', function() {
	$(this).parents('.invite-accept').html('<div class="decline-msg">Friend Request Declined</div>').fadeIn('1000');
});
}

/*Friends search dropdown list*/
function friendsSearchDropdown() {
	$(".drop-Search-list").hide();
	$('.golf').click(function(event){
		if($(event.target).attr('class') == 'search-items'){
			$(event.target).parents('div.search-friends-ui').find('.drop-Search-list').slideToggle("fast");
		}else {
			$('.drop-Search-list').hide();
		}
	});
//	$('.drop-Search-list li').each(function(){
//		$(this).removeClass("selected");
//	});
	$('.drop-Search-list li:first').addClass("selected");

	$('.drop-Search-list li').click(function(){
		$('.drop-Search-list li').each(function(){
			$(this).removeClass("selected");
	});
		$(this).addClass("selected");	
		$(this).parents('.search-bar').find('input[type="text"]').attr('name', $(this).attr('title'));
		$(this).parents('.search-bar').find('input[type="text"]').val($(this).attr('title'));
		placeholderInput();
	});
}




//Send friend request Confirmation
function friendRequestSentConfirmation() {
	$('.add-friends-confirmation').find('input[type="submit"]').live('click', function() {
		$(this).parents('.facebox_content').html('<ul class="center mt20"><li>Request sent successfully</li><li class="mt20"><input name="" type="submit"  class="green mr10 close_facebox" value="OK" /></li></ul>');
	});
}


function selectAllCheckbox(){
	$('.checkAll').live( 'change', function() {
		if($(this).is(':checked')){
			$('.cb-element' ).attr('checked','checked');
			$('.cb-element').parents('.checker').find('span:first').addClass('checked');
			$(this).parents('.controls').find('.font-semibold').html('Uncheck All');
		}else{
			$('.cb-element' ).removeAttr('checked');
			$('.cb-element').parents('.checker').find('span:first').removeClass('checked');
			$(this).parents('.controls').find('.font-semibold').html('Check All');
		}
	});
}