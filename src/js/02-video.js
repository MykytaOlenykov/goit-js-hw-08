import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEOPLAYER_SORTAGE_KEY = 'videoplayer-current-time';

const ifremRef = document.querySelector('#vimeo-player');

const player = new Player(ifremRef);

const currentViewingTime = localStorage.getItem(VIDEOPLAYER_SORTAGE_KEY);

if (currentViewingTime) {
  player.setCurrentTime(currentViewingTime);
}

player.on('timeupdate', throttle(saveTimeData, 1000));

function saveTimeData(data) {
  localStorage.setItem(VIDEOPLAYER_SORTAGE_KEY, data.seconds);
}
