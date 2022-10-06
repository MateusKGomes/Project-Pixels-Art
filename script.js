
// Requisito 1 e 2:
function createDiv () {
let colorPallet = document.getElementById('color-palette');
colorPallet.style.height = '1px';
for (let index = 1; index <=4; index += 1){
    let div = document.createElement('div');
    div.className = 'color'
    div.setAttribute('id', 'color' + index);
    div.style.backgroundColor;
    div.style.float = 'left';
    div.style.height = '20px';
    div.style.border = "1px solid black" ;
    div.style.marginLeft = '20px';
    div.style.width = '100px';
    colorPallet.appendChild(div);
   
}
}
createDiv();
// Requisito 3:
function color1 (color) {
    let border = document.getElementById('color1');
    border.style.backgroundColor = color;

}
color1('black');

function color2 (color) {
    let border = document.getElementById('color2');
    border.style.backgroundColor = color;

}
color2('blue');
function color3 (color) {
    let border = document.getElementById('color3');
    border.style.backgroundColor = color;

}
color3('green');

function color4 (color) {
    let border = document.getElementById('color4');
    border.style.backgroundColor = color;
    

}
color4('red');

function buttonColor () {
 let randomButton = document.createElement('button');
    randomButton.id = 'button-random-color';
    randomButton.innerHTML = 'Cores aleatórias';
    document.body.appendChild(randomButton);
    randomButton.style.backgroundColor= 'black';
    randomButton.style.color = 'white';
}
buttonColor();

function clearButton (){
  let createButton = document.createElement('button');
  createButton.id = 'clear-board';
  createButton.innerHTML = 'Limpar';
  document.body.appendChild(createButton);
  createButton.style.marginTop = '30px';
  createButton.style.backgroundColor = 'black'
  createButton.style.color = 'white';


}
clearButton();


function randomColor2 (){
let colorGenerate = document.getElementById('button-random-color');
randomGenerate =  Math.floor(Math.random()*16777215).toString(16);
let color2 = document.getElementById('color2');
color2.style.backgroundColor = "#" + randomGenerate;
colorGenerate.addEventListener("click", randomColor2);

}
randomColor2();

function randomColor3 (){
let colorGenerate = document.getElementById('button-random-color');
randomGenerate =  Math.floor(Math.random()*16777215).toString(16);
let color3 = document.getElementById('color3');
color3.style.backgroundColor = "#" + randomGenerate;
colorGenerate.addEventListener("click", randomColor3);

}
randomColor3();


function randomColor4 (){
    let colorGenerate = document.getElementById('button-random-color');
    randomGenerate =  Math.floor(Math.random()*16777215).toString(16);
    let color4 = document.getElementById('color4');
    color4.style.backgroundColor =  `#${randomGenerate}`;
    colorGenerate.addEventListener("click", randomColor4);
    
}
randomColor4();

// function colorStorage(){
//     let getColor = document.getElementById('color1');
//     let backGround = getColor.style.backgroundColor;
//     localStorage.setItem(backGround);

// }
// colorStorage();
// Requisito 6,7:

function pixels (numberPixels){
   let getPixels = document.getElementById('pixel-board');
   for(let index = 0; index < numberPixels; index += 1){
    let createDiv = document.createElement('div');
    createDiv.classList.add('pixel');
    createDiv.id = index; 
    createDiv.style.border = '1px solid black';
    createDiv.style.backgroundColor = 'white'
    createDiv.style.width = '40px'
    createDiv.style.height = '40px'
    getPixels.appendChild(createDiv);
   }
}

pixels('25');

window.onload = function () {
    let color1 = document.getElementById('color1');
    color1.classList.add('selected', 'color');
    color1.style.backgroundColor = 'black'
}

// function getColors() {
//     let paintPixels = document.querySelector('#color-palette');
//         paintPixels.addEventListener('click', function (event){
//         event.target.classList = 'color selected';
//         })
//     }
    // getColors();

    function changeClass (){
      let color = document.querySelector('#color-palette');
          color.addEventListener('click', function(event) {
            let selectedColor = document.querySelector('.selected');
            selectedColor.className = 'color';
            event.target.className =  'color selected';
        })
      }
  
changeClass(); 

// function changeClass (){
//   let selectedColor = document.getElementsByClassName('color selected');
//   let color = document.querySelector('#color-palette');
//   color.addEventListener('click', function(event) {
//     if (selectedColor.length === 1) {
//       event.target.classList = 'color';
//     }else if (selectedColor.length > 1){
//       event.target.classList.remove('selected');
//     }else if(selectedColor.length === 0){
//       event.target.classList = 'color selected';
//     }else {
//       event.target.classList = 'color'
//     }
//   })   

function setPixels (){
    let pixels = document.getElementById('pixel-board');
    pixels.addEventListener('click', function (event){
        let color = document.querySelector('.selected');
        event.target.style.backgroundColor = color.style.backgroundColor;
})
}
setPixels(); // pinta os meus pixels;

function clearPixels (){
  let getButton = document.getElementById('clear-board');
  let getPixels = document.querySelectorAll('.pixel');
  let setNewColor = 'white';
  
  getButton.addEventListener('click', function (event) {
    for(let index = 0; index < getPixels.length; index += 1){
      if(getPixels[index].style.backgroundColor !==  setNewColor){
        getPixels[index].style.backgroundColor = setNewColor;
      }
    }
    })
  }
  
clearPixels();