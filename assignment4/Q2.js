// Original function - do not change
function createDiv(width, height, text) {
    let container = document.getElementById('container');
    let div = document.createElement('div');
    div.innerText = text;
    div.style.width = width + "px";
    div.style.height = height + "px";
    container.appendChild(div);
}

// Do not change this code
createDiv(200, 200, "I am a new added div");
Window.createDiv = createDiv;

// Additional function to add div with background color on button click
const colors = ["gray", "blue", "green", "purple", "orange"];
let colorIndex = 0;

function createRandomDiv() {
    let text = "New Div " + (colorIndex + 1);
    createDiv(200, 100, text);
    let container = document.getElementById('container');
    let lastDiv = container.lastElementChild;
    lastDiv.style.backgroundColor = colors[colorIndex % colors.length];
    colorIndex++;
}
