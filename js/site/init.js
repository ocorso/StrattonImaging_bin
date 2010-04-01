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
	}
});