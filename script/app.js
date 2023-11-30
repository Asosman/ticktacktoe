const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let editedPlayer = 0;
let activePlayer = 0;
let currentRoound = 1;
let gameIsOver = false;
const players =[
    {
        name:'',
        score:'',
        symbol:'X'
    },
    {
        name:'',
        score:'',
        symbol:'O'
    }
]

const configOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorMessageElement = document.getElementById('config-error');
const gameBoardElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');
let score = document.querySelector('.player-score');

const editPlayer1btnElement = document.getElementById('edit-player-1-name');
const editPlayer2btnElement = document.getElementById('edit-player-2-name');
const cancelOverlayElement = document.getElementById('cancel-button');
const startGameButtonElement = document.getElementById('start-game-btn');
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardFieldElement = document.getElementById('game-board');

editPlayer1btnElement.addEventListener('click', openPlayerConfig );
editPlayer2btnElement.addEventListener('click', openPlayerConfig );

cancelOverlayElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startGameButtonElement.addEventListener('click', startNewGame);

// for(const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click',selectFieldElement);
// }
gameBoardFieldElement.addEventListener('click',selectFieldElement);









