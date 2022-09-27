let userName = document.querySelector("#userName");
let name = document.querySelector("#name");
let greetings = document.querySelector("#greetings");
let quiz = document.querySelector("#quiz");
let answer = document.querySelector("#answer");
let question = 0;
function input(){
    name.innerHTML = ""
    name.innerHTML = "Hello " + userName.value + ", welcome to my quiz.";
    greetings.style.display ="none"
    quiz.style.display ="block"  
  }

const Question = document.querySelector("#question");//used to link the html coding using '#question'
const Answer = document.querySelector("#answer");//input from the user
const Verdict = document.querySelector("#verdict");//determines whether or not the question is correct
const questionList = ["What is a MITM Attack", "HTTP is safer than HTTPS (True/False)", 
"What is the purpose of MITM Attack", "What is the percentage of MITM Attacks in 2019",
 "Can hackers carry out IP Spoofing", "What is the purpose of Superfish Visual Search", "Why is VPN useful",
  "How to avoid being a victim of a MITM Attack"];//list of questions//
  const answerList = ["The hacker will be in the middle of a pathway between two end-users, two computer systems, or an end-user and a computer system", "False", 
  "Use victim's credentials for their benefit", "35%","Yes", "Inserts advertisements to disrupt traffic", 
  "It keeps and end-user's traffic private on a public server", "Avoid phishing scams"];//list of answers//            
const congratsList = ["Correct!", "Well Done!", "Amazing!"];//output of words if the answer is correct//
const wrongList = ["Incorrect", "Nope.", "No! You're wrong!"];//output of words if the answer is wrong//
var number = 0; 
let text =  questionList[number] + "?";//the text appeared will be the one of the questions from left to right 
//ending with a question mark
Question.innerHTML = text;//innerHTML is HTML coding inside one of the HTML components//

function quizFunction() { //Function of the quiz//
    if (Answer.value = answerList) { //if/else statement//
        document.body.style.backgroundColor = "Green"; //if the answer is correct the background will turn//
        //and one of the words from the congrats list will appear//
        Verdict.innerHTML = congratsList[number];//verdict is a code used to show whether or not the answer
        //correct
    } else { //if the answer is wrong the background will turn red and one of the words from the wrong list
        //will appear
        document.body.style.backgroundColor = "Red";
        Verdict.innerHTML = wrongList[number];
     } 

       text = "";
}

if (Answer.value == "discovery of dna"){
    
}

function nextQuestion() {
    number += 1;
    text += questionList[number] + "?";//questions will be asked in a consecutive order
    Question.innerHTML = text;
    document.body.style.backgroundColor = "darkturquoise";   
}