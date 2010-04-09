var streamTitle = "";

$(document).ready(function(){
	
	//create tag
	
	
	
	//add css behavior
 	$("h1").hover(	function () {	$(this).addClass("hilite");},
    				function () {  	$(this).removeClass("hilite");}
    			);
    			
	//add click listener
  
	$(".vote").click(function()
	{
		var title = $(this).parents(".votes").attr("title");
		console.log(title); 
		var vote = $(this).hasClass("vote-yes") ? 'yes' : 'no';
		console.log(vote);   		
		$(this).parents(".votes").hide("fast", function()
			{
				$(this).parents(".ranking").load('/res .thanks', {'stream_title':title, 'vote':vote}, function()
																			{
																				$(".thanks").show("fast");
																			}//end on load complete
												);//end load
			}//end hide complete
		);//end hide method								
					});//end of the a click event handler   
});//end document ready function
