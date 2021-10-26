function computerPlay() {
    let hand = ['Rock', 'Paper', 'Scissors'];
    return hand[Math.floor(Math.random() * 3)];
};

function game() {
    /*  Inicialize variables*/
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    /* Game set plays 5 times*/
    for (let i=1; i<6; i++) {
        let playerSelection = window.prompt("Rock, Paper, or Scissors");
        let computerSelection = computerPlay();
        let resultado = playRound(playerSelection, computerSelection);

        /*  Print hands */
        console.log("Computer:" + computerSelection);
        console.log("Player:" + playerSelection);

        /*  Who won the game?  and count score*/
        if (resultado.includes("win")){
            playerScore +=1;
        } else if (resultado.includes("lose")){
            computerScore +=1;
        } else {
            tieScore +=1;
        };
    };
    printFinalScore(playerScore,computerScore, tieScore)
};

function printFinalScore(_playerScore, _computerScore, _tieScore) {
    if (_playerScore > _computerScore) {
        console.log("You won! the set, Your score:" + _playerScore + " Computer score:" + _computerScore);
    } else if (_playerScore < _computerScore) {
        console.log("You lost! the set, Your score:" + _playerScore + " Computer score:"+ _computerScore);
    } else {
        console.log("This is a tie! Your score:"+_playerScore + " Computer score:"+ _computerScore);
    };
    if (_tieScore > 0) {
        console.log("There was " + _tieScore +" tie games");
    };
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'PAPER') {
        switch (computerSelection.toUpperCase()) {
            case "ROCK":
                return "You win! Paper beats Rock";
            case "PAPER":
                return "That's a tie!";
            case "SCISSORS":
                return "You lose! Scissors beat Paper";
            default:
                return "Not a good option!, Try Again";
        }
    }
    else if (playerSelection.toUpperCase() === 'ROCK')  {
        switch (computerSelection.toUpperCase()) {
            case "ROCK":
                return "That's a tie! Rock against Rock";
            case "PAPER":
                return "You lose Paper beats Rock";
            case "SCISSORS":
                return "You win  Rock beats Scissors";
            default:
                return "Not a good option! Try Again";
        }

    }
    else if (playerSelection.toUpperCase() === 'SCISSORS')  {
        switch (computerSelection.toUpperCase()) {
            case "SCISSORS":
                return "That's a tie! Scissors against Scissors";
            case "ROCK":
                return "You lose!! Rock beats Scissors";
            case "PAPER":
                return "You win!! Scissors beats Paper ";
            default:
                return "Not a good option! Try Again";
        }    
    }
    else {
        return "Player:" + playerSelection.toUpperCase() + " " + "Computer:" + computerSelection.toUpperCase()
    };
}

game();



