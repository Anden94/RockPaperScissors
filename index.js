

let playerScore =0;
let computerScore =0;

    userValue();

    function playRound(player, computer) {
        if(player == "Rock"){
            if(computer == "Rock"){
                //alert("It's a draw!");
            }
            if(computer == "Paper"){
                //alert("You loose!");
                computerScore++;
                document.getElementById("computer-score").innerHTML = computerScore;
            }
            if(computer == "Scissor"){
                //alert("You win!");
                playerScore++;
                document.getElementById("player-score").innerHTML = playerScore;
            }            
        }
        if(player == "Paper"){
            if(computer == "Paper"){
                //alert("It's a draw!");
            }
            if(computer == "Rock"){
                //alert("You win!");
                playerScore++;
                document.getElementById("player-score").innerHTML = playerScore;
            }
            if(computer == "Scissor"){
                //alert("You loose!");
                computerScore++;
                document.getElementById("computer-score").innerHTML = computerScore;
            }            
        }
        if(player == "Scissor"){
            if(computer == "Scissor"){
                //alert("It's a draw!");
            }
            if(computer == "Rock"){
                //alert("You loose!");
                computerScore++;
                document.getElementById("computer-score").innerHTML = computerScore;
            }
            if(computer == "Paper"){
                //alert("You win!");
                playerScore++;
                document.getElementById("player-score").innerHTML = playerScore;
            }            
        }   
        console.log(playerScore, computerScore)           
        if(playerScore == 5){
            //console.log("You win the game!!");
            playerScore =0;
            computerScore =0;
            document.getElementById("player-score").innerHTML = 0;
            document.getElementById("computer-score").innerHTML = 0;
            
        }  
        if(computerScore == 5){
            //console.log("You lose the game!");
            playerScore =0;
            computerScore =0;
            document.getElementById("player-score").innerHTML = 0;
            document.getElementById("computer-score").innerHTML = 0;
            
        }  
    }

    

    function computerPlay(){ //datorns gissning
        var items = ['Rock', 'Paper', 'Scissor'];
        var item = items[Math.floor(Math.random() * items.length)];
        console.log("Computer has " + item);
        document.getElementById('computer-result').innerHTML = item;
        return item;                      
    }

    function userValue(){
        $("button").click(function() {
            const answer = this.innerHTML;
            console.log("Player has " + answer);      
            document.getElementById('player-result').innerHTML = answer;     
            playRound(answer, computerPlay());
        });
    }
    



    