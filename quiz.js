document.getElementById("submitDiv").style.display='none';
document.getElementById("nextDiv").style.display='none';
document.getElementById("ques").style.display='none';
document.getElementById("ques2").style.display='none';
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
// concerning the label for =
var insertEqual = document.getElementById("equalto");
// var equal = insertEqual.innerHTML = '=';
// generate random numbers
const first = Math.floor(Math.random() * 10) + 1;
const second = Math.floor(Math.random() * 10) + 1;
const third = Math.floor(Math.random() * 10) + 1;
const fourth = Math.floor(Math.random() * 10) + 1;
// to extract the user's input
var ans1 = document.getElementById("answer1st").value;




// Displays the hidden divs
function displayDivs(){
        document.getElementById("ques").style.display='block';
        document.getElementById("ques2").style.display='block';
        document.getElementById("startDiv").style.display='none';
        document.getElementById("nextDiv").style.display='block';
        
}

function getNumbers(){
        var combined1 = first + ' + ' + second + ' ' + '=' ;
        var combined2 = third + ' + ' + fourth + '  ' + "=";
        var firstques = question1.innerHTML = combined1;
        var secondques = question2.innerHTML = combined2;
        
        
}
//  function to return the user's and computer's input
function displayInput(){
        var ansFirst = document.getElementById("answer1st").value; 
        var ansSecond = document.getElementById("answer2nd").value;
        var sumRandomNumbers1 = first + second;
        var sumRandomNumbers2 = third + fourth;
        var alertInput = alert ( " Computer's answer to question 1 = "+ sumRandomNumbers1 + "\n" +
         " User's answer to question 2 = "  + ansFirst
         + "\n \n Computer's answer to question 2 =" + sumRandomNumbers2
         +"\n User's answer to question 2 = "+ ansSecond);
        return alertInput;
        
}


// function determineScore(){
        // var ans1 = document.getElementById("answer1st").value;
        // var ans2 = document.getElementById("answer2nd").value;
        // // var score = [];
        // computer adds the figures
        // var sumRandomNumbers = first + second;


        // if ans1 result is 2 : append 1 to score 
        // Otherwise : append 0 to score
        // if (ans1 == 2) 
        //         score.push(1);
        
        // else 
        //         score.push(0);

        // if (ans2 == 3)
        //         score. push(1);
        // else 
        //         score.push(0);

        // var total = 0;
        // for (var i in score) {
        //         total += score[i];
        // }
//         alert("Computer answer = "+ sumRandomNumbers + 
//         "User answer = " + ans1);
// }

// // function to redirect to another page
// function nextPage{
//         location.
// }
