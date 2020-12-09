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
            for(letter in currentQuestion.possAnswers){
                
                // Add an HTML radio button - add "backticks" (` `) around HTML 
                possAnswers.push(               // Label element allows users to click anywhere on the answer text to select that answer (more accessible) (if this label section wasn't here, user would have to click on the radio button itself)
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}"></input>
                        ${letter} : 
                        ${currentQuestion.possAnswers[letter]}
                    </label>`
                );
            }

            // Add this question & its answers to the output (display question for user to answer)
            output.push(
                `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${possAnswers.join("")} </div>
                </div>`
            );                                                              // join expression takes list of answers & puts them together in one string that we can output into our answers div
        }
    );

    // Combine outpit list into 1 string of HTML & put it on the page
    quizContainer.innerHTML = output.join("");
};


// Function - Show Quiz results - Run when user clicks submit button
    // function loops over the answers, checks them, & shows the results 
function showResults() {
    // Call answer containers from quiz - create variables to keep track of user's current answer & total number of correct answers 
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // Keep track of user's answers
    var correctCounter = 0;

    // forEach question - loop through each question & check the answers 
    questions.forEach( (currentQuestion, questionNumber) => {
        // Find selected answer
        var answerContainer = answerContainers[questionNumber];                         // Looking inside answer container for current question
        var selector = `input[name=question${questionNumber}]:checked`;                 // Defining CSS Selector that will find which radio button is checked 
        var userAnswer = (answerContainer.querySelector(selector) || {}).nodeValue;     // querySelector searches for CSS selector in previously defined answerContainer to find which answer's radio button is checked 
            // Get reference to selected answer element, if that doesn't exist, use an empty object & get the value of whatever was in the first statement --- Get the value of ^ answer w/ .nodeValue 
                // As a result, the value will either be the user's answer or undefined, which means a user can skip a question w/o crashing quiz 

        // if statement - if correct / else incorrect 
        if (userAnswer === currentQuestion.correctAnswer) {
            // Add to the correct counter
            correctCounter++;
            // Color the answers green
            answerContainer[questionNumber].style.color = "green";
        }
        // if incorrect or skipped 
        else {
            // Color the answers red
            answerContainer[questionNumber].style.color = "red";
        }
    });
    // Show # of correct answers out of total 
    resultsContainer.innerHTML = `${correctCounter} out of ${questions.length}`;
};

// Display quiz in real time
buildQuiz();

// Slide Pagnation
var prevBtn = document.getElementById("previous");
var nextBtn = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

// Function to show a slide 
function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");      // Hides current slide 
    slides[n].classList.add("active-slide");                    // Shows the new slide 
    currentSlide = n;                                           // Updates current slide number 
    if (currentSlide === 0) {                                   // if on the 1st slide, hide the prev slide button, o.w. show the button
        prevBtn.style.display = "none";
    }
    else {
        prevBtn.style.display = "inline-block";
    }
    if (currentSlide === slides.length-1) {                     // if on the last slide, hide the next slide button & show the submit button
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
    }
    else {                                                      // o.w. show the next slide button & hide the submit (for now)
        nextBtn.style.display = "inline-block";
        submitBtn.style.display = "none";
    }
};

// Adding functionality to navigation buttons 
    // Use showSlide function in each of these functions 
function showNextSlide() {
    showSlide(currentSlide + 1);
};
function showPrevSlide() {
    showSlide(currentSlide - 1);
};

// calls funtion to show the first slide 
showSlide(currentSlide);

// On submit, show results to user 
prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);
submitBtn.addEventListener("click", showResults);