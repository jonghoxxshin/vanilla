const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const clearButtons = document.getElementById("jsClear");
const colorButtons = document.getElementsByClassName("jsColorButton");
const range = document.getElementById("jsRange");
ctx.strokeStyle = "##2c2c2c";
ctx.lineWidth = 2.5;

canvas.width = 700;
canvas.height= 500;

let paint = false;

function stopPainting(){
    paint = false;
}
function startPainting() {
    paint = true;
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


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting );
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);

}


function handleColorClick(event){
    console.log(event.target.style.backgroundColor);
    ctx.strokeStyle = event.target.style.backgroundColor;
}
function handleRangeInput(event){
    ctx.lineWidth = event.target.value;
}
if(range){
    range.addEventListener("input", handleRangeInput);
}
    Array.from(colorButtons).forEach(btn => btn.addEventListener("click", handleColorClick));

