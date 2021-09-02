const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function(e) {
// Normal functions implement 'this' property by themselves, unlike arrow functions.
  const percentage = ((e.pageY - this.offsetTop) / this.offsetHeight) * 100;
  const min = 0.4;
  const max = 4;
  const playRate = (min + (max - min)*percentage/100).toFixed(1);
  bar.style.height = `${percentage}%`;
  bar.textContent = `${playRate}x`;
})
