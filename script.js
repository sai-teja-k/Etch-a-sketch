let sketch = document.querySelector("#sketch");
let size = document.querySelector("#size");
let set_size = document.querySelector("#set");

set_size.addEventListener("click",() => {
    grid_size = size.value;
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

    for(let i =0;i<size*size;i++){
        let div = document.createElement("div");
        div.style.border = "1px solid black";
        sketch.insertAdjacentElement("beforeend" , div);
    }
}