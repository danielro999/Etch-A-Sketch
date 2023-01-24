const input = document.getElementsByTagName("input")[0]
const label_input = document.getElementById("label_input")
const blocks = document.getElementById("blocks")

function createContainer(){
    const container = document.createElement("div")
    container.classList.add("container")
    blocks.insertBefore(container, label_input.nextSibling)
    return container
}

function createDivs(container,numbGrid = 16){
    label_input.innerText = `${numbGrid} X ${numbGrid}`
    for (let i = 0; i < numbGrid  ; i++) {
        const divRow = document.createElement("div")
        divRow.classList.add("divRow")
        container.appendChild(divRow)
        for (let j = 0; j < numbGrid; j++) {    
            const divCell = document.createElement("div")
            divCell.onmouseover = function() { 
                divCell.style.backgroundColor = "yellow"
                divCell.style.transition = "0.5s"
            };
            divCell.classList.add("divCell")
            divRow.appendChild(divCell)
        }
    }
}

function reset(){
    document.getElementsByClassName("container")[0].remove()  
    createDivs(createContainer(),input.value)
}

input.addEventListener("keypress", ()=>{
    if (event.key === "Enter") {  
        document.getElementsByClassName("container")[0].remove()  
        createDivs(createContainer(), input.value)
    }  
})

createDivs(createContainer(),)
