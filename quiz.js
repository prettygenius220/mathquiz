function determineScore(){
        var ans1 = document.getElementById("answer1st").value;
        var ans2 = document.getElementById("answer2nd").value;
        var score = [];
        // if ans1 result is 2 : append 1 to score 
        // Otherwise : append 0 to score
        if (ans1 == 2) 
                score.push(1);
        
        else 
                score.push(0);

        if (ans2 == 3)
                score. push(1);
        else 
                score.push(0);

        var total = 0;
        for (var i in score) {
                total += score[i];
        }
        alert("Your score is " + total + " out of 2");
}

// // function to redirect to another page
// function nextPage{
//         location.
// }
