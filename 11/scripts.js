//Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const fullScreenButton = player.querySelector('.full')
//build functions

function togglePlay(){
    if(video.paused) video.play();
    else video.pause();
    //button change??
}

function updateButton(){
    toggle.textContent =  this.paused ? "►" : "||"; 
}

function skip(){
    let skip = parseInt(this.dataset.skip);
    video.currentTime += skip;
}


function handleChange(){
    video[this.name] = parseFloat(this.value);
}

function handleProgress(){
    let progress = (video.currentTime / video.duration) * 100;
    progressBar.setAttribute('style',`flex-basis:${progress}%`);
}

function scrub(e){
    let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//hook up event listener

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButton.forEach(x => x.addEventListener('click', skip));
ranges.forEach(x => x.addEventListener('change', handleChange));

progress.addEventListener('click', scrub);

fullScreenButton.addEventListener('click',  () => video.requestFullscreen());