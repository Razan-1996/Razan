/*
 Lets make a game of Rock paper scissor.
 +------+
  Rules
 +------+
The following numbers represent each input
 1 - Paper
 2 - Scissors
 3 - Rock
 i.e. 1 means paper

 If Rock and paper, Rock wins
 If Rock and Scissor, Rock wins
 If Paper and Scissor, Scissor wins
 If Paper and Rock, Rock wins

 Start by writing a Pseudocode to ensure you have your logic right before writing anycode.
*/
play

let userInput = prompt('Enter a number: 1 - Paper, 2 - Scissor, 3 - Rock')
let computerNum = Math.floor(Math.random() * 3) + 1;
console.log("computerNum")
console.log("userInput") 
var Peper = 1
var Scissor = 2
var Rock = 3

Console.log (Math.floor(Math.random() * 3) + 1)


if (userInput == computerNum) 
{
    console.log("tie")
}

 if(userInput == 1 && computerNum == 2) || (userInput ==2 && computerNum == 1) 
 {
    console.log("Scissor wins")
}

if (userInput == 1 && computerNum ==3) || (userInput ==3 && computerNum == 1)
{
    console.log("Paper wins")
}


if (userInput == 2 && computerNum == 3) || (userInput == 3 && computerNum == 2)
{
    console.log("rock wins")
}