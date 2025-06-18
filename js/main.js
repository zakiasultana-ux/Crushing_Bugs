console.log("JavaScript File is linked");

// variables 
const labels = document.querySelectorAll(".label");
const tragetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;

//functions 

function dragStart(){
    console.log("drag start");
    currentDraggedElement = this;
    console.log(currentDraggedElement);
}

function drageOver(event){
    console.log("drag");
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    this.appendChild(currentDraggedElement);
    currentDraggedElement = null;
}

// event listeners

labels.forEach(label => {
    label.addEventListener("dragstart",dragStart)
});

tragetZones.forEach(traget => {
    traget.addEventListener("dragover",drageOver);
    traget.addEventListener("drop",drop);
});