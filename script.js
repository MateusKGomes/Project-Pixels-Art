
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
}
buttonColor();

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
    color4.style.backgroundColor = "#" + randomGenerate;
    colorGenerate.addEventListener("click", randomColor4);
    
}
randomColor4();

// // Requisito 6:

function pixels (){
   let getPixels = document.getElementById('pixel-board');
   for(let index = 0; index <25; index += 1){
    let createDiv = document.createElement('div');
    createDiv.classList.add('pixel');
    createDiv.id = index; 
    createDiv.style.border = '1px solid black';
    createDiv.style.backgroundColor = 'white'
    createDiv.style.width = '70px'
    createDiv.style.height = '60px'
    getPixels.appendChild(createDiv);
   }
}

pixels();
