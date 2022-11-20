
//name, rank, lp

fetch('https://americas.api.riotgames.com/lor/ranked/v1/leaderboards?api_key=RGAPI-3189b15c-8e7a-4ddd-81b3-7729524980bc')
  .then((response) => {
     if (response.ok){
    return response.json();
  } else{
    throw new Error('Network Response error');
  }
})
  .then(data => {
    console.log(data);
    displayLeader(data)
})
.catch((error) => console.error('fetch eorr:', error))

//data
function displayLeader(data){
    let displayPlayers =  data.players[0];
    let displayDiv = document.getElementById('leaderboard');
    let displayDivRank =document.getElementById('rank')

//name
let playerName = displayPlayers.name 
let leaderBoard = document.createElement('h1');
leaderBoard.innerHTML= playerName;
displayDiv.appendChild(leaderBoard);
//rank
let playerRank =`Rank #: ${displayPlayers.rank}`
let leaderContent = document.createElement('p');
leaderContent.innerHTML=playerRank;
displayDivRank.appendChild(leaderContent)

let playerlp = `lp: ${displayPlayers.lp}`
let leaderlp = document.createElement('p');
leaderlp.innerHTML=playerlp;
displayDivRank.appendChild(leaderlp)


var player =document.createElement('h3')
var currentPlayerContainer = document.getElementById('current-player');
player.textContent='User Name';
currentPlayerContainer.appendChild(player)

var playerData = data.players
var playerPosition =data.rank

for(let i=1; i<10; i++){
    var currentPlayer = document.createElement('p');
    currentPlayer.textContent = `Rank: ${playerData[i].rank} User: ${playerData[i].name} lp:${playerData[i].lp}`
    currentPlayerContainer.appendChild(currentPlayer)
    
    
}
}

