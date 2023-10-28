function playCraps() {
    //this is a function to play craps in the game.html
    //totalling 7 or 11 loses, rolling even doubles wins, everything else is a push
    //Taylor Kelty 10-19-23 for Prof. Prater's Intro to Prog
    console.log("playCraps() started");
    //die number 1
    var die1 = Math.ceil(Math.random() * 6);
    console.log("die1 result = " + die1)
    document.getElementById("die1Res").innerHTML = "landed on " + die1;
    //die number 2
    var die2 = Math.ceil(Math.random() * 6);
    console.log("die2 result = " + die2)
    document.getElementById("die2Res").innerHTML = "landed on " + die2;
    //total of the two
    var sum = die1 + die2;
    console.log("sum result = " + sum);
    document.getElementById("sumRes").innerHTML = "TOTALS " + sum;

    //check for 7 or 11 meaning loss
    if (sum == 7 || sum == 12) {
        document.getElementById("gameRes").innerHTML = "You've met a terrible fate, haven't you?";
    } //check for doubles and even for the win 
    else if (die1 == die2 && die2 % 2 == 0) {
        document.getElementById("gameRes").innerHTML =
            "Hot diggity dog! You won! Keep it going?";
    }
    else { //did not win or lose,l so push
        document.getElementById("gameRes").innerHTML =
            "You did not win or lose, but who really wins anyway?";
    }

}