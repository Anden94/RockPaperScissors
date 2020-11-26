let playerScore =0;
let computerScore =0;



userValue();

function playRound(player, computer) {
        if(player == "Rock"){
            if(computer == "Rock"){
                document.getElementById("conclusion").innerHTML = "It's a draw";
            }
            if(computer == "Paper"){
                document.getElementById("conclusion").innerHTML = "You lost";
                computerScore++;
                document.getElementById("computer-score").innerHTML = computerScore;
            }
            if(computer == "Scissor"){
                document.getElementById("conclusion").innerHTML = "You won";
                playerScore++;
                document.getElementById("player-score").innerHTML = playerScore;
            }            
        }
        if(player == "Paper"){
            if(computer == "Paper"){
                document.getElementById("conclusion").innerHTML = "It's a draw";
            }
            if(computer == "Rock"){
                document.getElementById("conclusion").innerHTML = "You won";
                playerScore++;
                document.getElementById("player-score").innerHTML = playerScore;
            }
            if(computer == "Scissor"){
                document.getElementById("conclusion").innerHTML = "You lost";
                computerScore++;
                document.getElementById("computer-score").innerHTML = computerScore;
            }            
        }
        if(player == "Scissor"){
            if(computer == "Scissor"){
                document.getElementById("conclusion").innerHTML = "It's a draw";
            }
            if(computer == "Rock"){
                document.getElementById("conclusion").innerHTML = "You lost";
                computerScore++;
                document.getElementById("computer-score").innerHTML = computerScore;
            }
            if(computer == "Paper"){
                document.getElementById("conclusion").innerHTML = "You won";
                playerScore++;
                document.getElementById("player-score").innerHTML = playerScore;
            }            
        }   
        console.log(playerScore, computerScore)           
        if(playerScore == 5){
            document.getElementById("conclusion").innerHTML = "You won the game";
            playerScore =0;
            computerScore =0;
            $('.btn-background-slide').prop('disabled', true);
            
            
        }  
        if(computerScore == 5){
            document.getElementById("conclusion").innerHTML = "You lost the game";
            playerScore =0;
            computerScore =0;
            $('.btn-background-slide').prop('disabled', true);
            
            
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
        $(".btn-background-slide").click(function() {
            const answer = this.innerHTML;
            console.log("Player has " + answer);      
            document.getElementById('player-result').innerHTML = answer;     
            playRound(answer, computerPlay());
        });
    }

    function resetMatch(){
        $('.btn-background-slide').prop('disabled', false);
        document.getElementById("conclusion").innerHTML = "";
         playerScore ="0";
         computerScore ="0";
         document.getElementById("player-score").innerHTML = playerScore;
         document.getElementById("computer-score").innerHTML = computerScore;
         

    }
    



    