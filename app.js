
document.getElementById('rock').onclick = function() {
  playGame('rock');
};

document.getElementById('paper').onclick = function() {
  playGame('paper');
};

document.getElementById('scissors').onclick = function() {
  playGame('scissors');
};

function playGame(playerChoice) {
  // computer chooses a random move
  var computer = ['scissors', 'rock', 'paper']
  var computerChoice =computer[Math.floor(Math.random() * 3)];

  // determine the result
  var result;
  if (playerChoice == computerChoice) {
    result = 'Tie';
  } else if (
    (playerChoice == 'rock' && computerChoice == 'scissors') ||
    (playerChoice == 'paper' && computerChoice == 'rock') ||
    (playerChoice == 'scissors' && computerChoice == 'paper')
  ) {
    result = 'You win';
  } else {
    result = 'You lose';
  }

  // display the result
  document.getElementById('result').innerHTML = result;
  document.getElementById('computer').innerHTML = computerChoice;

}
