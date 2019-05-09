const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const clearButton = document.getElementById("jsClear");
const fillButton = document.getElementById("jsMode");
const colorButtons = document.getElementsByClassName("jsColorButton");
const range = document.getElementById("jsRange");
const initialColor = "##2c2c2c";
ctx.strokeStyle = initialColor;
ctx.fillStyle = initialColor;
canvas.width = 700;
canvas.height= 500;


ctx.lineWidth = 2.5;


let paint = false;
let fill = false;
function fillIn(){
    ctx.fillRect(0,0,canvas.width, canvas.height);
}
function stopPainting(){
    paint = false;
}
function startPainting() {
    paint = true;
}
function onFill(){
    if(fill){ fillIn();}
}
function onToggleFill(){
    fill = !fill;
    if(!fill){
        fillButton.innerText = "fill";
    }else{
        fillButton.innerText = "paint";
    }
}
function onToggleClear(){
    ctx.fillStyle ="#ffff";
    fillIn();
    fill = false;
}
function onMouseMove() {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!paint){
        ctx.beginPath();
        ctx.moveTo(x,y);

    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

if(fillButton){
    fillButton.addEventListener("click",onToggleFill);
}
if(clearButton){
    clearButton.addEventListener("click", onToggleClear );
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting );
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", onFill);

}


function handleColorClick(event){

    ctx.strokeStyle = event.target.style.backgroundColor;
    ctx.fillStyle = event.target.style.backgroundColor
}
function handleRangeInput(event){
    ctx.lineWidth = event.target.value;
}
if(range){
    range.addEventListener("input", handleRangeInput);
}
    Array.from(colorButtons).forEach(btn => btn.addEventListener("click", handleColorClick));

