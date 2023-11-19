var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = this.document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to " + video.autoplay)
	console.log("auto loop is set to " + video.loop)

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


var video = document.querySelector("#player1");


function updateVolume() {
	var volumeDisplay = document.querySelector("#volume");
	volumeDisplay.textContent = video.volume * 100 + '%';
}

document.querySelector("#play").addEventListener("click", function() {
    video.play();
    updateVolume();
});
video.addEventListener("volumechange", updateVolume);



document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Video paused");
});



document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate -= 0.1;
    console.log('Video slowed down to: ' + (video.playbackRate * 100).toFixed(0) + '% of original speed');
});


  document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate += 0.1;
    console.log("Video sped up to: " + (video.playbackRate * 100).toFixed(0) + "% of original speed");
});


document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }

    console.log("Current video location: " + video.currentTime + " seconds");
});


document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        this.textContent = 'Mute';
    } else {
        video.muted = true;
        this.textContent = 'Unmute';
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    var volumeDisplay = document.querySelector("#volume");
    volumeDisplay.textContent = this.volume * 100 + '%';
});


document.querySelector("#vintage").addEventListener("click", function() {
    var videoElement = document.querySelector("#player1");
    videoElement.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    var videoElement = document.querySelector("#player1");
    videoElement.classList.remove("oldSchool");
});