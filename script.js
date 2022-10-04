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

function color1 () {
    let border = document.getElementById('color1');
    border.style.backgroundColor = 'black';

}
color1();

function color2 () {
    let border = document.getElementById('color2');
    border.style.backgroundColor = 'blue';

}
color2();
function color3 () {
    let border = document.getElementById('color3');
    border.style.backgroundColor = 'green';

}
color3();

function color4 () {
    let border = document.getElementById('color4');
    border.style.backgroundColor = 'salmon';

}
color4();
