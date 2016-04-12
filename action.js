$(document).ready(function(){
    
    var counterUser = 0;
    var counterComputer = 0;
    
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
                return ["The result is a tie!", 0];
            } else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                return ["You win!", choice1];
                } else {
                return ["Computer wins!", choice2];
                };
            } else if (choice1 === "paper") {
                if (choice2 === "rock") {
                return ["You win!", choice1];
                } else {
                return ["Computer wins!", choice2];
                };
            } else if (choice1 === "scissors") {
                if (choice2 === "rock") {
                return ["Computer wins!", choice2];
                } else {
                return ["You win!", choice1];
                };
            };
        }; 
        console.log(compare(userChoice, computerChoice));
        var result  = compare(userChoice, computerChoice)[0];
        $('ul').append("<li>Your choice is " + userChoice + "<br>Computer choice is  " + computerChoice + "<br>" + result + "</li>");
        $("#reload").fadeIn("slow");
        if (result === "You win!"){
            counterUser += 1;
            $("#count").html("");
            $("#count").append( counterUser + " : " + counterComputer);
        } else if (result === "The result is a tie!"){
            counterUser += 1;
            counterComputer += 1;
            $("#count").html("");
            $("#count").append( counterUser + " : " + counterComputer);
        } else {
           counterComputer += 1;
            $("#count").html("");
            $("#count").append( counterUser + " : " + counterComputer); 
        }
        
        $("#count").removeClass("green");
        $("#count").removeClass("red");
        $("#count").removeClass("black");
        if (counterUser > counterComputer){
            $("#count").addClass("green");
        } else if (counterComputer > counterUser){
            $("#count").addClass("red");
        } else {
            $("#count").addClass("black");
        }
        
    }) 
    
    $("#reload").click(function(event){
        $("#reload").fadeOut("0.001")
        counterUser = 0;
        counterComputer = 0;
        $("#count").html("");
        $("ul").html("");
    })
    
})
