// Requisito 1 e 2:
function createDiv() {
  const colorPallet = document.getElementById('color-palette');
  colorPallet.style.height = '1px';
  for (let index = 1; index <= 4; index += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    div.setAttribute('id', `color${index}`);
    div.style.backgroundColor;
    div.style.float = 'left';
    div.style.height = '20px';
    div.style.border = '1px solid black';
    div.style.marginLeft = '20px';
    div.style.width = '100px';
    colorPallet.appendChild(div);
  }
}
createDiv();
// Requisito 3:
function color1(color) {
  const border = document.getElementById('color1');
  border.style.backgroundColor = color;
}
color1('black');

function color2(color) {
  const border = document.getElementById('color2');
  border.style.backgroundColor = color;
}
color2();

function color3(color) {
  const border = document.getElementById('color3');
  border.style.backgroundColor = color;
}
color3('green');

function color4(color) {
  const border = document.getElementById('color4');
  border.style.backgroundColor = color;
}
color4('red');

function buttonColor() {
  const randomButton = document.createElement('button');
  randomButton.id = 'button-random-color';
  randomButton.innerHTML = 'Cores aleatórias';
  document.body.appendChild(randomButton);
  randomButton.style.backgroundColor = 'black';
  randomButton.style.color = 'white';
}
buttonColor();

function clearButton() {
  const createButton = document.createElement('button');
  createButton.id = 'clear-board';
  createButton.innerHTML = 'Limpar';
  document.body.appendChild(createButton);
  createButton.style.marginTop = '30px';
  createButton.style.backgroundColor = 'black';
  createButton.style.color = 'white';
}
clearButton();

function randomColor2() {
  const colorGenerate = document.getElementById('button-random-color');
  const randomGenerate = Math.floor(Math.random() * 16777215).toString(16);
  const secondColor = document.getElementById('color2');
  secondColor.style.backgroundColor = `#${randomGenerate}`;
  colorGenerate.addEventListener('click', randomColor2);
}
randomColor2();

function randomColor3() {
  const colorGenerate = document.getElementById('button-random-color');
  const randomGenerate = Math.floor(Math.random() * 16777215).toString(16);
  const thirdColor = document.getElementById('color3');
  thirdColor.style.backgroundColor = `#${randomGenerate}`;
  colorGenerate.addEventListener('click', randomColor3);
}
randomColor3();

function randomColor4() {
  const colorGenerate = document.getElementById('button-random-color');
  const randomGenerate = Math.floor(Math.random() * 16777215).toString(16);
  const fourthColor = document.getElementById('color4');
  fourthColor.style.backgroundColor = `#${randomGenerate}`;
  colorGenerate.addEventListener('click', randomColor4);
}
randomColor4();

// Requisito 6,7:

function pixels(numberPixels) {
  const getPixels = document.getElementById('pixel-board');
  for (let index = 0; index < numberPixels; index += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.id = index;
    div.style.border = '1px solid black';
    div.style.backgroundColor = 'white';
    div.style.width = '40px';
    div.style.height = '40px';
    getPixels.appendChild(div);
  }
}

pixels('25');

window.onload = function putSelected() {
  const firstColor = document.getElementById('color1');
  firstColor.classList.add('selected', 'color');
  firstColor.style.backgroundColor = 'black';
};

function changeClass() {
  const color = document.querySelector('#color-palette');
  color.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    selectedColor.className = 'color';
    event.target.className = 'color selected';
  });
}

changeClass();

function setPixels() {
  const pixelsBoard = document.getElementById('pixel-board');
  pixelsBoard.addEventListener('click', (event) => {
    const color = document.querySelector('.selected');
    event.target.style.backgroundColor = color.style.backgroundColor;
  });
}
setPixels(); // pinta os meus pixels;

function clearPixels() {
  const getButton = document.getElementById('clear-board');
  const getPixels = document.querySelectorAll('.pixel');
  const setNewColor = 'white';

  getButton.addEventListener('click', () => {
    for (let index = 0; index < getPixels.length; index += 1) {
      if (getPixels[index].style.backgroundColor !== setNewColor) {
        getPixels[index].style.backgroundColor = setNewColor;
      }
    }
  });
}
clearPixels();
