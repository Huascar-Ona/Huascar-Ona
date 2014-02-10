
$(function() {
                $('.activator').click(function(){
                    $('.overlay').fadeIn('fast',function(){
                        $('.box').animate({'top':'55px'},50);
                    });
                });
                $('.boxclose').click(function(){
                    $('.box').animate({'top':'-200px'},50,function(){
                        $('.overlay').fadeOut('fast');
                    });
                });

            });

$(function() {
                $('.activator2').click(function(){
                    $('.overlay2').fadeIn('fast',function(){
                        $('.box2').animate({'top':'55px'},50);
                    });
                });
                $('.boxclose').click(function(){
                    $('.box2').animate({'top':'-500px'},50,function(){
                        $('.overlay2').fadeOut('fast');
                    });
                });
				

            });

$(function() {
                $('.activator3').click(function(){
                    $('.overlay_group').fadeIn('normal',function(){
                        $('.box_group').animate({'top':'55px'},10);
                    });
                });
                $('.boxclose').click(function(){
                    $('.box_group').animate({'top':'-1000px'},10,function(){
                        $('.overlay_group').fadeOut('normal');
                    });
                });
				

            });