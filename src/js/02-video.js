import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(playerCurrentTime, 1000));
player.on('ended', endVideo);
setVideoTime();

function playerCurrentTime(data) {
  const videoTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', videoTime);
  
}

function endVideo() {
  player.off('timeupdate');
  localStorage.removeItem('videoplayer-current-time');
}

function setVideoTime() {
  const savedTime = localStorage.getItem('videoplayer-current-time');

  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}