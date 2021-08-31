// set the next button to not display
document.getElementById("nextDiv").style.display='none';
// set the question  div  to not display
document.getElementById("ques").style.display='none';
// set the submit div to not display
document.getElementById("submitDiv").style.display='none';
// get question
var question = document.getElementById("question");
// generate random numbers
function generateRandom() {
	return Math.floor(Math.random() * 10) + 1;
}

// first 
let first;
// second
let second;

// score
let score = 1;


// count
let count = 1;
function initializeVariables() {
	first = generateRandom();
	second = generateRandom();
	
}

// Displays the hidden divs when the start button is clicked
function displayDivs(){
        document.getElementById("ques").style.display='block';
        document.getElementById("startDiv").style.display='none';
       document.getElementById("nextDiv").style.display='block';
       
        
}
// sets the first and second questions as the random numbers already derived
function getNumbers(){
	initializeVariables();
	
	var ansIn = document.getElementById("answer");
	ansIn.value = '';
	

        // question is
        var combined = first + ' + ' + second + ' ' + '=' ;
        
        // set the inner value of the first question to...
        var quesIn = question.innerHTML = combined;
       
        
        
        
}
//  function to return the user's and computer's input
function displayInput(){
        
         // to get the user's input to the first answer
         var ans = document.getElementById("answer").value;
         
        // to add the first and second random numbers together
        var sumRandomNumbers = first + second;
        
        // compare the user and the computer's input
        if (ans == sumRandomNumbers){
                score++;
        }
        return score;
        
}
 
function keepGoing(){
	getNumbers();
        displayInput();
        
}




