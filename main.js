const input = document.getElementsByTagName("input")[2]
const label_input = document.getElementById("label_input")
const blocks = document.getElementById("blocks")
const front_color= document.getElementById("front_color")
const backgroundColor = document.getElementById("background_color")
let shading = false

function createContainer(){
    const container = document.createElement("div")
    container.classList.add("container")
    blocks.insertBefore(container, label_input.nextSibling)
    return container
}

function shadowToggle(){
    return shading ? shading = false : shading = true
}

function sha(bolean){
    const btnShadow = document.getElementById("btnShadow")
    if (bolean){
        btnShadow.style.backgroundColor = "black"
        btnShadow.style.color = "white"}
    else{
        btnShadow.style.backgroundColor = "blueviolet"
        btnShadow.style.color = "black"}
}



function createDivs(container,numbGrid = 16){
    label_input.innerText = `${numbGrid}X${numbGrid}`
    for (let i = 0; i < numbGrid  ; i++) {
        const divRow = document.createElement("div")
        divRow.classList.add("divRow")
        container.appendChild(divRow)
        for (let j = 0; j < numbGrid; j++) {    
            const divCell = document.createElement("div")
            divCell.style.backgroundColor = backgroundColor.value
            divCell.onmouseover = function() { 
                divCell.style.backgroundColor = front_color.value
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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColor(color){
    changeBackGrounColor(color)
    changeFrontColor()
}

function changeBackGrounColor(color = backgroundColor.value){
    let divCell = document.getElementsByClassName("divCell")
    for (let i = 0; i < divCell.length; i++) {  
        divCell[i].style.backgroundColor = color;    
    }
    backgroundColor.value = color
}

function changeFrontColor(){
    front_color.value = getRandomColor()
}

input.addEventListener("keypress", ()=>{
    if (event.key === "Enter") {  
        document.getElementsByClassName("container")[0].remove()  
        createDivs(createContainer(), input.value)
    }  
})

backgroundColor.addEventListener("input",()=> changeBackGrounColor())

createDivs(createContainer(),)