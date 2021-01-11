var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", buildCard)

// Questions 
var questions = [
    // 1 - Questions object, w/in it there's a question string and then an answers array, and then a correct answer string
    // Looping over something is an array method 
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Technology Masking Link",
            "Hydro Technological Metric Language",
            "Hypertext Markup Language"
        ],
        correctAnswer: "Hypertext Markup Language"
    },
    // 2
    {
        question: "What does CSS Stand for?",
        answers: [
            "Cascading Style Sheets",
            "Conforming Selector Styles",
            "Converging Style Selectors"
        ],
        correctAnswer: "Cascading Style Sheets"
    },
    // 3
    {
        question: "What does # define in an HTML file?",
        answers: [
            "ID Name",
            "Class Name",
            "Tag"
        ],
        correctAnswer: "ID Name"
    },
    // 4
    {
        question: "What does '.' call in a HTML/CSS/JS file?",
        answers: [
            "Tag",
            "Class Name",
            "ID Name"
        ],
        correctAnswer: "Class Name"
    },
    // 5
    {
        question: "Where do you link a CSS file?",
        answers: [
            "Body Tag",
            "Footer",
            "Head Tag"
        ],
        correctAnswer: "Head Tag"
    },
    // 6
    {
        question: "Where do you link a JS file?",
        answers: [
            "Body Tag",
            "Head Tag",
            "Header"
        ],
        correctAnswer: "Body Tag"
    },
    // 7
    {
        question: "Where do you link jQuery CDN?",
        answers: [
            "Body Tag",
            "Head Tag",
            "Footer"
        ],
        correctAnswer: "Head Tag"
    },
    // 8
    {
        question: "Where do you link external CSS style sheets from Bootstrap?",
        answers: [
            "Body Tag",
            "Footer",
            "Head Tag"
        ],
        correctAnswer: "Head Tag"
    },
    // 9
    {
        question: "What is an API?",
        answers: [
            "Application Programming Interface",
            "Application Planner Interface",
            "Application Printing Initializer"
        ],
        correctAnswer: "Application Programming Interface"
    },
    // 10
    {
        question: "Where do you link an API?",
        answers: [
            "HTML File",
            "Javascript File",
            "CSS File"
        ],
        correctAnswer: "Javascript File"
    },
];


// Slide Pagnation
var prevBtn = document.getElementById("previous");
var nextBtn = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
var index = 0;


// Function - build quiz itself - run immediately 
function buildCard() {
    // Append things to the page (DOM interactions)
    var currentQuestion = questions[index].question;

    var questionTitle = document.getElementById("questionTitle"); 

    var answers = document.getElementById("answers");
        // Dumps the previous question's choices for the next question's choices 
        // Makes children in div go away 
    answers.innerHTML = "";

    questionTitle.textContent = currentQuestion;

    questions[index].answers.forEach(function (answer) {
        var button = document.createElement("button"); 
            // Creating an element that doesn't yet exist in the DOM
        button.textContent = answer;
            // Creates 3 buttons w/ different answers (creates as many options as written in object)
        button.setAttribute("value", answer);

        button.onclick = evaluateAnswer; 

        answers.appendChild(button);
    });

};

function evaluateAnswer() {
    console.log(this.value);
    //use if statements to evaluate the answers
    if (condition) {
        
    }

    index++;
    if (index === questions.length) {
        console.log("game over");
        //create a function to end the game
    } else {
        buildCard();
    };
   
};





// Function - Show Quiz results - Run when user clicks submit button
// function loops over the answers, checks them, & shows the results 
//function showResults() {
//     // Call answer containers from quiz - create variables to keep track of user's current answer & total number of correct answers 
//     var answerContainers = quizContainer.querySelectorAll(".answers");

//     // Keep track of user's answers
//     var numCorrect = 0;

