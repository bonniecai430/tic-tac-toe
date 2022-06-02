const tiles = document.querySelectorAll('.tile');
const PLAYER_X = 'X'
const PLAYER_O = 'O'
let turn = PLAYER_X

const boardState = Array(tiles.length)

boardState.fill(null);
// console.log(boardState)

//Elements
const strike =document.getElementById('strike')
const resetGame = document.getElementById('reset-game')
resetGame.addEventListener('click',startNewGame);


tiles.forEach((tile) => tile.addEventListener('click',tileClick))

function tileClick(event){
const tile = event.target;
const tileNumber = tile.dataset.index;
if(tile.innerText !==""){
    return;
}

if(turn ===PLAYER_X){
    tile.innerText=PLAYER_X
    boardState[tileNumber-1] = PLAYER_X
    turn = PLAYER_O
}
else{
    tile.innerText=PLAYER_O
    boardState[tileNumber-1]=PLAYER_O
    turn = PLAYER_X
}

}

function startNewGame(){
    boardState.fill(null);
    tiles.forEach((tile) => (tile.innerText=""));
    turn = PLAYER_X;

}