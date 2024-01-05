const questions = [
  {
    question: "which is the largest animal in the world",
    answer: [
      { text: "shark", correct: false },
      { text: "blue whale", correct: true },
      { text: "elephant", correct: false },
      { text: "giraffe", correct: false },
    ],
  },
  {
    question: "which is the largest desert in the world",
    answer: [
      { text: "kalahari", correct: false },
      { text: "gobi", correct: false },
      { text: "sahara", correct: false },
      { text: "antarctica", correct: true },
    ],
  },
  {
    question: "which is the smallest continent in the world",
    answer: [
      { text: "asia", correct: false },
      { text: "australia", correct: true },
      { text: "arctic", correct: false },
      { text: "africa", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Clear previous answer buttons
  answerButtons.innerHTML = "";

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => checkAnswer(answer.correct));
    answerButtons.appendChild(button);
  });
}

function checkAnswer(isCorrect) {
  if (isCorrect) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    // End of the quiz
    alert(`You scored ${score} out of ${questions.length}`);
  }
}

nextButton.addEventListener("click", startQuiz);

startQuiz();

