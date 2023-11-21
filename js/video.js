var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
		console.log("The current volume is " + video.volume);
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow down video");
		video.playbackRate *= 0.9;
		console.log("Speed is " + video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		console.log("Speed up video");
		video.playbackRate /= 0.9;
		console.log("Speed is " + video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function() {
		console.log("Skip ahead");
		if (video.currentTime + 10 > video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log("Video current time is " + video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			console.log("Unmute");
			video.muted = false;
			document.querySelector("#mute").innerHTML = "Mute";
		} else {
			console.log("Mute");
			video.muted = true;
			document.querySelector("#mute").innerHTML = "Unmute";
		}
	});

	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		console.log("The current volume is " + video.volume);
		document.querySelector("#volume").innerHTML = this.value + "%";
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function(){
		video.classList.remove("oldSchool");
	});

});


