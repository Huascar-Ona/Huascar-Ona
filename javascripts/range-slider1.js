$("#slider-range1").slider({
				range: true,
				min: 18,
				max: 50,
				values: [18, 50],
				slide: slideTime
			});
			function slideTime(event, ui){
				var val0 = $("#slider-range1").slider("values", 0),
					val1 = $("#slider-range1").slider("values", 1);

				startValue = val0;
				endValue = val1;
				if(parseInt(val1) == 50) {
				  endValue = '50+';
				}
				$("#time1").text(startValue + ' To ' + endValue);
			}
			slideTime();
			