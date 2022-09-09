const timer = document.querySelector("#timer");
const viewHighscores = document.querySelector("#high-scores");
const start = document.querySelector("#start");
const startBtn = document.querySelector("#start-button");
const questionTitle = document.querySelector("#title");
const questionsSection = document.querySelector("#questions-section");
const newQuestion = document.querySelector("#new-question");
const optionsList = document.querySelector("#options-list");
const grade = document.querySelector("#grade");
const finalScreen = document.querySelector("#final-screen");
const saveScoreBtn = document.querySelector("#save-score");
const initials = document.querySelector("#initials");

let countdown;
let timeLeft = 70;
let qIndex = 0;

// timer is tracked on the top left of the page
function quizTime() {
    timeLeft--;
    timer.textContent = timeLeft;
// if the timer reaches 0, it automatically ends the quiz
    if (timeLeft <= 0) {
        endQuiz();
    }
}

// starts the quiz and shows a question when you press the "start" button. 
function beginQuiz() {
    start.setAttribute("class", "hidden");
    questionsSection.removeAttribute("class");
    countdown = setInterval(quizTime, 1000);
    timer.textContent = timeLeft;
    // goes on to the next question when you answer a question, as long as the timer hasn't reached 0 yet
    postQuestion();
}

// posts the question on the webpage
function postQuestion() {
    let currentQ = questions[qIndex];
    newQuestion.textContent = currentQ.question;
    optionsList.innerHTML = "";

    // gives the options for answers underneath the question
    for (let i = 0; i < currentQ.options.length; i++) {
        let option = currentQ.options[i];
        let userOption = document.createElement("button");
        userOption.textContent = i + 1 + ": " + option;
        userOption.setAttribute("value", option);
        userOption.setAttribute("class", "option");

        // the event listener checks if the question that is answered is right or wrong
        userOption.addEventListener("click", (e) => {
            if (e.target.value !== questions[qIndex].answer) {
                timeLeft -= 10;
                if (timeLeft <= 0) {
                    timeLeft = 0;
                }
                timer.textContent = timeLeft;
                grade.textContent = "wrong!";
            } else {
                grade.textContent = "Right!";
            }

            // displays the "right" or "wrong" attribute for two seconds
            grade.setAttribute("class", "grade");
            setTimeout(() => {
                grade.setAttribute("class", "grade hidden");
            }, 2000);

            // increment operator adds a question
            qIndex++;

            // Checks the time and if the user is at the end of the quiz, then ends the quiz if true, otherwise it moves to the next question
            if (timeLeft <= 0 || qIndex === questions.length) {
                endQuiz();
            } else {
                postQuestion();
            }
        });
        // Appends each option to the list of options
        optionsList.appendChild(userOption);
    }
}
// stops the timer (if not at 0) and displays the final screen where you can see your high score
// the current time will be displayed as the score
function endQuiz() {
    clearInterval(countdown);
    finalScreen.removeAttribute("class");
    let score = document.querySelector("#score");
    score.textContent = timeLeft;
    questionsSection.setAttribute("class", "hidden");
}

// used the onclick event to begin the quiz
startBtn.onclick = beginQuiz;
