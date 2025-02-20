const nameInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const name = event.target.value.trim();
  if (name) {
    output.textContent = name;
  } else {
    output.textContent = `Anonymous`;
  }
});
