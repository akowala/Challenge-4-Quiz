const newQuestion = document.querySelector("#new-question");
const optionsList = document.querySelector("#options-list");
const grade = document.querySelector("#grade");
const finalScreen = document.querySelector("#final-screen");
const saveScoreBtn = document.querySelector("#save-score");
const initials = document.querySelector("#initials");
const timer = document.querySelector("#timer");
const viewHighScores = document.querySelector("#high-scores");
const start = document.querySelector("#start");
const startBtn = document.querySelector("#start-button");
const questionTitle = document.querySelector("#title");
const questionsSection = document.querySelector("#questions-section");


let countdown;
let timeLeft = 70;
let qIndex = 0;

function quizTime() {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft <= 0) {
        endQuiz();
    }
}

function beginQuiz() {
    start.setAttribute("class", "hidden");
    questionsSection.removeAttribute("class");
    countdown = setInterval(quizTime, 1000);
    timer.textContent = timeLeft;
    postQuestion();
  }
  