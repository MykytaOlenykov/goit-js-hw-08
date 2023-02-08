import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const DATA_TIME_STORAGE_KEY = 'videoplayer-current-time';

const ifremRef = document.querySelector('#vimeo-player');

const player = new Player(ifremRef);

const currentVideoplayerTime = localStorage.getItem(DATA_TIME_STORAGE_KEY);

if (currentVideoplayerTime) {
  player.setCurrentTime(currentVideoplayerTime);
}

player.on('timeupdate', throttle(saveDataTime, 1000));

function saveDataTime(data) {
  localStorage.setItem(DATA_TIME_STORAGE_KEY, data.seconds);
}
