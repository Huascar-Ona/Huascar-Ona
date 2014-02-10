
$(document).ready(function(){				
	uniformElement(); // uniform apply for input textfiled 
	faceboxFormElement(); // Uniform call on facebox
	teamscorematchplay();
	tableScrollbar(); // show hide Scollbar add
	genericTitleTooltip(); // Define for small tooltip
	showTooltip(); //Define for all contain with Tooltip
	faceboxOvarlayRemove(); // Ovarlay remove from facebox
	showHideContentTabs(); // Show hide generic tabs
	golfRequestsList(); /*Notification top popup */
	genericCallFunctionOnFacebox();
	golfallRequestsListAddSelect();//notifcations Invite page All Request list
	genericSetScrollPositionBottom(); //Scrollbar position bydefault on bottom
	searchMacSystem();
	groupnameEdit();
	showHideContentSettingTabs();
	showHideContentScedulesTabs();
	showCreateClubLoader(); // This is for temporary purpose.
});	

function removegroup(m){ 
	$currentLink = m.attr('class');
	
	m.parents('.UIImageBlock_Content').addClass('connect-holder');

	$('.remove_group').find('.confim-close, .close_image').live('click', function(){
		m.parents('.connect-holder').removeClass('connect-holder');
	});

	$('.confirm_remove_group').live('click', function(){
		$('.connect-holder').parents('li:first').animate({ opacity: 'hide' }, "slow")
		$('.connect-holder').removeClass('connect-holder');

		return false;							
	});
}

//Script apply for Stylish select, checkbox, radio button.
function uniformElement() {
 	jQuery("input[type='checkbox'] , input[type='radio'], input[type='file'], select").uniform();
}

function searchMacSystem() {
	 if(navigator.userAgent.indexOf('Mac') > 0)
     { $('body').addClass('mac_os') }
}

function faceboxFormElement() {
 	jQuery("#facebox input[type='checkbox'] , #facebox input[type='radio'], #facebox input[type='file'], #facebox select").uniform();	
	tableScrollbar();
	placeholderInput();
	showHideContentTabs();
	genericTitleTooltip();
	gmailTextTruncate();
}

// Function call when facebox load
function genericCallFunctionOnFacebox(){
	if($('.setScrollBtmPos').is(':visible')){
		genericSetScrollPositionBottom();
	}
}
// Function for groupname edit GR_Group_Member.html
function groupnameEdit() {
		
	$(".renamegroup").click(function(){
	$(this).parents(".title-edit").find(".renamegroup").hide();
	$(this).parents(".title-edit").find(".user-title h3:first").hide();
	$(this).parents(".title-edit").find(".user-title h3:nth-child(2)").show();
	});
}

//Add Placeholder on input textarea field
function placeholderInput(){	
	$('.placeHolder').each(function(){
		var watermark_value = $(this).attr('name');
		$(this).watermark( watermark_value, { useNative: false } );	
	});
}

/* facebox close on anchor tag */
function teamscorematchplay(){	
	$('.Player_tr_btn').live('click', function(){
		$('.Team_score_matchplay').find('.Player_tr_btn').find('tr').removeClass('active');	
		$(this).find('tr:first').addClass('active');													
	});

}

function closefacebox() {
  $.facebox.close();
}

function faceboxOvarlayRemove() {
  $("a[class*=ovarlay_facebox]").click(function(){
		$("#facebox_overlay").removeClass("facebox_overlayBG")
		$("#facebox_overlay").addClass("facebox_hide")
		$("#facebox_overlay").remove()
	});
}

/*http://onehackoranother.com/projects/jquery/tipsy/*/
function genericTitleTooltip() {
	$("[rel-tips*='tipsy-tip']").each(function(){
		var gravity_val = $(this).attr('rel-tips').replace('tipsy-tip ','');
		$(this).tipsy({gravity: gravity_val});
	});
}

