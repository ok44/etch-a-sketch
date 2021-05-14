// declares buttons as DOM 
const clearButton = document.querySelector('#clear')
const changeGridSizeButton = document.querySelector('#changeSize')
const container = document.querySelector('#container')
let counter = 0
let rows = []
let pickSize = null

// draw and delete grid functions
function drawGrid(size) {
    for (let i = 1; i<=size; i++) {
        for (let j = 1; j<=size; j++) {
            rows[i] = document.createElement('div') 
            counter += 1
            container.appendChild(rows[i])
            let cellWidth = 1600/size
            rows[i].style.display = 'inline-block'
            rows[i].style.width = `${cellWidth}px`
            rows[i].style.height = `${cellWidth}px`
            rows[i].className = 'mydiv'
            rows[i].textContent = `${i}` 
        }
    } 
} 

function deleteGrid(size) {
    tobedeleted = document.getElementsByClassName('mydiv')
    while (tobedeleted[0]) {
        container.removeChild(tobedeleted[0])
    }
}

// turn black event listener
function addTurnBlackEvent() {
    const turnBlackEvent = document.querySelectorAll('.mydiv')
    const turnBlackEventLength = turnBlackEvent.length
    for (let k=0; k<turnBlackEventLength; k++) {
        turnBlackEvent[k].addEventListener('mouseover', function(){
            turnBlackEvent[k].classList.add('blackdiv')
        })
    }
}

// draws first default grid size of 16
if (pickSize == null) {
    pickSize = 16
    drawGrid(pickSize)
    addTurnBlackEvent()
}

// change grid size
changeGridSizeButton.addEventListener('click', function() {
    let size = prompt('What size would you like?')
    if (size > 100) {
        alert('Size exceeds limit of 100. Default of 16 will be drawn instead')
        size = 16
    }
    deleteGrid(size)
    drawGrid(size)
    addTurnBlackEvent() 
})

// clear grid
clearButton.addEventListener('click', function() {
    console.log('hello')
    deleteGrid(pickSize)
    drawGrid(pickSize)
    addTurnBlackEvent()
    console.log('done')
})
