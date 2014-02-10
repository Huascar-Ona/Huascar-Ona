
$(document).ready(function(){
 inviteViewNote();
 clubTooltips();
 clubsSearchDropdown()
 editSetting();
 selectAllCheckmember();
 attinding();
 notAttinding();
 showHideContainRead();
});

function selectAllCheckmember(){
	$('.checkAll').live( 'change', function() {
		if($(this).is(':checked')){
			$('.cb-element' ).attr('checked','checked');
			$('.cb-element').parents('.checker').find('span:first').addClass('checked');
			$(this).parents('.controls').find('.font-semibold').html('Uncheck All Club Members ');
		}else{
			$('.cb-element' ).removeAttr('checked');
			$('.cb-element').parents('.checker').find('span:first').removeClass('checked');
			$(this).parents('.controls').find('.font-semibold').html('Check All Club Members ');
		}
	});
}
function attinding(){
	$(".drop-attending").hide();
	$('body').click(function(event){
		if($(event.target).attr('class') == 'button green small'){
			$('.drop-attending').toggle();
		}else {
			$('.drop-attending').hide();
		}
	});	
	}


function notAttinding(){
	$(".drop-notattending").hide();
	$('body').click(function(event){
		if($(event.target).attr('class') == 'button red'){
			$('.drop-notattending').toggle();
		}else {
			$('.drop-notattending').hide();
		}
	});	
}
//GR_Main_Club.html
function inviteJoin(m){ 
 	$currentLink = m.attr('class');
	m.parents('.not-hide').addClass('connect-holder');

	$('.Clubjoin').find('.confim-close, .close_image').live('click', function(){
		m.parents('.connect-holder').removeClass('connect-holder');
	});

	$('.confirm').live('click', function(){
 		if($currentLink == 'open_facebox button green small rtest') { 
				$('.ClubDetailsContain').css('display', 'block!important');
		}			 	 
	
		$('.connect-holder').parents('li:first').hide('slow');
		$('.connect-holder').parents('.events').find('.viewDetailsContain').hide();
		$('.connect-holder').removeClass('connect-holder');
		
		return false;							
	});
}
function clubTooltips(){
	$('.club .edit_tooltip').live('click', function(){								
		$(this).parents('body').append('<div id="facebox_overlay" class="facebox_overlay_tooltip"></div>')
	});
	
	$('.club .tooltipwrap .green, .club .tooltip_box .tip_cross').live('click', function(){
		$(this).parents('body').find('#facebox_overlay').removeAttr('id');
	});
}

//remove Activity FeedDropdown mark as inappropriate and remove post
function editSetting() {
	$('.edit_setting').find(".feedNavlist").hide();
	$('.edit_setting').find('.club_btn').live('click', function(){
	$('.feedNavlist').show();	
	});
}

//GR_Club_Owner.html
function showHideContainRead(){  
	$(".hideData").hide();
	$(".dArrow").show();
	$('.dArrow').click(function(){
    $(".hideData").slideToggle();
		$(this).toggleClass('uArrow');
		$(this).text($(this).text() == 'read less' ? 'read more' : 'read less'); // <- HERE
  });
}

//club screen

/*Clubs search dropdown list*/
function clubsSearchDropdown() {
	$(".drop-Search-list").hide();
	$('.golf').click(function(event){
		if($(event.target).attr('class') == 'search-items'){
			$(event.target).parents('div.search-club-ui').find('.drop-Search-list').slideToggle("fast");
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

function inviteViewNote(){
	$('.mainContainer').find('.ClubDetailsContain').hide();
	$('.eventschedule').find('.post-selected').remove();
	
	$('.inviteDetails .viewDetails').live('click', function(){
			$('.eventschedule').find('.post-selected').remove();
			$(this).parents('.eventschedule').prepend('<div class="post-selected"></div>');
			$(this).parents('.events').find('.ClubDetailsContain').show();
			$(this).parents('.events').find('.notSureFriends').hide();
			
			var offset_pos = $(this).parents('li:first').offset();
			var offset_pos_top = offset_pos.top
			
		if ($(this).parents('li:first').hasClass('first')) {
				$(this).parents('.events').find('.ClubDetailsContain').css('margin-top', '0px' );
				}else{
				$(this).parents('.events').find('.ClubDetailsContain').css('margin-top', (offset_pos_top - 576) );
				}
			return false;																									 
	 });
	
		$('.mainContainer').find('.notSureFriendsShow').live('click', function(){
				$(this).parents('.eventAttending').find('.notSureFriends').show();		
				return false;							
		});
	$('.EventDetailsContain').hide();
	$('.clubEventDetails').find('.viewDetails').live('click', function(event){ 
		$(this).parents('.events').find('.EventDetailsContain').show();
		event.preventDefault();
		
		var arrowPosition = $('.post-selected').position().top;	// To get position or left direction arrow.															
	   $(this).parents('.events').find('.add-comments-ui').hide();
		$('.EventDetailsContain').css('margin-top', arrowPosition-14);
	  	
		$arrow = $(this).parents('.events').find('.post-selected');//.hide();	 
//		if($(arrow).length > 1){
//			$(arrow+':last').hide();
//		}
   });
	$('.club_activity').find('.add-comment-list').live('click', function(){ 
	   $(this).parents('.events').find('.EventDetailsContain').hide();
	    $(this).parents('.events').find('.ClubDetailsContain').show();
	   
	   var lastArrowPos = $('.activity-posts li.selected').find('.post-selected').position().top;	// To get position or left direction arrow.																
	   //alert(lastArrowPos);
 
	 	$arrow = $(this).parents('.events').find('.post-selected').hide();
//		$('.ClubDetailsContain').css('margin-top', 0);
//		$('.ClubDetailsContain').css('margin-top', lastArrowPos+300);
		
   });

//Club area-close icon show hide GR_Create_Club.html
$('.invitation-list-content li').hover(
  function () {
    $(this).find('.area-close').css('display', 'block');
  }, 
  function () {
    $(this).find('.area-close').css('display', 'none');
  }
 );

//group member area-close icon show hide GR_Group_Members.html
$('.group-member-list li').hover(
  function () {
    $(this).find('.area-close').css('display', 'block');
  }, 
  function () {
    $(this).find('.area-close').css('display', 'none');
  }
 );

}



 