function computerPlay() {
    const randomOneThree = Math.floor(Math.random()*3);
    const computerChoices = ["rock", "paper", "scissors"];
    let = computerChosen = computerChoices[randomOneThree].toLowerCase();
    return computerChosen;
}

function playRound(playerSelection, computerSelection) {
    //Convert both strings to lower case in case of text formatting. temp-safety. Will probably be removed
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let winner = 0;

    //check if the input is actually rock, paper, scissors or something else
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        
        

        //If the selections are the same. Winner is set to 0 = draw.
        if (computerSelection === playerSelection) {

        winner = 0;
        }

        else {
            //decides winner and sets the winner variable as 1 = computer wins or 2 = player wins.
            switch (playerSelection) {
                 case "rock":
                
                     if (computerSelection === "paper"){ 
                        winner = 1;
                     }

                     else {
                        winner = 2;
                     }
                break;

                case "paper":
                
                    if (computerSelection === "scissors"){ 
                        winner = 1;
                      }

                    else {
                        winner = 2;
                    }
                break;

                case "scissors":
                
                    if (computerSelection === "rock"){ 
                        winner = 1;
                        }
                    else {
                        winner = 2;
                    }
            }
        }
        
        //decides what the function should return based on the winner of the round. 
        switch (winner) {
            case 0:
                console.log("You drew. You both answered " + playerSelection);
                return winner;
            break;
    
            case 1:
                console.log("You lose. "+ computerSelection + " beats " + playerSelection);
                return winner
            break;
            
            case 2:
                console.log("You win. " + playerSelection + " beats " + computerSelection);
                return winner;
        }
    
    }
    // returns 1 from the function = computerWin because user inputted a non-RPS-alternative.
    else {
        winner = 1;
        console.log("Computer given win becuase you inputed " + playerSelection +".");
        return winner;
    }
}

function game() {
    let playerWon = 0;
    let computerWon = 0;
    let draws = 0;
    let gamesCount = 5;

    // loops as many times as gamesCount allows for so that one can manipulate how many rounds that are to be played. 
    for (let index = 0; index < gamesCount; index++) {
        let playerSelect = prompt().toString();
        let computerSelect = computerPlay();
        let roundWinner = 0;
        playerSelect = playerSelect.toLowerCase();
          
            roundWinner = playRound(playerSelect, computerSelect);
        
            switch(roundWinner) {
                case 0:
                    draws++;
                break;

                case 1:
                    computerWon++;
                break;

                case 2:
                    playerWon++;
        }
    }

    if (playerWon === computerWon) {
        console.log("After 5 played games it's a draw")
    }
    else if (playerWon > computerWon) {
        console.log("Player wins with " + playerWon + " games to " + computerWon)
    }
    else {
        console.log("Computer wins with " + computerWon + " games to " + playerWon)
    }

}
