const container = document.querySelector(".canvas");
const sizeLabel = document.querySelector(".sizeLabel");
const sizeSlider = document.querySelector(".sizeSlider");
const colorPicker = document.querySelector(".picker")
const buttonList = [...document.querySelectorAll(".navbar-buttons li button")];

const clearBtn = document.querySelector(".clearBtn")
const colorBtn = document.querySelector(".colorBtn")
const rainbowBtn = document.querySelector(".rainbowBtn")
const eraserBtn = document.querySelector(".eraserBtn")

let CurrentSize = sizeSlider.value //Default value is 10 on page load
let current_mode = "colorBtn"

sizeSlider.addEventListener("change", updateGrid);
clearBtn.addEventListener("click", updateGrid)
rainbowBtn.addEventListener("click", () => {current_mode = rainbowBtn.className});
colorBtn.addEventListener("click", () => {current_mode = colorBtn.className});
eraserBtn.addEventListener("click", () => {current_mode = eraserBtn.className, console.log(eraserBtn.className)})

//call the default grid on page load
defaultGrid()

//set the default grid to be 10 x 10
function defaultGrid() {
    createGrid(10);
}


//update the grid to match the value of the slider, call the remove grid function to remove the grid and then update with new grid
// Update the label with the selected grid size as the slider is adjusted
function updateGrid() {
    const newSize = sizeSlider.value;
    if (newSize !== CurrentSize) {
        removeGrid();
        createGrid(newSize);
        CurrentSize = newSize;
        sizeLabel.textContent = `${newSize} x ${newSize}`
    }
    else { // This is for the clear grid button
        removeGrid();
        createGrid(newSize);
    }
}

// Nested for loop, create rows equal to value provider, then append equal columns to each row. 
function createGrid(size) {
for (let i = 0; i < size; i++) {
    const rows = document.createElement("div")
    rows.setAttribute("class", "rows")
    rows.textContent = "";
    container.appendChild(rows);

    for (j=0; j < size; j++) {
        const column = document.createElement("div");
        column.setAttribute("class", "column")
        column.textContent = "";
        rows.appendChild(column);
        column.addEventListener("mouseover", changeColor)
    }
  }
};

//remove child divs from container to reset size
function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

//set background colour of 'this' div to color picker value
function changeColor()  {
    if (current_mode === "rainbowBtn") {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
        console.log("rainbows")
    }
    else if (current_mode === "eraserBtn") {
        this.style.backgroundColor = "#FFFFFF"
    }
    else {    
    this.style.backgroundColor = colorPicker.value;
    }

}

//for each button in the button list, attach an event listener, checking for when a button is clicked
// then for each of these buttons check if it's the clicked button, if so assign the ID
// if it isn't, set the ID to blank
buttonList.forEach(button => {
    button.addEventListener("click", () => {
        buttonList.forEach(btn => {
            if (btn === button) {
                btn.setAttribute("id", "button-selected")
            } else {
                btn.setAttribute("id", "")
            }
        });
    });
});







