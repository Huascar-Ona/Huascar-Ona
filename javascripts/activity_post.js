
$(document).ready(function(){
	addComment();
	removeActivityFeedDropdown();
	postInputContain();
	viewPreviousElement();
	removeActivityFeedDropdown();
	dropNavOnClick();
	addToLiFirstClass();
});

//Post comment button dropdown activity on home page and wall page 
function dropNavOnClick() {
	$(".drop-Nav-list").hide();
	$('body').click(function(event){
		if($(event.target).attr('class') == 'uiButton'){
			
			$(event.target).parents('div.drop-Nav').find('.drop-Nav-list').toggle();
		}else {
			$('.drop-Nav-list').hide();
		}
	});
	
	$('.drop-Nav-list .listItem').each(function(){
		$(this).removeClass("selected");
	});
	
	$('.drop-Nav-list li:first').addClass("selected");

	$('.drop-Nav-list .listItem').click(function(){
		$('.drop-Nav-list .listItem').each(function(){
			$(this).removeClass("selected");
	});
		
	$(this).addClass("selected");	

	/* Below method for truncate submit value*/
	
  	var text_value = $(this).text();
    var len = 9;
    trunc = text_value.substring(0, len);
    $('.post-button').find('.input').html('Post (' + trunc + ".. )");
	 $('.send-button').find('.input').html('Send (' + trunc + " )");
	});
	
	
	//See more functionality start
	$('.drop-Nav-list').find('.see-more').live('click', function(){
																														
		$('.display-none').each(function(){
			$('.drop-Nav-list').find('.display-none').css('display', 'block');
		});
	$('.drop-Nav-list').find('.see-more').remove();
	$('.drop-Nav-list').show();
	});
	//See more functionality end
}

function addComment() {
	$('.mainContainer').find('.add-comments-ui').hide();
	
	$('.add-comment-list').live('click', function(){
//Start - position set when click on add comment
			var first_li = $(this).parents('li:first');
			var offset_pos = first_li.offset();
			var offset_pos_top = offset_pos.top
			var store_top_position = $(this).parents('li:first').height();
			if ($('body').hasClass('userprofile')){
// Wall page
				if($(this).parents('li:first').hasClass('first')){
					$(this).parents('.userprofile #my_wall').find('.add-comments-ui').css('margin-top', '0px' );
						}else {
					$(this).parents('.userprofile #my_wall').find('.add-comments-ui').css('margin-top', (offset_pos.top - 163) );
					}
				//$('.feedDropdownBtn').css('margin-left', '171px' );
				}
			else
			{
// Home page
				if($(this).parents('li:first').hasClass('first')){
					$(this).parents('.golf').find('.add-comments-ui').css('margin-top', '0px' );
						}else {
					$(this).parents('.golf').find('.add-comments-ui').css('margin-top', (offset_pos.top - 197) );
				}	
			}
			
		{
// summary page
				if($(this).parents('li:first').hasClass('first')){
					$(this).parents('.summary').find('.add-comments-ui').css('margin-top', '0px' );
						}else {
					$(this).parents('.summary').find('.add-comments-ui').css('margin-top', (offset_pos.top - 650) );
				}	
			}	
//End position

//Start - Apply selected class when click on add comment text
			$(this).parents('.activity-posts').find('li').removeClass('selected');
			$(this).parents('.mainContainer').find('.add-comments-ui').show();
			$(this).parents('li:first').addClass('selected');
			$(this).parents('.activity-posts').find('.UIImageBlock_Content').prepend('<div class="post-selected"></div>');
			$('.arrow_none').find('.post-selected').hide();
			
//End

genericSetScrollPositionBottom();

//Start - hide & show -- previous comments on condition
			var chatlist_offset = $(this).parents('.golf').find('.activity-comments .chatlist').offset();
			var chatlist_top_pos = chatlist_offset.top;
	
			var content_offset = $(this).parents('.golf').find('.activity-comments .content').offset();
			var content_top_pos = content_offset.top
		
//			if(chatlist_top_pos == content_top_pos){
//					$(this).parents('.golf').find('.uiHeaderSection').hide();
//			}else {
//				$(this).parents('.golf').find('.uiHeaderSection').show('slow');
//				}
//End

});

// My wall screen - add comment click and css set for right section
			$('.userprofile .add-comment-list').live('click', function(){
				$(this).parents('.userprofile').find('.rightColContainer').css('width', '280px');
			//	$(this).parents('.userprofile').find('.drop-Nav-list').css('margin-left', '294px');
			});
//End My wall screen
}

