function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    configOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';

}
function closePlayerConfig(){
    configOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorMessageElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();
    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
        errorMessageElement.innerText = 'Please enter a valid Name';
        return;
    }
  const editedPlayerData = document.getElementById('player-'+ editedPlayer +'-data');
  editedPlayerData.children[1].textContent = enteredPlayerName;
   
  players[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
}