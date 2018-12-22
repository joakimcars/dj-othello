window.onload = render

let playerTurn = "white";

function renderBoard() {
    const container = document.createElement('div')
    container.classList.add('board')

    
    function getColor(x, y) {
       return state[y*8 + x]
    }

    for(let y = 0; y < 8; ++y) {
        const row = document.createElement('div')
        row.classList.add('boardRow')        
        for(let x = 0; x < 8; ++x) {
            const square = document.createElement('div')
            
            square.classList.add('square')

            const color = getColor(x, y)
            if(color) {
                const piece = document.createElement('div')
                piece.classList.add(color === 'black' ? 'blackBrick' : 'whiteBrick')
                square.appendChild(piece)
            }
            square.onclick = () => {
                setState(x, y, playerTurn)
            }
            row.appendChild(square)
        }
        container.appendChild(row)
    }
    return container
}

const state = Array.from({ length: 64 }).fill(0)


function setState(x, y, s) {
    state[y*8 + x] = s
    render()
    playerTurn = (playerTurn == "white") ? "black" : "white";
}

function render() {
    const root = document.getElementById('root')
    const newBoard = renderBoard()
    clear(root)
    root.appendChild(newBoard)
}

function clear(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }    
}

function handleMove (squareId) {
    alert(squareId);
}