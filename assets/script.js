var questions = [
  {
    ansCorrect: false,
    question: "Who is the main vilian of the Portal series?",
    ans: "GLaDOS",
    posAns: ["GLaDOS", "Wheatley", "Chell", "Cave Jonson"],
  },
  {
    ansCorrect: false,
    question: "What colors are the portals the main character can use?",
    ans: "Blue/Orange",
    posAns: ["Blue/Orange", "Red/Orange", "Blue/Purple", "Red/Purple"],
  },
  {
    ansCorrect: false,
    question: "In what company does the game take place?",
    ans: "Apeture Science",
    posAns: ["Apeture Science", "Valve", "Black Mesa", "Disney"],
  },
  {
    ansCorrect: false,
    question: "What type of game is portal?",
    ans: "Puzzle Platformer",
    posAns: ["Puzzle Platformer", "FPS", "Educational", "Board"],
  },
  {
    ansCorrect: false,
    question: "What does the main vilian promise us for completeing the game?",
    ans: "Cake",
    posAns: ["Cake", "Money", "A Boat", "A cool rock"],
  },
  {
    ansCorrect: false,
    question: "In the second game, What does GLaDOS travel with us as?",
    ans: "A Potato",
    posAns: ["A Potato", "A Bird", "A Carot", "A Camera"],
  },
  {
    ansCorrect: false,
    question: "What color of surface can portals be placed on?",
    ans: "White",
    posAns: ["White", "Black", "Gray", "Blue"],
  },
  {
    ansCorrect: false,
    question: "Which of these gels can we use to bounce high into the air?",
    ans: "Blue",
    posAns: ["Blue", "White", "Orange", "Red"],
  },
  {
    ansCorrect: false,
    question:
      "Which of these gels can we use to run faster than we normaly do?",
    ans: "Orange",
    posAns: ["Blue", "White", "Orange", "Red"],
  },
  {
    ansCorrect: false,
    question:
      "Which of these gels can we use to place portals where we normaly could not?",
    ans: "White",
    posAns: ["Blue", "White", "Orange", "Red"],
  },
];
var correctScore = 0;
var incorrectScore = 0;
var time = 0;
var chosenQuestion;
var posScore = document.querySelector(".scoreCorrect");
var negScore = document.querySelector(".scoreIncorrect");
var timer = document.querySelector(".timer");
var daQuestion = document.querySelector(".daQuestion");
var posAns1 = document.querySelector(".ansOne");
var posAns2 = document.querySelector(".ansTwo");
var posAns3 = document.querySelector(".ansThree");
var posAns4 = document.querySelector(".ansFour");
var btnStart = document.querySelector(".start");
var btnQuit = document.querySelector(".quit");

btnStart.addEventListener("click", gameSet);
posAns1.addEventListener("click", checkAns);
posAns2.addEventListener("click", checkAns);
posAns3.addEventListener("click", checkAns);
posAns4.addEventListener("click", checkAns);
btnQuit.addEventListener("click", endGame);

function gameSet() {
  time = 60;
  correctScore = 0;
  incorrectScore = 0;
  startTime();
  questionSet();
}

function questionSet() {
  chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
  console.log(chosenQuestion);
  if (chosenQuestion.ansCorrect == true) {
    while (chosenQuestion.ansCorrect == true || correctScore == 10) {
      chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
    }
  }
  daQuestion.textContent = chosenQuestion.question;
  var valid = false;
  posAns1.textContent = chosenQuestion.posAns[Math.floor(Math.random() * 4)];

  posAns2.textContent = chosenQuestion.posAns[Math.floor(Math.random() * 4)];
  if (posAns1.textContent == posAns2.textContent) {
    while (valid == false) {
      posAns2.textContent =
        chosenQuestion.posAns[Math.floor(Math.random() * 4)];
      if (posAns1.textContent != posAns2.textContent) {
        valid = true;
      }
    }
    valid = false;
  }
  posAns3.textContent = chosenQuestion.posAns[Math.floor(Math.random() * 4)];
  if (
    posAns1.textContent == posAns3.textContent ||
    posAns2.textContent == posAns3.textContent
  ) {
    while (valid == false) {
      posAns3.textContent =
        chosenQuestion.posAns[Math.floor(Math.random() * 4)];
      if (
        posAns1.textContent != posAns3.textContent &&
        posAns2.textContent != posAns3.textContent
      ) {
        valid = true;
      }
    }
    valid = false;
  }
  posAns4.textContent = chosenQuestion.posAns[Math.floor(Math.random() * 4)];
  if (
    posAns1.textContent == posAns4.textContent ||
    posAns2.textContent == posAns4.textContent ||
    posAns3.textContent == posAns4.textContent
  ) {
    while (valid == false) {
      posAns4.textContent =
        chosenQuestion.posAns[Math.floor(Math.random() * 4)];
      if (
        posAns1.textContent != posAns4.textContent &&
        posAns2.textContent != posAns4.textContent &&
        posAns3.textContent != posAns4.textContent
      ) {
        valid = true;
      }
    }
    valid = false;
  }
}

function startTime() {
  console.log("Time Started");
}

function checkAns(event) {
  console.log(event.toElement.textContent);
  if (event.toElement.textContent == chosenQuestion.ans) {
    correctScore++;
    posScore.textContent = "Correct :" + correctScore;
  } else {
    incorrectScore++;
    negScore.textContent = "Incorrect :" + incorrectScore;
    time - 10;
  }
  questionSet();
}

function endGame() {
  daQuestion.value = "GAME OVER";
  time = 0;
  scoreSave();
}

function scoreSave() {
  console.log("saved");
}