function markAsInappropriate(position){
position.parents('.UIImageBlock_Content').addClass('mark-holder');

$('.inappropriate-confirmation').find('.confim-close, .close_image').live('click', function(){
	position.parents('.mark-holder').removeClass('mark-holder');
});

$('.inappropriate-confirmation').find('.confirm').live('click', function(){
	$('.mark-holder').find('.mark-inappropriate').html('<span class="inappropriate-icon fl"></span> marked as inappropriate');
	$('.mark-holder').find('.mark-inappropriate .inappropriate-icon').css('background-position', '-162px 0px');
	$('.mark-holder').removeClass('mark-holder');
});	
}


//remove Activity FeedDropdown mark as inappropriate and remove post
function removeActivityFeedDropdown() {
	$('.golf').click(function(event){
	//	$('.feedDropdownBtn').css('display', 'none');
		$('.feedNavlist').hide();
		$('.uibtn').removeClass('selected');
		if($(event.target).attr('class') == 'uibtn'){
			$(event.target).parents('div.feedDropdownBtn').find('.feedNavlist').show();
			$(event.target).parents('div.feedDropdownBtn').css('display', 'block');	
			$(event.target).addClass('selected');
		}else {
			$('.feedNavlist').hide();
			$('.uibtn').removeClass('selected');
			$('.feedDropdownBtn').css('display', '');	
		}
	});

		$('.feedNavlist').find('.markInappropriate').live('click', function(){
			$(this).parents('li:first').find('.add-comment-list').before('<h5 class="fr mark-inappropriate"><span class="inappropriate-icon fl"></span> marked as inappropriate</h5>');
			$(this).parents('li:first').find('.mark-inappropriate .inappropriate-icon').attr('style', 'background-position: -162px 0px !important');
			$(this).parents('.feedNavlist').find('.markInappropriate').remove();
			
		});
		
		$('.feedNavlist').find('.removePost').live('click', function(){
		  $(this).parents('li:first').fadeOut(1000, function(){
        $(this).remove();
		$('.add-comments-ui').hide();
		
				addToLiFirstClass();
    });
		  
		});
}

//Post contain on home page
function postInputContain(){
	$('.post-inputContainer').find('.input').click( function(){
																													
		var input_value = $('.post-inputContainer').find('textarea').val();
		if ( input_value != 'Type what\'s on your mind ...'){
		$(this).parents('.centerColContainer').find('.activity-posts').prepend($('<li><div class="UIImageBlock_Image"><a href="#"><img src="/images/valley-55.png" alt="img" ></a></div><div class="UIImageBlock_Content"><div class="feedDropdownBtn"><span class="uibtn"></span><ul class="feedNavlist"><li class="clearfix removePost"><span class="close-icon"></span>Remove Post</li></ul></div><div class="comments-counter"><span class="arrow"></span>0</div><h5 class="profile-names"><a href="#"> Valery Sibikovsky </a><span class="gray-text">0 sec ago</span></h5> <h4>' + input_value + '</h4><div class="post-attachments"></div><h5 class="add-comment-list"><span class="add-comment fl"></span>add comment</h5></div></li>').fadeIn());
		$('.post-inputContainer').find('textarea').val('');
		addToLiFirstClass();
	
//	if ($('body').hasClass('userprofile')){
//		if ($('.rightColContainer').attr("style")){
//			$('.feedDropdownBtn').css('margin-left', '171px' );
//	}
//	}
//		return false;
		} 
	//	$('.post-inputContainer').find('textarea').val('');
	});
}



