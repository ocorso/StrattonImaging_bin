jQuery(document).ready(function($)
{
	var swfEmbed = {};
		swfEmbed.flashvars = { baseUrl: escape(baseUrl)};
		swfEmbed.parameters= { salign:"tl", allowfullscreen:true, allowscriptaccess:"always", bgcolor:"#000", wmode:"opaque" };
		swfEmbed.attributes = { name: "site" };
		swfEmbed.minimumVersion = '10.0.45';

	if(swfobject.hasFlashPlayerVersion("6.0.65"))
	{
		if(!swfobject.hasFlashPlayerVersion(swfEmbed.minimumVersion)) swfEmbed.parameters = {};
		//$("#top").show();
		//disable flash for now!!
		$("#top").html("<div id='flash'></div>");
		swfobject.embedSWF("loader.swf","flash", "100%", "100%",swfEmbed.minimumVersion,"swf/expressInstall.swf",swfEmbed.flashvars,swfEmbed.parameters,swfEmbed.attributes);
	}
	else {
		$("#top").show();
	}//end if else we have flash
	
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//				click handlers, yeah big whoop
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	jQuery("a").click(function(){
		var whichDiv = jQuery(this).html();
		console.log(whichDiv);
		hideAll(whichDiv);
	});//end of anchor click handler
	jQuery("#logo").click(function(){
		var whichDiv = jQuery(this).html();
		console.log(whichDiv);
		hideAll(whichDiv);
	});
});//end document ready
	
	
	function hideAll($butShowThis){
		var bgColor = "#FFF";
		var div = "#home";
		
		jQuery(".screen").hide("fast");
		
		switch($butShowThis){
			case "Learn": 		div ="#learn";
			 					bgColor = "#f00";
								break;
			case "Our Craft": 	div = "#craft";
			 					bgColor = "yellow";
								break;
			case "Credits": div = "#credits";
			 					bgColor = "green";
								break;
			case "Connect": 	div = "#connect";
			 					bgColor = "blue";
								break;
		}//end switch
		jQuery("body").animate({ backgroundColor: bgColor }, 'fast', function(){jQuery(div).show("fast");});
	}//end function but show this