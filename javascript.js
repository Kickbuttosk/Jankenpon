console.log("Hello World");

let choice1 = "Rock";
let choice2 = "Paper";
let choice3 = "Scissors";

function getComputerChoice(){
  let getComputerchoice = Math.random();
  if(getComputerchoice < 0.3){
     return choice1;
  }else if(getComputerchoice < 0.6){
     return choice2;
 }else if(getComputerchoice < 0.99){
   return choice3;
  }
}


function getHumanChoice (){
  let input = prompt("Choose either Rock , Paper OR Scissors" , " ");
  if(input ==="rock" || input==="ROCK" || input ==="Rock"){
    return choice1;
   }
   if(input ==="paper" || input ==="PAPER"  || input ==="Paper"){
    return choice2;
    }
    if(input ==="scissors" || input ==="SCISSORS" || input ==="Scissors"){
       return choice3;
    };
}


let humanscore = 0;
let computerscore = 0;



function playgame(){
  function testground(human , computer){
    if(human === choice1 && computer === choice1){
     console.log("Tie!!");
     console.log("Your score" + " " +humanscore);
     console.log( "Computer score" + " " + computerscore);
    };
    if(human === choice1 && computer === choice2){
    console.log("You lose! Paper beats rock!!");
     computerscore++;
     console.log("Your score" + " " +humanscore);
     console.log( "Computer score" + " " + computerscore);
    
    };
    if(human === choice1 && computer === choice3){
    console.log("You win!! Rock beats Scissors!!");
     humanscore++;
     console.log("Your score" + " " +humanscore);
     console.log( "Computer score" + " " + computerscore);
    }; 
     if(human === choice2 && computer === choice3){
     console.log("You lose!! Scissors beats Paper!!");
     computerscore++;
     console.log("Your score" + " " +humanscore);
     console.log( "Computer score" + " " + computerscore);
     };
     if(human === choice2 && computer === choice2 ){
      console.log("Tie!!");
     console.log("Your score" + " " +humanscore);
     console.log( "Computer score" + " " + computerscore);
     };
     if(human === choice2 && computer === choice1){
     console.log("You Win! Paper  beats rock!!");;
     humanscore++;
     console.log("Your score" + " " +humanscore);
     console.log( "Computer score" + " " + computerscore);
     };
     if(human === choice3 && computer === choice3 ){
      console.log("Tie!!");
     console.log("Your score" + " " +humanscore);
     console.log( "Computer score" + " " + computerscore);
     };
     if(human === choice3 && computer === choice1){
     console.log("You lose! Rock  beats Scissors!!");
     computerscore++;
     console.log("Your score" + " " +humanscore);
     console.log( "Computer score" + " " + computerscore);
     };
     if(human === choice3 && computer === choice2){
     console.log("You Win!! Scissors beats Paper!!");
     humanscore++;
     console.log("Your score" + " " +humanscore);
     console.log( "Computer score" + " " + computerscore);
     }
    }
    testground(getHumanChoice(),getComputerChoice())
}




 

  

playgame();
console.log("                     First round     ");
playgame();
console.log("                     Second round    ");
playgame();
console.log("                     Third round     ");
playgame();;
console.log("                     Fourth round    ");
playgame();;
console.log("                     Fifth round     ");
console.log("                     Game over!!     ");
