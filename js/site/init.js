jQuery(document).ready(function($)
{
	var swfEmbed = {};
		swfEmbed.flashvars = { baseUrl: escape(baseUrl)};
		swfEmbed.parameters= { salign:"tl", allowfullscreen:true, allowscriptaccess:"always", bgcolor:"#fffaad", wmode:"transparent" };
		swfEmbed.attributes = { name: "site" };
		swfEmbed.minimumVersion = '10.0.45';

	if(swfobject.hasFlashPlayerVersion("6.0.65"))
	{
		if(!swfobject.hasFlashPlayerVersion(swfEmbed.minimumVersion)) swfEmbed.parameters = {};

		$("#content").html("<div id='flash'></div>");
		swfobject.embedSWF("loader.swf","flash", "100%", "100%",swfEmbed.minimumVersion,"swf/expressInstall.swf",swfEmbed.flashvars,swfEmbed.parameters,swfEmbed.attributes);
	}
	else {
		$("#noflash").show();
	}
});