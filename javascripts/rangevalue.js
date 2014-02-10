$(function() {

			//Store frequently elements in variables
			var slider  = $('.slider'),
				tooltip = $('.valueslider');

			//Hide the Tooltip at first
			tooltip.show();

			//Call the Slider
			slider.slider({
				//Config
				range: "min",
				min: 1,
				value: 10,

				start: function(event,ui) {
				    tooltip.fadeIn('fast');
				},

				//Slider Event
				slide: function(event, ui) { //When the slider is sliding

					var value  = slider.slider('value'),
						volume = $('.volume');

					tooltip.css('left', value).text(ui.value);  //Adjust the tooltip accordingly

					if(value <= 5) { 
						volume.css('background-position', '0 0');
					} 
					else if (value <= 25) {
						volume.css('background-position', '0 -25px');
					
					};

				},

				
			});

		});

$(function() {

			//Store frequently elements in variables
			var slider  = $('.slider-hcp'),
				tooltip = $('.valueslider-hcp');

			//Hide the Tooltip at first
			tooltip.show();

			//Call the Slider
			slider.slider({
				//Config
				range: "min",
				min: 1,
				value: 10,

				start: function(event,ui) {
				    tooltip.fadeIn('fast');
				},

				//Slider Event
				slide: function(event, ui) { //When the slider is sliding

					var value  = slider.slider('value'),
						volume = $('.volume');

					tooltip.css('left', value).text(ui.value);  //Adjust the tooltip accordingly

					if(value <= 5) { 
						volume.css('background-position', '0 0');
					} 
					else if (value <= 25) {
						volume.css('background-position', '0 -25px');
					
					};

				},

				
			});

		});
