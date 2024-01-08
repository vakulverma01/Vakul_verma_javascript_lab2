
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Dolphin"],
    correctAnswer: "Blue Whale"
  }
  // Add more questions as needed
];

// Get HTML elements
const questionElement = document.getElementById("question");
const choiceElements = [
  document.getElementById("choice0"),
  document.getElementById("choice1"),
  document.getElementById("choice2"),
  document.getElementById("choice3")
];
const progressElement = document.getElementById("progress");

// Initialize quiz variables
let currentQuestionIndex = 0;
let score = 0;

// Display question and choices
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.options.forEach((option, index) => {
    choiceElements[index].textContent = option;
    choiceElements[index].onclick = () => checkAnswer(option);
  });

  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

// Check user's answer
function checkAnswer(userChoice) {
  const currentQuestion = questions[currentQuestionIndex];
  if (userChoice === currentQuestion.correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

// Display quiz result
function displayResult() {
  const totalQuestions = questions.length
