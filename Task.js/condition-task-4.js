function processFriendScore(FirendScore) {
    if(FirendScore > 80) {
        console.log("Inside your friend score");
        
        if(FirendScore > 80) {
            console.log("Go for a lunch");
        } else if ( FirendScore >= 60){
            console.log("Good luck next time.");
        } else if ( FirendScore >= 40){
            console.log("Keep your friends message unseen.");
        } else {
            console.log("Block your friend.");
        }
        }else{
            console.log("Go to home, sleep, and act sad.");

    }
}

var yourScore = 60;
processFriendScore(yourScore);