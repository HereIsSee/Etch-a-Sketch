const container = document.querySelector("#Container");
GenerateGrid(10,10);
//prompt("DONE");


function GenerateGrid(x, y){

    for(i =0; i< x;i++){
        const line = document.createElement("div");
        line.classList.add("line");
        container.appendChild(line);
        for(j=0;j<y;j++){
            const item = document.createElement("div");
            // item.addEventListener("hover", () =>{changeColor(name)})
            item.classList.add("box");
            line.appendChild(item);
        }
    }
}