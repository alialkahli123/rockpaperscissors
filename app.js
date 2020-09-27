var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
const choices = ["r", "p", "s"]
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber]

}

function convertToWord(letter){
  if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(user, computer){
    const userSmall = "user".fontsize(3).sub();
    const computerSmall = "computer".fontsize(3).sub();
    const user_div =   document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(user) + userSmall + " beats " + convertToWord(computer)+ computerSmall + ". You win!";
    user_div.classList.add('green-glow');
    setTimeout(function(){user_div.classList.remove('green-glow')}, 300);
}

function lose(user,computer){
  const userSmall = "user".fontsize(3).sub();
  const computerSmall = "computer".fontsize(3).sub();
  const user_div =   document.getElementById(user);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(user) + userSmall + " loses to " + convertToWord(computer)+ computerSmall + ". You lose!";
  user_div.classList.add('red-glow');
  setTimeout(function(){user_div.classList.remove('red-glow')}, 300);
}

function draw(user,computer){
  const userSmall = "user".fontsize(3).sub();
  const computerSmall = "computer".fontsize(3).sub();
  const user_div =   document.getElementById(user);
  result_p.innerHTML = convertToWord(user) + userSmall + " equals " + convertToWord(computer)+ computerSmall + ". It's a draw!";
  user_div.classList.add('gray-glow');
  setTimeout(function(){user_div.classList.remove('gray-glow')}, 300);
}



function game(userChoice){
const computerChoice = getComputerChoice();

switch (userChoice+computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    win(userChoice,computerChoice);
    break;

    case "sr":
    case "rp":
    case "ps":
    lose(userChoice, computerChoice);
    break;

    case "rr":
    case "pp":
    case "ss":
    draw(userChoice,computerChoice);
    break;


  default:

}

}

function main(){

rock_div.addEventListener("click",function(){
game("r");



})

paper_div.addEventListener("click",function(){
game("p");



})

scissors_div.addEventListener("click",function(){
game("s");

})
}
main();
