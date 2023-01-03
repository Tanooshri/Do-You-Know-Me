var readlineSync = require("readline-sync");
var score = 0;
var highScores = [
  {
    name: "Tanooshri",
    score: 6,
  },

  {
    name: "Manushri",
    score: 1,
  },
]



function welcome() {
  var username = readlineSync.question("May I have your name?");
  console.log("Welcome! " + username + " to DO YOU KNOW Tanooshri");
}


function play(question, answer) {
  var useranswer = readlineSync.question(question);
  if (useranswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!");
    score = score - 1;
  }
  console.log("Score: " + score);
  console.log("---------------");
}
var questions = [
  questionOne = {
    question: "Who is my favorite PERSON?",
    answer: "Tanooshri"
  },
  questionTwo = {
    question: "Which is my favorite Snacks?",
    answer: "Chips"
  },
  questionOne = {
    question: "Who is my favorite Actor?",
    answer: "Noone"
  },
  questionfour = {
    question: "Which is my favorite Car?",
    answer: "Audi"
  },
  questionfive = {
    question: "Who is my favorite superhero?",
    answer: "Iron-man"
  },
  questionsix = {
    question: "Which is my favorite place?",
    answer: "Home"
  }
]

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentquestion = questions[i];
    play(currentquestion.question, currentquestion.answer);
  }
}
function showScore() {
  console.log("YAY! You scored: " + score);
  console.log("If you beat any of the high scores send me the screenshot then I'll update it ");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
welcome();
game();
showScore();


