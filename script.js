let sketch = document.querySelector("#sketch");
let size_input = document.querySelector("#size");
let set_size_button = document.querySelector("#set");

set_size_button.addEventListener("click",() => {
    grid_size = size_input.value;
    if(grid_size == ""){
        alert("PLEASE ENTER A VALUE!");
    }
    else if(grid_size < 5 || grid_size > 100){
        alert("PLEASE ENTER VALUE BETWEEN 5 AND 100 ONLY!");
    }
    else{
        createGrid(grid_size);
    }
})

function createGrid(size){
    sketch.style.gridTemplateColumns = `repeat(${size},1fr)`;
    sketch.style.gridTemplateColumns = `repeat(${size},1fr)`;
    let boxes = sketch.querySelectorAll("div");
    boxes.forEach((box) => box.remove());

    for(let i =0;i<size*size;i++){
        let div = document.createElement("div");
        div.style.border = "1px solid black";
        sketch.insertAdjacentElement("beforeend" , div);
    }
}