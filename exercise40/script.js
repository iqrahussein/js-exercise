
// const videoElement = document.createElement('video');
// document.body.appendChild(videoElement);
// videoElement.style.width ="50px"

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const videoElement = document.getElementById('cover');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume');
const speedSelect = document.getElementById('speed');



const song =[
  {title : 'Song One', artist : 'Artist one',cover:'https://placehold.co/250/ad1a46/FFFFFF', src: 'https://media.istockphoto.com/id/1391319180/video/mountain-river-in-canyon.mp4?s=mp4-640x640-is&k=20&c=taygeR3uvgFnIQIy_olpKJY76chrz7yGHszkKrbXJ6Y=' },
  {title : 'Song Two', artist : 'Artist two',cover:'https://placehold.co/250/6d12b3/FFFFFF', src: 'https://media.istockphoto.com/id/1391319798/video/mountain-river-in-canyon.mp4?s=mp4-640x640-is&k=20&c=m4-58oDfmsjXHEFMnNix1aLIHsh9ppFTbBYdZG0TbMc=' },
  {title : 'Song Three', artist : 'Artist three',cover:'https://placehold.co/250/b52a84/FFFFFF', src: 'https://media.istockphoto.com/id/1391319180/video/mountain-river-in-canyon.mp4?s=mp4-640x640-is&k=20&c=taygeR3uvgFnIQIy_olpKJY76chrz7yGHszkKrbXJ6Y=' },
  {title : 'Song Four', artist : 'Artist four',cover:'https://placehold.co/250/24b3a9/FFFFFF', src: 'https://media.istockphoto.com/id/1391319798/video/mountain-river-in-canyon.mp4?s=mp4-640x640-is&k=20&c=m4-58oDfmsjXHEFMnNix1aLIHsh9ppFTbBYdZG0TbMc=' }

]
let songIndex = 0;
let isPlaying = false;
let speed = 1;

function loadSong(song){
  title.textContent = song.title
  artist.textContent = song.artist
  videoElement.src = song.src
  videoElement.style.height = '100%'
    videoElement.style.height = '220px'

  // song.src.style.width='90vw'
  //   song.src.style.width='300px'

  // videoElement.src = song.src;

}

loadSong(song[songIndex])

function play(){
  videoElement.play();
  playBtn.querySelector('i').classList.remove('fa-play')
  playBtn.querySelector('i').classList.add('fa-pause')
  isPlaying = true;
}

function pause(){
  playBtn.querySelector('i').classList.remove('fa-pause');
  playBtn.querySelector('i').classList.add('fa-play');
  videoElement.pause();
  isPlaying = false;
}

function nextPlay(){
  pause();
  setTimeout(()=>{
    songIndex++;
    console.log("sond index",songIndex);
    console.log('song lenght',song.length-1)
    if(songIndex > song.length-1){
      songIndex = 0 
    }
    loadSong(song[songIndex])
    // play();
    },300)

}

function prevPlay(){
  pause();
  setTimeout(()=>{
      songIndex--;
    if(songIndex < 0){
      songIndex = song.length-1;
    }

    loadSong(song[songIndex]);
  },300)
}

function progressEvent(e){
  // console.log(e.srcElement.duration)
  //   console.log(e.srcElement.currentTime)

    const {duration,currentTime} =e.srcElement

    if(isNaN(duration)) return;
    const progresspercentage =(currentTime /duration)*100;

    progress.style.width = `${progresspercentage}%`

    const durationMinute = `${Math.floor(duration/60)}`
    let durationSec = `${Math.floor(duration%60)}`
    if(durationSec <10){
      durationSec = `0${durationSec}`
    }
    durationEl.textContent = `${durationMinute}:${durationSec}`;

    const currentMinute = `${Math.floor(currentTime/60)}`
    let currentSec = `${Math.floor(currentTime%60)}`
    if(currentSec <10){
      currentSec = `0${currentSec}`
    }
    currentTimeEl.textContent = `${currentMinute}:${currentSec}`;

    videoElement.playbackRate = speed;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = videoElement.duration;
    if (isNaN(duration)) return;
    const newTime = (clickX / width) * duration;


    if (isFinite(newTime)) {
        videoElement.currentTime = newTime;
    }
}
playBtn.addEventListener('click', ()=>{

  if(isPlaying){
    pause();
  }else{
    play();

  }
})


nextBtn.addEventListener('click',()=>{
  nextPlay()
}
)

prevBtn.addEventListener('click',()=>{
  prevPlay()
})

videoElement.addEventListener('timeupdate',progressEvent)

progressContainer.addEventListener('click', setProgress);

volumeSlider.addEventListener('input',(e)=>{
  videoElement.volume = e.target.value;
})

speedSelect.addEventListener('change',(e)=>{
   speed = parseFloat(e.target.value)
   videoElement.playbackRate = speed;
})