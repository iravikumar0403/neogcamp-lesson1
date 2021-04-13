var questions = [
  {
    question: "Who is my Favorite Singer?",
    answer: "charlie puth",
  },
  {
    question: "What is my Favorite color?",
    answer: "black",
  },
  {
    question: "What is my Age?",
    answer: "21",
  },
  {
    question: "What is my favorite food?",
    answer: "egg biryani",
  },
  {
    question: "What is my favorite street food?",
    answer: "pani puri",
  },
];
var score = 0;

var readlineSync = require("readline-sync");

var userName = readlineSync.question("Type your name");
console.log("Welcome " + userName + " lets see how well do you know me");

for (var i = 0; i < questions.length; i++) {
  var question = questions[i];
  quizQuestion(question.question, question.answer);
}

function quizQuestion(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You are right \n");
    score = score + 2;
  } else {
    console.log("You are wrong \n");
    score--;
  }
}

var scoreBoard = [
  {
    name: "Nitin",
    score: "10",
  },
  {
    name: "Sachin",
    score: "7",
  },
];

console.log("Your final score is " + score + "\n");
for (var i = 0; i < scoreBoard.length; i++) {
  console.log(scoreBoard[i].name + ":" + scoreBoard[i].score);
}
