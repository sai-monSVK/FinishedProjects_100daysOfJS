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
        if(this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score ++;
             } 
        this.questionIndex ++;
        }
};

class Question {
    constructor(text, options, answer) {
        this.text = text;
        this.options = options;
        this.answer = answer;
    }

    isCorrectAnswer(option) {
        return option === this.answer;
    }
};

function showQuestions(quizInstance) {
    if (quizInstance.isEnded()) {
        showScore();     
    } else {
        // show question text
        let questionText = document.getElementById("question");
        questionText.innerHTML = quizInstance.getQuestionIndex().text;
        // show options
        

        // show progress
    }
}


// make questions

let questions = [
    new Question(
        "Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"),
    new Question(
        "Cascading Style sheet stands for?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question(
        "Which is a JavaScript Framework?", ["React", "Laravel", "Django", "Sass"], "React"),
    new Question(
        "Which is a backend language?", ["PHP", "HTML", "React", "All"], "PHP"),
    new Question(
        "Which is best for Artificial intelligence?", ["React", "Laravel", "Python", "Sass"], "Python")
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

showQuestions(quiz);