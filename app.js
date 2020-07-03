// 1- cache the DOM, cache means 

let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector('.score-board');

const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getCompChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
};

function converttoword(letter){
    if(letter === "rock") return "rock";
    if (letter === "paper") return "paper";
    return "scissors";
}

function win(user, comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML= `${converttoword(user)} beats ${converttoword(comp)}`;
    document.getElementById(userChoice).classList.add('green');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('green'); })
}

function loses(user,comp){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML= `${converttoword(user)} loses to ${converttoword(comp)}`;

}

function  draw(user, comp){
    //userScore_span.innerHTML = userScore;
    //compScore_span.innerHTML = compScore;
    result_p.innerHTML= `${converttoword(user)} draws ${converttoword(comp)}`;

}


function game(userChoice){
   const compChoice = getCompChoice();
   switch(userChoice + compChoice){
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
          draw(userChoice, compChoice);
        break

    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
        loses(userChoice, compChoice);
        break

   case "paperrock":
   case "scissorpaper":
   case "rockscissors":
       win(userChoice, compChoice);
       break


   }
};



function main(){

    rock_div.addEventListener('click', function(){
        game("rock");
    })


    paper_div.addEventListener('click', function(){
        game("paper");
    })

    scissors_div.addEventListener('click', function(){
        game("scissors");
 })
}

main();