/*Public scrollbar for friend list home page right sidebar*/
function tableScrollbar() {
	$('.chatlist').each(function(){
	$(".tooltip_box").css({'display':'block'});

	 var height = $(this).attr('rel_height');

		if($(this).height() > height.replace('px','')){ 
			$(this).slimscroll({
				color: '#000',
				size: '6px',
				height:	height
			});				
		}
		genericCallFunctionOnFacebox();
		$(".tooltip_box").css({'display':'none'})
	});
}

/*Show hide containg Tabs start user, event, club pages*/
function showHideContentTabs() {
	$(".mainTabs, .mainSubtabs").tabs();
}


/*end*/

/*Show hide containg Tabs start user, event, club pages*/
function showHideContentSettingTabs() {
var tabs = 	$("#mainTabsSetting, .mainSubtabsSetting").tabs();

var $tabs = $('#mainTabsSetting').tabs(); // first tab selected

$('.menber_btn').click(function() { // bind click event to link
											
$tabs.tabs('select', 2); // switch to 1st tab
return false;
})
}


/*end*/

/*Show hide containg Tabs start user, event, club pages*/
function showHideContentScedulesTabs() {
	$(".mainScedulesTabs, .mainScedulesSubtabs").tabs({
									    select: function(event, ui) {$('.tootltipUpcoming').hide();}
									  });
}
/*end*/

/*Notification top popup */
function golfRequestsList() {
	$(".golfRequestsList").hide();
	$('.golf').click(function(event){
				if($(event.target).parents('.golfRequests').attr('class') == 'golfRequests'){
			$(event.target).parents('.golfRequests').find('.golfRequestsList').toggle();
		}else {
			$('.golfRequestsList').hide();
		}													
	});
}


//People You May Know  popup left side
function connectFriend(m){

m.parents('.UIImageBlock_Content').addClass('connect-holder');

$('.connect-confirmation').find('.confim-close, .close_image').live('click', function(){
	m.parents('.connect-holder').removeClass('connect-holder');
});

$('.connect-confirmation').find('.confirm').live('click', function(){
	$('.connect-holder').find('.range').after('<div class="accepted">Friend Request Sent</div>');
	
	$('.connect-holder').find('.connect-icon').remove()
	$('.connect-holder').removeClass('connect-holder');
});
}


//notifcations Invite page All Request list
function golfallRequestsListAddSelect() {
	var m = $('.golfRequestsList li').find('.invite-accept');
	$('.golfallRequestsList li .invite-accept, .golfRequestsList li .invite-accept').find('.accept').click(function() {
		$(this).parents('li:first').addClass('selected');
		$(this).parents('div.invite-accept:first').html('<div class="invite-accepted">accepted</div>').fadeIn('slow');
		m.parents('li:first').parents('golfRequestsList').show();
		return false;
 });

	$(".golfallRequestsList li .invite-accept, .golfRequestsList li .invite-accept").find('.later').click(function() {
	$(this).parents('li:first').fadeOut('slow');
		return false;
	});
}

//GR_Invite_Friends.html Gmail popup 
function gmailTextTruncate() {
	$('.friendlist li a').each(function(){
			var text_value = $(this).text();
			var len = 15;
			if (text_value.length > 15){
				trunc = text_value.substring(0, len);
				$(this).html(trunc + ".." );
			}
	});
}



// Generic set position bottom of table scrollbar
function genericSetScrollPositionBottom(){
//Start - Scroll bar bottom position set when click on add comment text
			var activity_comments_hgt = $('.activity-comments').height();
			var activity_comments_content_hgt = $('.activity-comments .content').height();
			$('.chatlist').scrollTop( activity_comments_content_hgt - activity_comments_hgt);
			$('.activity-comments .slimScrollBar').css('top', activity_comments_hgt - $('.slimScrollBar').height());
//End Scroll bar bottom position set when click on add comment list
}


// Overlay Function

function showCreateClubLoader() {
	$('.showLoader').live('click', function(e){	
		e.preventDefault();
		showOverlay();
		setTimeout("window.location = 'GR_Club_Owner.html'", 5000);					
	})	
}

function hideOverlay() {
  $('#facebox, #wait').fadeOut();
}
 
function showOverlay() {
  $("#facebox_overlay_club, #wait").fadeIn();
}


