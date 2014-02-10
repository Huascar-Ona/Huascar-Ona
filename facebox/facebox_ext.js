$.facebox.settings.closeImage = '/facebox/closelabel.png';

$(function() {

  $(document).bind('reveal.facebox', function() {
	genericCallFunctionOnFacebox();
    if ($('#facebox').find('div.content.no_cancel').length)
      blankFaceboxCloseImage();
  });

  $(document).bind('close.facebox', function() {
    if ($('#facebox').find('div.content.refresh').length)
      StreamStep.reloadPage();
  });

	// For close the facebox on customize link .
	$(".close_facebox").live('click', function(){
		$('#facebox').fadeOut(); $('#facebox_overlay').fadeOut();
	});
	
  function blankFaceboxCloseImage() {
    var replacement = $('<div></div>');
    var close_link = $('#facebox a.close');
    replacement.css({ width: close_link.width(), height: close_link.height() + 7 });
    close_link.replaceWith(replacement);
  }


  jQuery('a[class*=open_facebox]').livequery(function(){
    $(this).facebox({
		  loadingImage : '/facebox/loading.gif',
		  closeImage   : '/facebox/closelabel.png'
    });
  });

  jQuery('a[class*=ovarlay_facebox]').livequery(function(){
    $(this).facebox({
		  loadingImage : '/facebox/loading.gif',
		  closeImage   : '/facebox/closelabel.png'
    });
  });
	
});