function viewPreviousElement(){
	$('.add-comments-ui').find('.previous-comment').live('click', function(e){
		var clonee = $(this).parents('.add-comments-ui').find('.activity-comments').find('.content').html();
		$(this).parents('.add-comments-ui').find('.activity-comments').find('.content').prepend($(clonee).fadeIn(2000));
		//below code written only for demo purpose
		$(this).parents('.add-comments-ui').find('.activity-comments').find('.content').find('ul:first h4 a').text('Paul Smith');
		$(this).parents('.add-comments-ui').find('.activity-comments').find('.content').find('ul:nth-child(2) h4 a').text('Richard Thompson');
		$(this).parents('.add-comments-ui').find('.activity-comments').find('.content').find('ul:nth-child(3) h4 a').text('Jimi Fox');
	});
}




function markAsInappropriate(position){
position.parents('.UIImageBlock_Content').addClass('mark-holder');

$('.inappropriate-confirmation').find('.confim-close, .close_image').live('click', function(){
	position.parents('.mark-holder').removeClass('mark-holder');
});

$('.inappropriate-confirmation').find('.confirm').live('click', function(){
	$('.mark-holder').find('.mark-inappropriate').html('<span class="inappropriate-icon fl"></span> marked as inappropriate');
	$('.mark-holder').find('.mark-inappropriate .inappropriate-icon').css('background-position', '-162px 0px');
	$('.mark-holder').removeClass('mark-holder');
});	
}



//remove Activity FeedDropdown mark as inappropriate and remove post
function removeActivityFeedDropdown() {
	$('.golf').click(function(event){
	//	$('.feedDropdownBtn').css('display', 'none');
		$('.feedNavlist').hide();
		$('.uibtn').removeClass('selected');
		if($(event.target).attr('class') == 'uibtn'){
			$(event.target).parents('div.feedDropdownBtn').find('.feedNavlist').show();
			$(event.target).parents('div.feedDropdownBtn').css('display', 'block');	
			$(event.target).addClass('selected');
		}else {
			$('.feedNavlist').hide();
			$('.uibtn').removeClass('selected');
			$('.feedDropdownBtn').css('display', '');	
		}
	});

		$('.feedNavlist').find('.markInappropriate').live('click', function(){
			$(this).parents('li:first').find('.add-comment-list').before('<h5 class="fr mark-inappropriate"><span class="inappropriate-icon fl"></span> marked as inappropriate</h5>');
			$(this).parents('li:first').find('.mark-inappropriate .inappropriate-icon').attr('style', 'background-position: -162px 0px !important');
			$(this).parents('.feedNavlist').find('.markInappropriate').remove();
			
		});
		
		$('.feedNavlist').find('.removePost').live('click', function(){
		  $(this).parents('li:first').fadeOut(1000, function(){
        $(this).remove();
		$('.add-comments-ui').hide();
		
				addToLiFirstClass();
    });
		  
		});
}

//Post comment button dropdown activity on home page and wall page 
function dropNavOnClick() {
	$(".drop-Nav-list").hide();
	$('body').click(function(event){
		if($(event.target).attr('class') == 'uiButton'){
			$(event.target).parents('div.drop-Nav').find('.drop-Nav-list').toggle();
		}else {
			$('.drop-Nav-list').hide();
		}
	});
	
	$('.drop-Nav-list .listItem').each(function(){
		$(this).removeClass("selected");
	});
	
	$('.drop-Nav-list li:first').addClass("selected");

	$('.drop-Nav-list .listItem').click(function(){
		$('.drop-Nav-list .listItem').each(function(){
			$(this).removeClass("selected");
	});
		
	$(this).addClass("selected");	

	/* Below method for truncate submit value*/
	
  	var text_value = $(this).text();
    var len = 9;
    trunc = text_value.substring(0, len);
    $('.post-button').find('.input').html('Post (' + trunc + ".. )");
	 $('.send-button').find('.input').html('Send (' + trunc + " )");
	});
	
	
	//See more functionality start
	$('.drop-Nav-list').find('.see-more').live('click', function(){
																														
		$('.display-none').each(function(){
			$('.drop-Nav-list').find('.display-none').css('display', 'block');
		});
	$('.drop-Nav-list').find('.see-more').remove();
	$('.drop-Nav-list').show();
	});
	//See more functionality end
}

//Add Class on activity-posts first li
function addToLiFirstClass(){
	$("#.activity-posts li").removeClass("first");
	$("#.activity-posts li:first-child").addClass("first");
}


