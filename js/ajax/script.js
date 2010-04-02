var streamTitle = "";

$(document).ready(function(){
	
	//create tag
	
	
	
	//add css behavior
 	$("h1").hover(	function () {	$(this).addClass("hilite");},
    				function () {  	$(this).removeClass("hilite");}
    			);
    			
	//add click listener
  
	$(".vote-yes").click(function(){ var parentTag = $(this).parents(".vote");
    								streamTitle = $(parentTag).attr("title");	
									console.log(streamTitle);
									$(parentTag).hide("fast", function(){$('<div id="thanks"></div>').appendTo('.ranking');
																		$("#thanks").hide(0, function(){$('<h1>Thanks So much for voting Yes<h1>').appendTo('#thanks');
																		$("#thanks").show("fast");	
																										});
																		});								
					});//end of the a click event handler   
	$(".vote-no").click(function(){ var parentTag = $(this).parents(".vote");
    								streamTitle = $(parentTag).attr("title");	
									console.log(streamTitle);
									
									$(this).parents(".vote").attr("title")

									$(parentTag).hide("fast", function(){$('<div id="thanks"></div>').appendTo('.ranking');
																		$("#thanks").hide(0, function(){$('<h1>Thanks So much for voting No<h1>').appendTo('#thanks');
																		$("#thanks").show("fast");	
																										});
																		});								
					});//end of the a click event handler   

});//end document ready function
