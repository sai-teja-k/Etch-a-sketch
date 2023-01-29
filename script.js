let sketch = document.querySelector("#sketch");
let size_input = document.querySelector("#size");
let set_size_button = document.querySelector("#set");
let reset = document.querySelector("#reset");

let color = "black";
let click = true;

reset.addEventListener("click",() => {
    let boxes = sketch.querySelectorAll("div");
    boxes.forEach((box) => box.style.background = "white");
})


set_size_button.addEventListener("click",() => {
    grid_size = size_input.value;
    if(grid_size == ""){
        alert("PLEASE ENTER A VALUE!");
    }
    else if(grid_size < 5 || grid_size > 100){
        alert("PLEASE ENTER VALUE FROM 5 AND 100 ONLY!");
    }
    else{
        createGrid(grid_size);
        document.querySelector("#mode").innerHTML = "MODE : Coloring!" ;
    }
})

function createGrid(size){
    sketch.style.gridTemplateColumns = `repeat(${size},1fr)`;
    sketch.style.gridTemplateColumns = `repeat(${size},1fr)`;
    let boxes = sketch.querySelectorAll("div");
    boxes.forEach((box) => box.remove());

    for(let i =0;i<size*size;i++){
        let div = document.createElement("div");
        sketch.insertAdjacentElement("beforeend" , div);
        div.addEventListener("mouseover",changeColor);
    }
}

function changeColor(){
    if(click){
        if(color === "rainbow")
            this.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        else
            this.style.background = color;
    }
};

function colorChoice(choice){
    color = choice ;
};

document.querySelector("#sketch").addEventListener("click" ,(e) => {
    if(e.target.tagName != "BUTTON"){
        click = !click;
        if(click){
            document.querySelector("#mode").innerHTML = "MODE : Coloring!" ;
        }
        else{
            document.querySelector("#mode").innerHTML = "MODE : Not Coloring!" ;
        }
    }
}); 