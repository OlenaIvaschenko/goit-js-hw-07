function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');
buttonEl.addEventListener('click', handleClick);
function handleClick(event) {
  const newColor = getRandomHexColor();
  spanEl.textContent = `- ${newColor}`;
  bodyEl.style.backgroundColor = newColor;
}
