function resetGameStatus(){
    activePlayer = 0;
    currentRoound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHtml = '<h2>You won <span id="winner-player">PLAYERNAME</span>!</h2>';
    gameOverElement.style.display ='none';
    let gameBoardIndex = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            gameData[i][j] = 0;
         const gameBoardItems = gameBoardFieldElement.children[gameBoardIndex];
        //  console.log(gameBoardItems);
         gameBoardItems.innerText = ' ';
         gameBoardItems.classList.remove('disabled');
         gameBoardIndex++;
        }
    }
}
// console.log(gameBoardFieldElement);
function startNewGame(){
    
    if(players[0].name==='' || players[1]===''){
        alert('please enter a valid player details for both players');
        return;
    }
    resetGameStatus();
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameBoardElement.style.display = 'block';
}
function switchPlayer () {
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}
    

function selectFieldElement(event){
       if(event.target.tagName !== 'LI' || gameIsOver){
        return;
       }    
       const selectedField = event.target;
       const selectedColumn = selectedField.dataset.col - 1;
       const selectedRow = selectedField.dataset.row - 1;
      
       if(gameData[selectedRow][selectedColumn] > 0 ){
        alert('Please click on empty field');
        return;
       }

       selectedField.textContent = players[activePlayer].symbol;
       selectedField.classList.add('disabled');
       
       gameData[selectedRow][selectedColumn] = activePlayer + 1 ;
    const winnerId = checkWinneer();
    winnerRecords(winnerId);
    if(winnerId !== 0){
        endGame(winnerId);
    }
    currentRoound++;
   switchPlayer();
}

function checkWinneer(){
   for(let i = 0; i < 3; i++){
    if(
        gameData[i][0] > 0 &&
        gameData[i][0] === gameData[i][1] &&
        gameData[i][1] ===gameData[i][2]
    ){
       return gameData[i][0];
    }
}
 for(let i = 0; i<3; i++){
    if(
        gameData[0][i] > 0 &&
        gameData[0][i] === gameData[1][i] &&
        gameData[1][i] ===gameData[2][i]
    ){
       return gameData[0][i];
    }
 }
 if(
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] ===gameData[2][2]
){
   return gameData[0][0];
}
if(
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] ===gameData[2][0]
){
   return gameData[0][2];
}
if (currentRoound === 9 ){
    return -1;
}
return 0;
}
function winnerRecords(winnerId){
    if(winnerId > 0){
        let records = document.getElementById('player-'+ winnerId +'-data');
        let currentScore = records.children[3].innerText++;
        players[winnerId - 1 ].score = currentScore;
    }
   console.log(players);
}
function endGame(winnerId){
    gameIsOver = true;
    gameOverElement.style.display = 'block';
    if(winnerId > 0){
        const playerName = players[winnerId - 1].name;
        // console.log(playerName);
        // winnerRecords(winnerId);
        gameOverElement.firstElementChild.firstElementChild.textContent = playerName;
    }else {
        gameOverElement.firstElementChild.textContent = 'it\'s s Draw';
    }

}



 





