$("#slider-range").slider({
				range: true,
				min: 0,
				max: 40,
				values: [0, 40],
				slide: slideTime
			});
			function slideTime(event, ui){
				var val0 = $("#slider-range").slider("values", 0),
					val1 = $("#slider-range").slider("values", 1);

				startValue = val0;
				endValue = val1;
				if(parseInt(val1) == 40) {
				  endValue = '40';
				}
				$("#time").text(startValue + ' To ' + endValue);
			}
			slideTime();
			
			

			