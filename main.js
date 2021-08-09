let boxes = Array.from(document.getElementsByClassName("box"))
console.log(boxes)
let playText = document.getElementById("playText")
const p1 = "X"
const p2 = "O"
let botBtn = document.getElementById("botBtn")
const restartBtn = document.getElementById("restart")
let currentPlayer;
let spaces = [];

function drawBoard(){
    boxes.forEach((box) => {
        box.addEventListener("click", boxClicked)
    })
}
function boxClicked(e){
    const id = e.target.id
    console.log(id)
    if(!spaces[id]){
        spaces[id]= currentPlayer
        e.target.innerText = currentPlayer
        if(playerHasWon()){
            playText.innerText = `${currentPlayer} has won!`
        }
        currentPlayer = currentPlayer === p1 ? p2 : p1
        

        
    }
    
}
restartBtn.addEventListener("click", restart)
function restart(){
    spaces.forEach((space , index)=>{
        spaces[index] = null
    })
    boxes.forEach((box)=>{
        box.innerText = "";
    })
    playText.innerText = `Let's Play`;
    currentPlayer = p1;

}
function playerHasWon(){
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            console.log(`${currentPlayer} has won up top`)
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} has won on left`)
            return true;
        }
        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} has won diagnolly`)
            return true;
        }
    }
    if(spaces[8] === currentPlayer){
        if(spaces[7] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} has won down bottom`)
            return true;
        }
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} has won on the right`)
            return true;
        }
    }
    if(spaces[4] === currentPlayer){
        if(spaces[3] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} has won going across the middle`)
            return true;
        }
        if(spaces[1] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} has won on going down middle`)
            return true;
        }
        if(spaces[2] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} has won diagnolly`)
            return true;
        }
    }
}
restart();
drawBoard();
