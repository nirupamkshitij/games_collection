
			var end;
			function changing(){
				var size=0;
				size=Math.floor((Math.random()*400)+100);
				var left=Math.floor((Math.random()*750)+50);
				var top=Math.floor((Math.random()*100)+50);
				$("#devil").height(size);
				$("#devil").css('left',left);
				$("#devil").css('top',top);
				$("#devil").css('display','block');
				
				start=new Date().getTime();
			}
			
			function display(){setTimeout(changing,1000)}
				
				
				display();
				$("#devil").click(function(){
					var end= new Date().getTime();
					$("#devil").css('display','none');
					var time=(end-start)/1000;
					$("#timetaken").html(time +" seconds");
					display();
				});

