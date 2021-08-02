// set the submit button to not display
document.getElementById("submitDiv").style.display='none';
// set the next button to not display
document.getElementById("nextDiv").style.display='none';
// set the question 1 div  to not display
document.getElementById("ques").style.display='none';
// set the question 2 div  to not display
document.getElementById("ques2").style.display='none';
// get question one
var question1 = document.getElementById("question1");
// get question two
var question2 = document.getElementById("question2");
// get the label 
var equal = document.getElementById("equalto");
// generate random numbers
// first 
const first = Math.floor(Math.random() * 10) + 1;
// second
const second = Math.floor(Math.random() * 10) + 1;
// third
const third = Math.floor(Math.random() * 10) + 1;
// fourth
const fourth = Math.floor(Math.random() * 10) + 1;

// get wrong and right divs
var wrong = document.getElementById("wrong");
var right = document.getElementById("right");
// hide wrong and right 
wrong.style.display='none';
right.style.display='none';




// Displays the hidden divs when the start button is clicked
function displayDivs(){
        document.getElementById("ques").style.display='block';
        document.getElementById("ques2").style.display='block';
        document.getElementById("startDiv").style.display='none';
        document.getElementById("nextDiv").style.display='block';
        alert("If the computer returns 'Wrong' then one or both of your answers are wrong ")
        
}
// sets the first and second questions as the random numbers already derived
function getNumbers(){
        // question 1 is
        var combined1 = first + ' + ' + second + ' ' + '=' ;
        // question 2 is
        var combined2 = third + ' + ' + fourth + '  ' + "=";
        // set the inner value of the first question to...
        var firstques = question1.innerHTML = combined1;
        // set the inner value of the second question to...
        var secondques = question2.innerHTML = combined2;
        
        
}
//  function to return the user's and computer's input
function displayInput(){
         // to get the user's input to the first answer
         var ansFirst = document.getElementById("answer1st").value;
         // to get the user's input to the second answer
         var ansSecond = document.getElementById("answer2nd").value;
        // to add the first and second random numbers together
        var sumRandomNumbers1 = first + second;
        // to sum up the third and fourth random numbers
        var sumRandomNumbers2 = third + fourth;
        // compare the user and the computer's input
        if (ansFirst == sumRandomNumbers1 && ansSecond == sumRandomNumbers2){
                right.style.display='block';
                wrong.style.display='none';
        } else {
                wrong.style.display = 'block';
                right.style.display = 'none';
        }
        
}


