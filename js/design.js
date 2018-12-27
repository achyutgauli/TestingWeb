/* JavaScript Document */

/*10. a dialogue box is seen using jquery and javascript
$(document).ready(function(){
	
	alert('success');
	
});    */

/*11,12. Animating the height of mobile menu bottom: for both small and large case
$(document).ready(function(){
	
	$('nav a.mobile_menu').on('click',function(){
		
		var currentNavHeight = $('nav').height();
		
		if( currentNavHeight < 5){
			
			var newNavHeight = $('nav > ul').height() + 15;
			$('nav').animate({'height':newNavHeight+'px'},750);
			
			}else{
				
			$('nav').animate({'height':'0px'},750);
			
			}
		
		});

});    */


/*13. remove the mobile menu effect for large case      */
$(document).ready(function(){
	
	$('nav a.mobile_menu').on('click',function(){
		
		var currentNavHeight = $('nav').height();
		
		if( currentNavHeight < 5){
			
			var newNavHeight = $('nav > ul').height() + 15;
			$('nav').animate({'height':newNavHeight+'px'},750);
			
			}else{
				
			$('nav').animate({'height':'0px'},750, function(){
				$(this).removeAttr('style');
			});	
			
		}
	});	
			
	$(window).resize(function(){
			
			if( $(this).width() > 625){
				$('nav').removeAttr('style');
				
			}
			
	    });
			
});  