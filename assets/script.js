var questions = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight,
  questionNine,
  questionTen,
];
var correctScore = 0;
var incorectScore = 0;
var time = 0;
var daQuestion = document.querySelector(".daQuestion");
var posAns1 = document.querySelector(".ansOne");
var posAns2 = document.querySelector(".ansTwo");
var posAns3 = document.querySelector(".ansThree");
var posAns3 = document.querySelector(".ansFour");
var btnStart = document.querySelector(".start");
var btnSubmit = document.querySelector(".submit");
var btnQuit = document.querySelector(".quit");

var questionOne = {
  ansCorrect: false,
  question: "Who is the main vilian of the Portal series?",
  ans: "GLaDOS",
  posAns: ["GLaDOS", "Wheatley", "Chell", "Cave Jonson"],
};
var questionTwo = {
  ansCorrect: false,
  question: "What colors are the portals the main character can use?",
  ans: "Blue/Orange",
  posAns: ["Blue/Orange", "Red/Orange", "Blue/Purple", "Red/Purple"],
};
var questionThree = {
  ansCorrect: false,
  question: "In what company does the game take place?",
  ans: "Apeture Science",
  posAns: ["Apeture Science", "Valve", "Black Mesa", "Disney"],
};
var questionFour = {
  ansCorrect: false,
  question: "What type of game is portal?",
  ans: "Puzzle Platformer",
  posAns: ["Puzzle Platformer", "FPS", "Educational", "Board"],
};
var questionFive = {
  ansCorrect: false,
  question: "What does the main vilian promise us for completeing the game?",
  ans: "Cake",
  posAns: ["Cake", "Money", "A Boat", "A cool rock"],
};
var questionSix = {
  ansCorrect: false,
  question: "In the second game, What does GLaDOS travel with us as?",
  ans: "A Potato",
  posAns: ["A Potato", "A Bird", "A Carot", "A Camera"],
};
var questionSeven = {
  ansCorrect: false,
  question: "What color of surface can portals be placed on?",
  ans: "White",
  posAns: ["White", "Black", "Gray", "Blue"],
};
var questionEight = {
  ansCorrect: false,
  question: "Which of these gels can we use to bounce high into the air?",
  ans: "Blue",
  posAns: ["Blue", "White", "Orange", "Red"],
};
var questionNine = {
  ansCorrect: false,
  question: "Which of these gels can we use to run faster than we normaly do?",
  ans: "Orange",
  posAns: ["Blue", "White", "Orange", "Red"],
};
var questionTen = {
  ansCorrect: false,
  question:
    "Which of these gels can we use to place portals where we normaly could not?",
  ans: "White",
  posAns: ["Blue", "White", "Orange", "Red"],
};

btnStart.addEventListener("click", gameOn());
btnSubmit.addEventListener("click", checkAns());
btnQuit.addEventListener("click", endGame());

function gameOn() {
  time = 60;
  correctScore=0;
  incorectScore=0:
  startTime();
  var chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
  if(chosenQuestion.ansCorrect == true){
    while (chosenQuestion.ansCorrect == true || correctScore==10) {
        chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
    }
  }
  daQuestion.value=chosenQuestion.question;
  posAns1.value=chosenQuestion.posAns[Math.floor(Math.random() * questions.length)]
  posAns2.value=chosenQuestion.posAns[Math.floor(Math.random() * questions.length)]
  if(posAns1.value==posAns2.value){
    while (posAns1.value==posAns2.value) {
        posAns2.value=chosenQuestion.posAns[Math.floor(Math.random() * questions.length)]
    }
  }
  posAns3.value=chosenQuestion.posAns[Math.floor(Math.random() * questions.length)]
  posAns4.value=chosenQuestion.posAns[Math.floor(Math.random() * questions.length)]

}

function startTime(){
    console.log("Time Started")
}

function checkAns() {}

function endGame() {}
