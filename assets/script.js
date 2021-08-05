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
var btnHScore = document.querySelector(".hScore");

btnStart.addEventListener("click", gameSet);
posAns1.addEventListener("click", checkAns);
posAns2.addEventListener("click", checkAns);
posAns3.addEventListener("click", checkAns);
posAns4.addEventListener("click", checkAns);
btnHScore.addEventListener("click", checkHScore);

function gameSet() {
  time = 60;
  correctScore = 0;
  incorrectScore = 0;
  posAns1.style.visibility = "visible";
  posAns2.style.visibility = "visible";
  posAns3.style.visibility = "visible";
  posAns4.style.visibility = "visible";
  startTime();
  questionSet();
}

function questionSet() {
  if (correctScore == 10) {
    return null;
  }
  chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
  console.log(chosenQuestion);
  if (chosenQuestion.ansCorrect == true || correctScore == 10) {
    while (chosenQuestion.ansCorrect == true) {
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
  var daTimer = setInterval(function () {
    if (time <= 1 || correctScore == 10) {
      clearInterval(daTimer);
      endGame();
    }
    time--;
    timer.textContent = "Time :" + time;
  }, 1000);
}

function checkAns(event) {
  console.log(event.toElement.textContent);
  if (event.toElement.textContent == chosenQuestion.ans) {
    correctScore++;
    posScore.textContent = "Correct :" + correctScore;
    chosenQuestion.ansCorrect = true;
    if (correctScore == 10) {
      endGame();
    }
  } else {
    incorrectScore++;
    negScore.textContent = "Incorrect :" + incorrectScore;
    time - 10;
  }
  questionSet();
}

function endGame() {
  daQuestion.textContent = "GAME OVER";
  posAns1.style.visibility = "hidden";
  posAns2.style.visibility = "hidden";
  posAns3.style.visibility = "hidden";
  posAns4.style.visibility = "hidden";
  scoreSave();
  reset();
}

function reset() {
  correctScore = 0;
  incorrectScore = 0;
  for (i = 0; i < questions.length; i++) {
    questions[i].ansCorrect = false;
  }
}

function scoreSave() {
  console.log("saved");
  var name = prompt("Give us a name to save your score.");
  var savingGame = {
    playerName: name,
    score: correctScore,
    bestTime: time,
  };
  var highScore = JSON.parse(localStorage.getItem("highscore"));
  if (highScore !== null) {
    if (savingGame.score > highScore.score) {
      if (savingGame.bestTime > highScore.bestTime) {
        alert("Highscore!!! Congrats!");
        localStorage.setItem("highscore", JSON.stringify(savingGame));
      }
    } else {
      alert("You did not beat the highscore. Try again.");
    }
  } else {
    alert("Highscore!!! Congrats!");
    localStorage.setItem("highscore", JSON.stringify(savingGame));
  }
}

function checkHScore() {
  var highScore = JSON.parse(localStorage.getItem("highscore"));
  if (highScore !== null) {
    alert(
      "Best score is " +
        highScore.score +
        " by " +
        highScore.playerName +
        " in a time of " +
        highScore.bestTime +
        "!"
    );
  } else {
    alert("No score found.");
    return;
  }
}
