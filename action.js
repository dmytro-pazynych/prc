/*
var userChoice = "";

window.onclick  = function(event){
    userChoise = event.srcElement.id
    console.log(userChoice);
    console.log(event.srcElement.id)
};

console.log(userChoice);

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        };
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins"
        };
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        };
    };
};


console.log(compare(userChoice, computerChoice));
*/

$(document).ready(function(){
    $('img').click(function(event){
        console.log("User: " + event.target.id);
        var userChoice = event.target.id;
        
        var computerChoice = Math.random();
        if (computerChoice < 0.34) {
	       computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
	       computerChoice = "paper";
        } else {
	       computerChoice = "scissors";
        } console.log("Computer: " + computerChoice);
        
        var compare = function (choice1, choice2) {
            if (choice1 === choice2) {
                return "The result is a tie!";
            } else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                return "You win!";
                } else {
                return "Computer wins!";
                };
            } else if (choice1 === "paper") {
                if (choice2 === "rock") {
                return "You win!";
                } else {
                return "Computer wins!"
                };
            } else if (choice1 === "scissors") {
                if (choice2 === "rock") {
                return "Computer wins!";
                } else {
                return "You win!";
                };
            };
        }; 
        console.log(compare(userChoice, computerChoice));
        $('ul').append("<li>Your choice is " + userChoice + "<br>Computer choice is  " + computerChoice + "<br>" + compare(userChoice, computerChoice) + "</li>");
    })  
})


