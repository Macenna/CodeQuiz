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
    // Variable to store HTML output
    var output = [];

    // Method to call each question 
    questions.forEach(                                      // forEach loop returns: current value, the index, & the array itself as parameters 
        (currentQuestion, questionNumber) => {                     // => Arrow function for operations - we only need current value & index - so name currentQuestion & questionNumber, respectfully 
            // Local var to store list of possible answers 
            var possAnswers = [];
            // for loop for each multiple choice option 
            for(letter in currentQuestion.answers){
                
                // Add an HTML radio button
                possAnswers.push(
                    <label>
                        <input type="radio" name="question${questionNumber}" value="${letter}"></input>
                        ${letter} : 
                        ${currentQuestion.possAnswers[letter]}
                    </label>
                );
            }

            // Add this question & its answers to the output (display question for user to answer)
            output.push(
                <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${possAnswers.join("")} </div>
            );
        }
    );

    // Combine outpit list into 1 string of HTML & put it on the page
    quizContainer.innerHTML = output.join("");
};

// Function - Show Quiz results - Run when user clicks submit button
function showResults() {

};

// Display quiz in real time
buildQuiz();

// On submit, show results to user 
submitBtn.addEventListener("click", showResults);