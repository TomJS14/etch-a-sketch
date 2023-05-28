const container = document.querySelector(".grid")


function setGrid() {
for (i = 0; i < 10; i++) {
    const rows = document.createElement("div")
    rows.setAttribute("class", "rows")
    rows.textContent = "";
    container.appendChild(rows);
    for (j=0; j < 10; j++) {
        const column = document.createElement("div");
        column.setAttribute("class", "column")
        column.textContent = "";
        rows.appendChild(column);
        column.addEventListener("mouseover", changeColor)
    }}};

setGrid()

function changeColor()  {
    selected = document.querySelector("picker")
    this.style.backgroundColor = "blue"

}







