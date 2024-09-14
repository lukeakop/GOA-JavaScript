const playerScoreP = document.getElementById('player-score')
const pcScoreP = document.getElementById('PC-score')
const winP = document.getElementById('win')
const buttonsDiv = document.getElementById('buttons')

const choices = [
  'rock', 'paper', 'scissors'
];

let playerScore = 0;
let pcScore = 0;


buttonsDiv.addEventListener('click', function(e){
  
  const buttonId = e.target.id

  const pcChoice = Math.floor(Math.random() * choices.length);

  if(buttonId === pcChoice){
    winP.textContent == "Its a tie!"
  } else if((buttonId === 'rock' && pcChoice === 'paper') ||

   (buttonId === 'scissors' && pcChoice === 'rock') ||

   (buttonId === 'paper' && pcChoice === 'scissor')){

    pcScore++;
    pcScoreP.textContent = pcScore;
    winP.textContent = "You lost!";

  } 
    else{
    playerScore++;
    playerScoreP.textContent = playerScore;
    winP.textContent = "You won!"
  }

  
});
