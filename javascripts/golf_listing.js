
$(document).ready(function(){
	addAnothertee();
    additionIndicator();
	additionIndicatorWoman();
	disabledenbledTextfield();

	
	
});

function disabledenbledTextfield(){
$('.course_rating input[name = "rating1"]').click(function(){
		if($(this).hasClass('hole_9')){
			$('.course_rating li.hole_18 input[type="text"]').attr('disabled', 'disabled');
			$('.course_rating li.hole_9 input[type="text"]').removeAttr('disabled');
			$('.course_rating li.hole_18').addClass('disable');
			$('.course_rating li.hole_9').removeClass('disable');
		}
		else {
			$('.course_rating li.hole_9 input[type="text"]').attr('disabled', 'disabled');
			$('.course_rating li.hole_18 input[type="text"]').removeAttr('disabled');
			$('.course_rating li.hole_9').addClass('disable');
			$('.course_rating li.hole_18').removeClass('disable');
		}
	});
}
function addAnothertee(){
	$('.teecontainer').hide();
	$('.tee a.add_btn').livequery('click', function(e){
		e.preventDefault();
		$('.teecontainer').show();	
	});
	
}


function removeTeesclose(m){ 
	$currentLink = m.attr('class');
	
	m.parents('.teecontainer').addClass('connect-holder');

	$('.eventDecline, .eventAccept').find('.confim-close, .close_image').live('click', function(){
		m.parents('.connect-holder').removeClass('connect-holder');
	});

	$('.confirm').live('click', function(){
		$('.teecontainer').hide('slow');

		return false;							
	});
}

function additionIndicator(){
$('table.holScore.editholscoreCreator tr:eq(3) td input').keyup(function(){
					    var addition1 = 0;
						var addition2 = 0;
						var total = 0;
   						$('table.holScore.editholscoreCreator tr:eq(3) td input:lt(9)').each(function(i, ele){addition1 += parseInt(ele.value)})
						$('table.holScore.editholscoreCreator tr:eq(3) td input:gt(8)').each(function(i, ele){addition2 += parseInt(ele.value)})
						if(isNaN(addition2) || isNaN(addition1))
  						  {
							  addition1 = 0;
							  addition2 = 0;
							  console.log(addition1, addition2, total)
						  }
						total = addition1 + addition2
						  $('table.holScore.editholscoreCreator tr:eq(3) td input:lt(9)').parents('tr:first').find('td:eq(9)').text(addition1)
						  $('table.holScore.editholscoreCreator tr:eq(3) td input:gt(8)').parents('tr:first').find('td:eq(19)').text(addition2)
						  $('table.holScore.editholscoreCreator tr:eq(3) td:eq(20)').text(total)
						  console.log(addition1, addition2, total)
					 })
}
function additionIndicatorWoman(){
$('table.holScore.editholscoreCreator.woman tr:eq(3) td input').keyup(function(){
					    var addition1 = 0;
						var addition2 = 0;
						var total = 0;
   						$('table.holScore.editholscoreCreator.woman tr:eq(3) td input:lt(9)').each(function(i, ele){addition1 += parseInt(ele.value)})
						$('table.holScore.editholscoreCreator.woman tr:eq(3) td input:gt(8)').each(function(i, ele){addition2 += parseInt(ele.value)})
						if(isNaN(addition2) || isNaN(addition1))
  						  {
							  addition1 = 0;
							  addition2 = 0;
							  console.log(addition1, addition2, total)
						  }
						total = addition1 + addition2
						  $('table.holScore.editholscoreCreator.woman tr:eq(3) td input:lt(9)').parents('tr:first').find('td:eq(9)').text(addition1)
						  $('table.holScore.editholscoreCreator.woman tr:eq(3) td input:gt(8)').parents('tr:first').find('td:eq(19)').text(addition2)
						  $('table.holScore.editholscoreCreator.woman tr:eq(3) td:eq(20)').text(total)
						  console.log(addition1, addition2, total)
					 })
}

