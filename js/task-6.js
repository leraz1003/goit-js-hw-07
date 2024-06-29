function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('input[type="number"]');
const boxContainer = document.getElementById('boxes');


createBtn.addEventListener('click', () => { 
  console.dir(input.value)
  if (input.value >= 1 && input.value <= 100 ) {
    createBoxes(input.value);
    input.value='';
  }
});

function createBoxes(amount) {
  boxContainer.innerHTML = '';
 
  let width = 20;
  let height = 20;

  for (let i = 1; i <= amount; i++){
    width += 10;
    height += 10;
    boxContainer.insertAdjacentHTML('beforeend', `<div style="width:${width}px; height:${height}px; background-color:${getRandomHexColor()};"></div>`);
  }
}

destroyBtn.addEventListener('click', () => {
  boxContainer.innerHTML = '';
})