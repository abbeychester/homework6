var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	console.log("Play Video");
	console.log(video);
	volume = document.querySelector("#volume");
	console.log(volume);
	volume.innerHTML = (video.volume*100)+"%";
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
		video.playbackRate = video.playbackRate*.8;
  	console.log("Speed is "+video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate = video.playbackRate*1.25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime = video.currentTime + 60
	console.log("Current location is "+ video.currentTime);
	if (video.currentTime >= 596.458333){
		video.currentTime = 0
		video.playbackRate = video.playbackRate * 1
	}
	console.log("Current location is" + video.currentTime)
}

function mute() {
		console.log(video.muted)
		// if (video.volume > 0){
		if (video.muted){
				video.muted=false;
  			console.log("Unmuted");
				document.querySelector("#mute").innerHTML = "Mute"
				// var button = document.querySelector("#mute");
				// button.innerHTML="Unmuted"
			}
		else{
				video.muted=true;
      	console.log("Muted");
				document.querySelector("#mute").innerHTML = "Unmute"
			}
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = (video.volume*100) +"%";
}


function gray() {
	video.style.filter = "grayscale(100%)"
	console.log("In grayscale")
}

function color() {
	video.style.filter = "grayscale(0%)"
	console.log("In color")
}
