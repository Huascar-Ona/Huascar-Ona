
$(document).ready(function(){
	profilenameEdit();
	reloadMembership();
	showhidetooltipSetting();
	emailEdit();
	cardDetailEdit();
	mailingAddressEdit();
	paypalAddressEdit();
	accountEdit();
	selectMenuWithUlLI();
	showhidetooltipCcv();
	profileuploadPhoto();
	
	
	
});	
function reloadMembership(){
$(".member").find('#membership').click(function() {
    $(parentID).load('GR_Settings_Page.html#membership')
});
}
function profilenameEdit() {
		
	$(".edit_profile").click(function(){
	$(this).parents(".title-edit").find(".edit_profile").hide();
	$(this).parents(".title-edit").find(".user-title h3:first").hide();
	$(this).parents(".title-edit").find(".user-title .hidefield").show();
	});
	$(".edit_cancel").click(function(){
	$(this).parents(".title-edit").find(".edit_profile").show();
	$(this).parents(".title-edit").find(".user-title h3:first").show();
	$(this).parents(".title-edit").find(".user-title .hidefield").hide();
	});
}

function emailEdit() {
		
	$(".email").click(function(){
	$(this).parents(".title-edit").find(".email").hide();
	$(this).parents(".title-edit").find(".user-title h5:first").hide();
	$(this).parents(".title-edit").find(".user-title h5:nth-child(2)").show();
	});
	
	$(".cancel_email").click(function(){
	$(this).parents(".title-edit").find(".email").show();
	$(this).parents(".title-edit").find(".user-title h5:first").show();
	$(this).parents(".title-edit").find(".user-title h5:nth-child(2)").hide();
	});

}



function cardDetailEdit() {
		
	$(".edit_card").click(function(){
	$(this).parents(".card-details").find(".edit_card").hide();
	$(this).parents(".card-details").find(".editcard_details").hide();
	$(this).parents(".card-details").find(".edit-card-details").show();
	});
	$(".cancel_cardDetail").click(function(){
	$(this).parents(".card-details").find(".edit_card").show();
	$(this).parents(".card-details").find(".editcard_details").show();
	$(this).parents(".card-details").find(".edit-card-details").hide();
	});
}

function mailingAddressEdit() {

	$(".edit-address-mail").click(function(){
	//$(this).parents(".mainSubtabs").find(".edit-address-mail").hide();
	//$(this).parents(".mainSubtabs").find(".editcard_details").hide();
	$(this).parents(".mainSubtabs").find(".edit-mailing-address").show();
	});
	
	$(".cancel-address-mail").click(function(){
	//$(this).parents(".mainSubtabs").find(".edit-address-mail").hide();
	//$(this).parents(".mainSubtabs").find(".editcard_details").show();
	$(this).parents(".mainSubtabs").find(".edit-mailing-address").hide();
	});
}

function paypalAddressEdit() {

	$(".edit-address-paypal").click(function(){
	//$(this).parents(".mainSubtabs").find(".edit-address-mail").hide();
	//$(this).parents(".mainSubtabs").find(".editcard_details").hide();
	$(this).parents(".mainSubtabs").find(".edit-mailing-address").show();
	});
	
	$(".cancel-address-paypal").click(function(){
	//$(this).parents(".mainSubtabs").find(".edit-address-mail").hide();
	//$(this).parents(".mainSubtabs").find(".editcard_details").hide();
	$(this).parents(".mainSubtabs").find(".edit-mailing-address").hide();
	});
}

function accountEdit() {
		
	$(".edit_account").click(function(){
	$(this).parents(".account-details").find(".edit_account").hide();
	$(this).parents(".account-details").find(".editaccount_details").hide();
	$(this).parents(".account-details").find(".account-deactivation").show();
	});
	
	$(".cancel_account").click(function(){
	$(this).parents(".account-details").find(".edit_account").show();
	$(this).parents(".account-details").find(".editaccount_details").show();
	$(this).parents(".account-details").find(".account-deactivation").hide();
	});
}



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

function profileuploadPhoto() {
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

function showhidetooltipSetting(){
   $(".tooltip_setting_box").hide();
   $('.setting_boxshow').click(function(evt){
		 evt.preventDefault();
		 $(".tooltip_setting_box").hide();
	 	$(this).next(".tooltip_setting_box").fadeIn();
	$(this).parents('body').append('<div id="facebox_overlay" class="facebox_overlay_tooltip"></div>');
	});
	$('.setting_boxhide').click(function(){
	$(".tooltip_setting_box").hide();
	$(this).parents('body').find('#facebox_overlay').removeAttr('id');
	});
}

function showhidetooltipCcv(){
   $(".whatcvv_box").hide();
   $('.showccv').click(function(evt){
		 evt.preventDefault();
		 $(".whatcvv_box").hide();
	 	$(this).next(".whatcvv_box").fadeIn();
	$(this).parents('body').append('<div id="facebox_overlay" class="facebox_overlay_tooltip"></div>');
	});
	$('.hideccv').click(function(){
	$(".whatcvv_box").hide();
	$(this).parents('body').find('#facebox_overlay').removeAttr('id');
	});
}