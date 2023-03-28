class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
}

class Question {
  constructor(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
  }

  isCorrectAnswer(option) {
    return option === this.answer;
  }
}

function showQuestions(quizInstance) {
  if (quizInstance.isEnded()) {
    showScores(quizInstance);
  } else {
    // show question text
    let questionText = document.getElementById("question");
    questionText.innerHTML = quizInstance.getQuestionIndex().text;
    // show options
    let optionsArr = document.querySelector(".possibilities").children;

    for (let index = 0; index < optionsArr.length; index++) {
      const btn = optionsArr[index];
      btn.innerHTML =
        quizInstance.questions[quizInstance.questionIndex].options[index];
      guess(btn, quizInstance);
    }
    showProgress(quizInstance);
  }
}

function showProgress(quizInstance) {
  let current = document.getElementById("current-question");
  let totalNumOfQuestions = document.getElementById("total-questions");
  current.innerHTML = quizInstance.questionIndex + 1;
  totalNumOfQuestions.innerHTML = quizInstance.questions.length;
}

function guess(btn, quizInstance) {
  btn.onclick = function (event) {
    quizInstance.guess(event.target.innerHTML);
    showQuestions(quizInstance);
  };
}

// SHOW SCORES
function showScores(quizInstance) {
  let quizEndHTML = `
    <h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quizInstance.score} of ${quizInstance.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;
  let quizElement = document.querySelector(".quiz-box");

  quizElement.innerHTML = quizEndHTML;
}

// make questions

let questions = [
  new Question(
    "Hyper Text Markup Language Stands For?",
    ["JQuery", "XHTML", "CSS", "HTML"],
    "HTML"
  ),
  new Question(
    "Cascading Style sheet stands for?",
    ["HTML", "JQuery", "CSS", "XML"],
    "CSS"
  ),
  new Question(
    "Which is a JavaScript Framework?",
    ["React", "Laravel", "Django", "Sass"],
    "React"
  ),
  new Question(
    "Which is a backend language?",
    ["PHP", "HTML", "React", "All"],
    "PHP"
  ),
  new Question(
    "Which is best for Artificial intelligence?",
    ["React", "Laravel", "Python", "Sass"],
    "Python"
  ),
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

showQuestions(quiz);
