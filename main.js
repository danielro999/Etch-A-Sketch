const input = document.getElementsByTagName("input")[0]

function createContainer(){
    const container = document.createElement("div")
    const script = document.body.getElementsByTagName("script")[0]
    container.classList.add("container")
    document.body.insertBefore(container, script)
    return container
}

function createDivs(container,numbGrid=16){
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

input.addEventListener("keypress", ()=>{
    if (event.key === "Enter") {  
        document.getElementsByClassName("container")[0].remove()  
        createDivs(createContainer(), input.value)
    }  
})

createDivs(createContainer(),)
