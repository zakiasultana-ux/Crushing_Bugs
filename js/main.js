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
    // Remove highlight when item is dropped
    this.classList.remove("highlight");
     // Only allow drop if zone is empty
    if (this.children.length > 0) {
        console.log("This drop zone already has a label.");
        return;
    }
    this.appendChild(currentDraggedElement);
    currentDraggedElement = null;
}

function resetGame() {
    console.log("Reset Game Called");
    
    targetZones.forEach(zone => {
        while (zone.firstChild) {
            zone.removeChild(zone.firstChild);
        }
    });
    labels.forEach(label => {
        document.body.appendChild(label);
        // Move all labels from target zones back to label box
        if (label) {
            labelBox.appendChild(label);
        }
    });
    currentDraggedElement = null;
}

// function for highlight the target zone when dragging over it

function dragEnter(event) {
    event.preventDefault();
    this.classList.add("highlight");
}

function dragLeave() {
    this.classList.remove("highlight");
}

// event listeners

labels.forEach(label => {
    label.addEventListener("dragstart",dragStart)
});

tragetZones.forEach(traget => {
    traget.addEventListener("dragover",drageOver);
    traget.addEventListener("drop",drop);
    // Add event listeners for highlighting
    target.addEventListener("dragenter", dragEnter);
    target.addEventListener("dragleave", dragLeave);
});

resetBtn.addEventListener("click", resetGame);