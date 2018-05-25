window.onload = function() {
	var scripts = ["jquery-ui-1.10.3.custom.min.js", "jquery.imagesloaded.min.js", "video.js", "bigvideo.js"];
	var i =0;
	var loadScripts = function() {
		if(i == scripts.length) {
			initVideo();
			return;
		};
		$.getScript("assets/" + scripts[i], loadScripts);
		i++;
	};

	function initVideo() {
		$("<link/>", {rel: "stylesheet",type: "text/css",href: "assets/bigvideo.css"}).appendTo("head");
	     var BV = new $.BigVideo({useFlashForFirefox:false});
	     BV.init();
		$("#big-video-wrap").css("position", "fixed");


	   	//*****************************
	   	//Place your .mp4 and .ogv videos in Muse using: File Menu -> Add Files for Upload, then put their names below
	   	//*****************************
	    BV.show("assets/evoque.mp4",{ambient:true});	    
	};

	loadScripts();
}; //Window Load