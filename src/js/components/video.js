const videoFile = document.querySelector('#video-file');
const videoBtn = document.querySelector('#video-button');
const videoIcon = document.querySelector('.video-icon');

let playPause = function() {
  if(videoFile.paused){
    videoFile.play();
    videoBtn.classList.add('video__btn--played');
  } else {
    videoFile.pause();
    videoBtn.classList.remove('video__btn--played');
  }
};

let finalVideo = function () {
  videoBtn.classList.remove('video__btn--played');
};

videoBtn.addEventListener('click', playPause);
videoFile.addEventListener('ended', finalVideo);