//     // forEach question - loop through each question & check the answers 
//     questions.forEach((currentQuestion, questionNumber) => {
//         // Find selected answer
//         var answerContainer = answerContainers[questionNumber];                         // Looking inside answer container for current question
//         var selector = `input[name=question${questionNumber}]:checked`;                 // Defining CSS Selector that will find which radio button is checked 
//         var userAnswer = (answerContainer.querySelector(selector) || {}).value;     // querySelector searches for CSS selector in previously defined answerContainer to find which answer's radio button is checked 
//         // Get reference to selected answer element, if that doesn't exist, use an empty object & get the value of whatever was in the first statement --- Get the value of ^ answer w/ .nodeValue 
//         // As a result, the value will either be the user's answer or undefined, which means a user can skip a question w/o crashing quiz 

//         // if statement - if correct / else incorrect 
//         if (userAnswer === currentQuestion.correctAnswer) {
//             // Add to the correct counter
//             numCorrect++;
//             // Color the answers green
//             answerContainer[questionNumber].style.color = "green";
//         }
//         // if incorrect or skipped 
//         else {
//             // Color the answers red
//             answerContainer[questionNumber].style.color = "red";
//         }
//     });
//     // Show # of correct answers out of total 
//     resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
// };

// // Display quiz in real time
// buildCard();

// // var for active slide 

// // Function to show a slide --- Have to add class for active slide 
// function showSlide(n) {
//     slides[currentSlide].classList.remove("active-slide");      // Hides current slide 
//     slides[n].classList.add("active-slide");                    // Shows the new slide 
//     currentSlide = n;                                           // Updates current slide number 
//     if (currentSlide === 0) {                                   // if on the 1st slide, hide the prev slide button, o.w. show the button
//         prevBtn.style.display = "none";
//     }
//     else {
//         prevBtn.style.display = "inline-block";
//     }
//     if (currentSlide === slides.length - 1) {                     // if on the last slide, hide the next slide button & show the submit button
//         nextBtn.style.display = "none";
//         submitBtn.style.display = "inline-block";
//     }
//     else {                                                      // o.w. show the next slide button & hide the submit (for now)
//         nextBtn.style.display = "inline-block";
//         submitBtn.style.display = "none";
//     }
// };

// // Adding functionality to navigation buttons 
// // Use showSlide function in each of these functions 
// function showNextSlide() {
//     showSlide(currentSlide + 1);
// };
// function showPrevSlide() {
//     showSlide(currentSlide - 1);
// };

// // calls funtion to show the first slide 
// showSlide(currentSlide);


// // Highscores 
// var result = { userName: user, score: timeScore };
// var savedScores = localStorage.getItem("highscore") || "[]";     // Get the score, or the intial value if empty 

// var highscores = [JSON.parse(savedScores), result]           // Add the result 
//     .sort((a, b) => b.score - a.score)                          // Score descending 
//     .slice(0, 5);        // Take highest 5 (scores)

// localStorage.setItem("highscore", JSON.stringify(highscores));   // Store the scores 


// // Vars for Timer
// var timeInMinutes = 10;
// var currentTime = Date.parse(new Date());
// var deadline = new Date(currentTime + timeInMinutes * 60 * 1000);

// // Timer Function
// function getTimeRemaining(endtime) {
//     var total = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = Math.floor((total / 1000) % 60);

//     return {
//         total,
//         seconds
//     };
// };

// function initializeClock(id, endtime) {
//     var clock = document.getElementById(id);
//     var secondsSpan = clock.querySelector(".seconds");

//     function updateClock() {
//         var t = getTimeRemaining(endtime);

//         secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

//         if (t.total <= 0) {
//             clearInterval(timeInterval);
//         }
//     }
//     updateClock();
//     var timeInterval = setInterval(updateClock, 1000);
// };

// // Call clock 
// initializeClock("clockdiv", deadline);


// // On submit, show results to user 
// prevBtn.addEventListener("click", showPrevSlide);
// nextBtn.addEventListener("click", showNextSlide);
// submitBtn.addEventListener("click", showResults);