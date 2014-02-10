
$(document).ready(function(){
 achivementBoxOvarlay();
 compareToFriend();
 flashNoticeClose();
 countryEdit();
 profileImgChange();
 ctfRemoveTooltipSelected();
 ctfRemoveBox();
 titleEdit();
 achivementShare();
 trophiesShare();
 shareButton();
 profileImgChange();
});

/*Achivement page box ovarlay start*/
function achivementBoxOvarlay() {
	$('.ic_container').each(function(){
		$(this).capslide({
				caption_color	: 'white',
				//caption_bgcolor	: 'black',
//				overlay_bgcolor : 'black',
				border			: '',
				showcaption	    : false
		});
	});	
}
/*Achivement page box ovarlay End*/

// Compare to friend start
function compareToFriend() { 
	$(".stats .friendlistui").find("li:not(.selected)").live('click', function() {
		$(this).addClass('selected');
		$(this).find('.UIImageBlock_Image').prepend('<i></i>');
		var clone_element = $('.stats-score').find('ul.score-info:last').clone();
		clone_element.find('.heading').html($(this).find('.UIImageBlock_Content .title a').html())
		clone_element.find('.heading').append('<span class="area-close"></span>');
		$(this).parents('.stats-score').find('.compare-friend').before(clone_element);
		$(this).parents('.tooltip_box').fadeOut();
		ctfAdjustTooltipPosition();
		ctfRemoveBox();
	});
}

function flashNoticeClose() {
	$(".flash-notice .area-close").click(function(){
		$(this).parents(".flash-notice").animate({ opacity: 'hide' }, "slow");
	});

	$(".activity-comments .area-close").live('click', function() {
		$(this).parents("ul:first").animate({ opacity: 'hide' }, "slow");
	});
	
	$(".remove-round .area-close").live('click', function() {
		$(this).parents(".remove-round").animate({ opacity: 'hide' }, "slow");
	});
	$(".remove-group .confirm_remove_group").live('click', function() {
		$(this).parents(".remove-group").animate({ opacity: 'hide' }, "slow");
	});
}

//User_Profile_Page.html Country edit 
function countryEdit() {
	$(".country-edit .edit-icon").hide();
	$(".country-edit").hover(function(){
	$(this).find(".edit-icon").toggle();
	}); 
	
	$(".edit-icon").click(function(){
	$(this).parents(".country-edit").find(".edit-icon").show();
	$(this).parents(".country-edit").find(".user-country h5:first").hide();
	$(this).parents(".country-edit").find(".user-country h5:nth-child(2)").show();
	});
}

// Added by nikhil
function titleEdit() {
	$(".title-edit .edit-icon").hide();
	$(".title-edit").hover(function(){
	$(this).find(".edit-icon").toggle();
	}); 
	
	$(".edit-icon").click(function(){
	$(this).parents(".title-edit").find(".edit-icon").show();
	$(this).parents(".title-edit").find(".user-title h3:first").hide();
	$(this).parents(".title-edit").find(".user-title h3:nth-child(2)").show();
	});
}

function profileImgChange() {
    $(".edit-profile-photo").find('.green').live('click', function() {
																																	
		$('#facebox	.content').find('.title').html('<h3>Uploading Profile Photo</h3>');
		$('#facebox').find('.facebox_content').html('<div class="loading"><img src="/facebox/loading.gif"></div>');
	  $("#facebox, #facebox_overlay").delay(300).fadeOut();
	if($('.profile-pic').find('img').attr('src').indexOf('pic-1')	==	-1){
				$('.profile-pic').find('img').replaceWith("<img alt='Profile pic' src='/images/profile-pic-1.png'>").show('slow');
	}else{
		$('.profile-pic').find('img').replaceWith("<img alt='Profile pic' src='/images/profile-pic.png'>");
		}
		
		});
}

function profileImgChange() {
$(".edit_logo_club").find('.green').live('click', function() {
	$('#facebox	.content').find('.title').html('<h3>Uploading Profile Photo</h3>');
	$('#facebox').find('.facebox_content').html('<div class="loading"><img src="/facebox/loading.gif"></div>');
	$("#facebox, #facebox_overlay").delay(300).fadeOut();

	if($('.profile-pic').find('img').attr('src').indexOf('pic-1')	==	-1){
		$('.profile-pic').find('img').replaceWith("<img alt='Profile pic' src='/images/club_img2.png'>").show('slow');
	}else{
	$('.profile-pic').find('img').replaceWith("<img alt='Profile pic' src='/images/club_img1.png'>");
	}
});
}


function ctfRemoveTooltipSelected(){
	$(".stats .score-info").find('.area-close').live('click', function(){
	var select_element = $(this).parent('.heading').text();
	var close_row = $(this);
	$('.friendlistui').find('li.selected').each(function(){  
	if ($(this).find('.title a').html() == select_element){
		$(this).removeClass('selected');
		close_row.parents('.score-info:first').remove();
		ctfRemoveBox();
		ctfAdjustTooltipPosition();
	}
	});
	});
}

function ctfRemoveBox() { 
	if ($('.stats-score').find('.score-info').length > 4){
			$(".stats").find('.compare-friend').hide();
	}else 
	{$(".stats").find('.compare-friend').show();}
}

function ctfAdjustTooltipPosition() { 
	if ($('.stats-score').find('.score-info').length > 3){
	$(".stats").find('.tooltip_box').css('margin-left','-268px');
	$(".stats .tooltip_box").find('.arrow_top').css('margin-left','80%');
	$(".stats .compare-friend").find('p').html("Compare up to 1 friends");
	}else {
	$('.stats .tooltip_box,	.stats .tooltip_box .arrow_top').removeAttr('style');
	$(".stats .compare-friend").find('p').html("Compare up to 2 friends");
}
}

// Compare to friend end 

function achivementShare() {
    $(".achieve-confirmation").find('.share')  
		$('#facebox	.content').find('.facebox_content').html('<h3 class="mtb20">Badge has been posted successfully <br> on your activity feed</h3>  <a href="#" class="green button close_facebox">OK</a>');
}

function trophiesShare() {
    $(".trophis-confirmation").find('.green').live('click', function() {
		$('#facebox	.content').find('.facebox_content').html('<h3 class="mtb20">Your Trophies has been posted successfully <br> on your activity feed</h3>  <a href="#" class="green button close_facebox">OK</a>');
		});
}

function shareButton(){ 
	$('.fb-icon').live('click', function() {
    $(this).toggle(function() {
        	$(this).css('background-position', '0 -30px');
    },function(){
        $(this).removeAttr("style");
    }).trigger('click');
	});
	
	$('.twitter-icon').live('click', function() {
    $(this).toggle(function() {
        	$(this).css('background-position', '-34px -30px');
    },function(){
        $(this).removeAttr("style");
    }).trigger('click');
	});
}