const container = document.querySelector("#Container");
const changeSizeButton = document.querySelector("#changeSizeButton");

GenerateGrid(10,10);

changeSizeButton.addEventListener("click", () => {
    const widthInput = document.querySelector("#width");
    const heightInput = document.querySelector("#height");
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
    
    while(container.firstChild) { 
        container.removeChild(container.firstChild); 
    } 
    //prompt("HELLOS");
    GenerateGrid(width, height);
})

//prompt("DONE");


function GenerateGrid(x, y){

    
    for(i =0; i< x;i++){
        const line = document.createElement("div");
        line.classList.add("line");
        container.appendChild(line);
        for(j=0;j<y;j++){
            const item = document.createElement("div");
            item.addEventListener("mouseover", ChangeColorOfBox);
            item.classList.add("box");
            line.appendChild(item);
        }
    }
}

function ChangeColorOfBox(event){
    event.target.style.backgroundColor = "yellow";
}