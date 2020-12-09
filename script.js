var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitBtn = document.getElementById("submit");

// Questions 
var questions = [
        // 1
    {question: "Question 1 goes here?",
    answers: {
        a: "first answer",
        b: "second",
        c: "third"
    },
    correctAnswer: "c"},
        // 2
    {question: "Question 2 goes here?",
    answers: {
        a: "first answer",
        b: "second",
        c: "third"
    },
    correctAnswer: "a"},
        // 3
    {question: "Question 3 goes here?",
    answers: {
        a: "first answer",
        b: "second",
        c: "third"
    },
    correctAnswer: "a"},
        // 4
    {question: "Question 4 goes here?",
    answers: {
        a: "first answer",
        b: "second",
        c: "third"
    },
    correctAnswer: "b"},
        // 5
    {question: "Question 5 goes here?",
    answers: {
        a: "first answer",
        b: "second",
        c: "third"
    },
    correctAnswer: "c"},
        // 6
    {question: "Question 6 goes here?",
    answers: {
        a: "first answer",
        b: "second",
        c: "third"
    },
    correctAnswer: "a"},
        // 7
    {question: "Question 7 goes here?",
    answers: {
        a: "first answer",
        b: "second",
        c: "third"
    },
    correctAnswer: "b"},
        // 8
    {question: "Question 8 goes here?",
    answers: {
        a: "first answer",
        b: "second",
        c: "third"
    },
    correctAnswer: "c"},
        // 9
    {question: "Question 9 goes here?",
    answers: {
        a: "first answer",
        b: "second",
        c: "third"
    },
    correctAnswer: "a"},
        // 10
    {question: "Question 10 goes here?",
    answers: {
        a: "first answer",
        b: "second",
        c: "third"
    },
    correctAnswer: "b"},
];



// Function - build quiz itself - run immediately 
function buildQuiz() {

};

// Function - Show Quiz results - Run when user clicks submit button
function showResults() {

};

// Display quiz in real time
buildQuiz();

// On submit, show results to user 
submitBtn.addEventListener("click", showResults);