
$(document).ready(function(){
	inviteViewDetails();
	attestedYes();
	declinedViewDetails();
	sliderUpAndDown();
	attinding();
	notAttinding();
	Active(); // nikhil define
	selectMenuWithUlLI();
	notSureFriends();
	eventHide();
	showHideContainDown();
						 

		
	
});

function eventHide(){
	$(".DeclinedEventDetailsContain").hide();
	$('.hideevent').click(function(){
	$('.DeclinedEventDetailsContain').hide();
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

function notSureFriends(){
$('.mainContainer').find('.notSureFriends').hide();
		
		$('.mainContainer').find('.notSureFriendsShow').live('click', function(){
				$(this).parents('.eventAttending').find('.notSureFriends').slideToggle();
				$(this).text($(this).text() == '(see all)' ? '(hide all)' : '(see all)'); // <- HERE
				return false;							
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

function customInvitees(m) {
		m.parents('.tooltip_box').addClass('displayBlock');
		m.parents('.drop-Nav-list').find('.selected').removeClass('selected');
		m.parents('li').addClass('selected');
		
		var text_value = m.text();
    var len = 6;
    trunc = text_value.substring(0, len);
	  m.parents('.openToggler').find('.input').html('Send (' + trunc + ")");
		
		m.parents('.tooltip_box').css("display", "block");
		$('.tip_cross').live('click', function(){
			$(this).parents('.tooltip_box').removeClass('displayBlock')		;												
		});
}

function attestedYes() {
	$('.attestedYes').live('click', function(){
		$(this).parents('.facebox_content').find('.scroreAttesteRef').fadeIn();
	});
}


function sliderUpAndDown() {
	$(".btn-slide").live('click', function(){
		$(".panel").slideToggle("slow");
		$(this).toggleClass("active"); 
		return false;
	});
}

// Added by Nikhil
function Active(){  
	$('.rowactive a').click(function(){
	$(this).parents('tr:first').toggleClass('.active');
  });
}


// GR_Events_Open_Advanced select menu
function selectMenuWithUlLI(){

		$(".dropdown dt a").click(function() {
				$(this).parents('.golf').find('.dropdown').find('dd ul').hide();
				$(this).parents('.dropdown:first').find('dd ul').toggle();
				return false;
		});
								
		$(".dropdown dd ul li a").click(function() {
				var text = $(this).html();
				$(this).parents('ul:first').find('.selected').removeClass('selected');
				$(this).parents('li:first').addClass('selected');
				$(this).parents('.dropdown:first').find("dt a span").html(text);
				
				$(this).parents('.dropdown:first').find("dd ul").hide();
				$("#result").html("Selected value is: " + getSelectedValue("sample"));
				return false;
		});
								
		function getSelectedValue(id) {
				return $("#" + id).find("dt a span.value").html();
		}

		$(document).bind('click', function(e) {
				var $clicked = $(e.target);
				if (! $clicked.parents().hasClass("dropdown"))
						$(".dropdown dd ul").hide();
		});
}

//GRE_Summary_Event Cancel tooltip radio button

function cancelevent(value){
	if(value=='show')
	 document.getElementById('other').style.display='block';
	else
	 document.getElementById('other').style.display='none';
}

//GR_Events_Open_Advanced right side contain show hide
function inviteViewDetails(){
 	$('.EventDetailsContain').hide();
	$('.eventspro, .eventschedule, .openEventDetails').find('.post-selected').remove();
	
	$('.inviteDetails .viewDetails, .openEventDetails .viewDetails').live('click', function(){
			$('.eventspro, .eventschedule, .openEventDetails').find('.post-selected').remove();
			$(this).parents('.eventspro, .eventschedule, .view').prepend('<div class="post-selected"></div>');
			$(this).parents('.events').find('.EventDetailsContain').show();
			$(this).parents('.events').find('.DeclinedEventDetailsContain').hide();
			
		var offset_pos = $(this).parents('li:first').offset();
		var offset_pos_top = offset_pos.top
			
		if ($(this).parents('li:first').hasClass('first')) {
				$(this).parents('.events').find('.EventDetailsContain').css('margin-top', '0px' );
		}else{
				$(this).parents('.events').find('.EventDetailsContain').css('margin-top', (offset_pos_top - 376) );
		}
			return false;																									 
	 });
	
	
		
		
// Open view details 
	}
	
function declinedViewDetails(){
 	$('.DeclinedEventDetailsContain').hide();
	$('.eventschedule, .openEventDetails').find('.post-selected').remove();
	
	$('.DeclinedviewDetails').live('click', function(){
			$('.eventschedule, .openEventDetails').find('.post-selected').remove();
			$(this).parents('.eventschedule, .view').prepend('<div class="post-selected"></div>');
			$(this).parents('.events').find('.DeclinedEventDetailsContain').show();				
			$(this).parents('.events').find('.EventDetailsContain').hide();
			
		var offset_pos = $(this).parents('li:first').offset();
		var offset_pos_top = offset_pos.top
			
		if ($(this).parents('li:first').hasClass('first')) {
				$(this).parents('.events').find('.DeclinedEventDetailsContain').css('margin-top', '0px' );
		}else{
				$(this).parents('.events').find('.DeclinedEventDetailsContain').css('margin-top', (offset_pos_top - 376) );
		}
			return false;																									 
	 });
	
		
		
// Open view details 
	}	

//GR_Events_Open_Advanced.html 
function showHideContainDown(){  
	$(".filterData").hide();
	$(".downArrow").show();
	$('.downArrow').click(function(){
    $(".filterData").slideToggle();
		$(this).toggleClass('upArrow');
		$(this).text($(this).text() == 'show' ? 'hide' : 'show'); // <- HERE
  });
}

function inviteDeclineAndAccept(m){ 
	$currentLink = m.attr('class');
	
	m.parents('.UIImageBlock_Content').addClass('connect-holder');

	$('.eventDecline, .eventAccept').find('.confim-close, .close_image').live('click', function(){
		m.parents('.connect-holder').removeClass('connect-holder');
	});

	$('.confirm').live('click', function(){
		if($currentLink == 'test open_facebox button green small'){ 
			$('.ClubDetailsContain').hide();
		}
		
		$('.connect-holder').parents('li:first').hide('slow');
		$('.connect-holder').parents('.events').find('.viewDetailsContain').hide();
		//$('.ClubDetailsContain').hide();
		$('.connect-holder').removeClass('connect-holder');

		return false;							
	});
}
 
