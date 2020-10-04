					
					$("#top").click(function(){
					$("#top").animate({
						top:'10px',
						opacity:'0.5',
						},"slow",function(){
						$("#list").slideToggle("slow");
					});
					});