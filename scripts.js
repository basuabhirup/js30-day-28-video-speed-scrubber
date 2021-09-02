const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');
let isDown = false;

function changeRate(e) {
// Normal functions implement 'this' property by themselves, unlike arrow functions.
  if (isDown) {
    const percentage = ((e.pageY - this.offsetTop) / this.offsetHeight) * 100;
    const min = 0.4;
    const max = 4;
    const playbackRate = (min + (max - min)*percentage/100).toFixed(1);
    bar.style.height = `${percentage}%`;
    bar.textContent = `${playbackRate}x`;
    video.playbackRate = playbackRate;
  }
}

speed.addEventListener('mousedown', () => isDown = true);

speed.addEventListener('mousedown', changeRate);
speed.addEventListener('mousemove', changeRate);

speed.addEventListener('mouseleave', () => isDown = false);
speed.addEventListener('mouseup', () => isDown = false);
