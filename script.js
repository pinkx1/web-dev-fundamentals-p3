document.addEventListener("DOMContentLoaded", () => {
	console.log("script is loaded and running wow");
  });
  
function initMap() {
	const yerevan = { lat: 40.1792, lng: 44.4991 };
	const map = new google.maps.Map(document.getElementById("map"), {zoom: 13, center: yerevan,});
	const marker = new google.maps.Marker({
		position: yerevan,
		map: map,
		title: "Yerevan Center",
	});
  
	const infoWindow = new google.maps.InfoWindow({
	  content: "<h2>Welcome to Yerevan!</h2><p><img src='media/armenia.png'></p>",
	});
  
	marker.addListener("click", () => {
	  infoWindow.open(map, marker);
	});

	const customMapStyle = [
	  {
		featureType: "poi",
		stylers: [{ visibility: "off" }],
	  },
	];
	map.setOptions({ styles: customMapStyle });
  }
  

const imagesSection = document.querySelector('.images-section');
if (imagesSection) {
const images = imagesSection.querySelectorAll('img');
if (images.length > 0) {
	let currentIndex = 0;
	images.forEach((img, index) => {
	if (index !== 0) {
		img.style.display = 'none';
	}
	});
	setInterval(() => {
	images[currentIndex].style.display = 'none';
	currentIndex = (currentIndex + 1) % images.length;
	images[currentIndex].style.display = 'block';
	}, 3000);
}
}

document.addEventListener("DOMContentLoaded", () => {
	const audio = document.getElementById("myAudio");
	const playPauseBtn = document.getElementById("playPauseBtn");
	const progressBar = document.getElementById("progressBar");
	const timeDisplay = document.getElementById("timeDisplay");
  
	playPauseBtn.addEventListener("click", () => {
	  if (audio.paused) {
		audio.play();
		playPauseBtn.innerText = "Pause";
	  } else {
		audio.pause();
		playPauseBtn.innerText = "Play";
	  }
	});
  
	audio.addEventListener("timeupdate", () => {
	  if (audio.duration) {
		const progress = (audio.currentTime / audio.duration) * 100;
		progressBar.value = progress;
		timeDisplay.innerText = formatTime(audio.currentTime) + " / " + formatTime(audio.duration);
	  }
	});
  
	progressBar.addEventListener("input", () => {
	  if (audio.duration) {
		audio.currentTime = (progressBar.value / 100) * audio.duration;
	  }
	});
  
	function formatTime(time) {
	  const minutes = Math.floor(time / 60);
	  const seconds = Math.floor(time % 60);
	  return (
		(minutes < 10 ? "0" + minutes : minutes) +
		":" +
		(seconds < 10 ? "0" + seconds : seconds)
	  );
	}
  });


  document.addEventListener("DOMContentLoaded", () => {
	const video = document.getElementById("myVideo");
	const videoPlayPauseBtn = document.getElementById("videoPlayPauseBtn");
	const videoProgressBar = document.getElementById("videoProgressBar");
	const videoTimeDisplay = document.getElementById("videoTimeDisplay");
	const fullscreenBtn = document.getElementById("fullscreenBtn");
  
	if (video) {
	  videoPlayPauseBtn.addEventListener("click", () => {
		if (video.paused) {
		  video.play();
		  videoPlayPauseBtn.innerText = "Pause";
		} else {
		  video.pause();
		  videoPlayPauseBtn.innerText = "Play";
		}
	  });
  
	  video.addEventListener("timeupdate", () => {
		if (video.duration) {
		  const progress = (video.currentTime / video.duration) * 100;
		  videoProgressBar.value = progress;
		  videoTimeDisplay.innerText = formatTime(video.currentTime) + " / " + formatTime(video.duration);
		}
	  });
  
	  videoProgressBar.addEventListener("input", () => {
		if (video.duration) {
		  video.currentTime = (videoProgressBar.value / 100) * video.duration;
		}
	  });
  
	  fullscreenBtn.addEventListener("click", () => {
		if (video.requestFullscreen) {
		  video.requestFullscreen();
		} else if (video.webkitRequestFullscreen) {
		  video.webkitRequestFullscreen();
		} else if (video.msRequestFullscreen) {
		  video.msRequestFullscreen();
		}
	  });
	}
  
	function formatTime(time) {
	  const minutes = Math.floor(time / 60);
	  const seconds = Math.floor(time % 60);
	  return (
		(minutes < 10 ? "0" + minutes : minutes) +
		":" +
		(seconds < 10 ? "0" + seconds : seconds)
	  );
	}
  });

