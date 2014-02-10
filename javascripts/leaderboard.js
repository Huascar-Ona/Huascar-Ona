
$(document).ready(function(){
 addCommentleaderboard();
 grossandNet(); 
 leftslide();
 
});

function addCommentleaderboard() {	
	$('.mainContainer').find('.add-comments-leaderboard').hide();
        $(".add-comment-leaderboard").show();
 
    $('.add-comment-leaderboard').click(function(){
    $('.mainContainer').find('.add-comments-leaderboard').show();
    });


}

function grossandNet() {	
	$('.mainSubtabs').find('.netRound').hide();
        $('.net').click(function(){
		$('.mainSubtabs').find('.netRound').show();
		$('.mainSubtabs').find('.grossRound').hide();
		$(this).addClass('font-semibold').removeClass('underline cursor');
		$('.gross').addClass('underline cursor').removeClass('font-semibold');
      });
		$('.gross').click(function(){
		$('.mainSubtabs').find('.grossRound').show();
		$('.mainSubtabs').find('.netRound').hide();
		$(this).addClass('font-semibold').removeClass('underline cursor');
		$('.net').addClass('underline cursor').removeClass('font-semibold');
      });
}


function leftslide(){
	$(".next-round-detail").click(function(){
	  $('.tournament-round1').hide("slide", { direction: "left" }, 1000);
	  $('.tournament-round2').show("slide", { direction: "right" }, 1000);
	});
	$(".previous-round-detail").click(function(){
	  $('.tournament-round2').hide("slide", { direction: "right" }, 1000);
	  $('.tournament-round1').show("slide", { direction: "left" }, 1000); 
	});
}