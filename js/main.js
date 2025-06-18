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
     // Only allow drop if zone is empty
    if (this.children.length > 0) {
        console.log("This drop zone already has a label.");
        return;
    }
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