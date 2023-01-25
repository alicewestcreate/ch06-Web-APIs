// -------------------------------------------------------
//                    HTML VARIABLES
// -------------------------------------------------------

let timeEl = document.getElementById("time") // timer element
let startButton = document.getElementById("start") // the start button

// All variables related the QuestionsDiv.
let questionDIV = document.querySelector("#questions") // the questions div
let questionTitleEl = document.querySelector("#question-title") // h2 element to update questions
let choiceList = document.querySelector("#choice-list") // the ordered list tag, which hold the possbile answers
let choiceItem = choiceList.querySelectorAll("button") // all the buttons, for possbile answers to go in

// All variables for end screen & scores etc 
let feedbackEl = document.querySelector("#feedback") 
let endScreen = document.querySelector("#end-screen")
let finalScoreEl = document.querySelector("#final-score") // update the final score to this element
let initials = document.querySelector("#initials") // Get the value of the initial inputted by user 
let submitButton = document.querySelector("#submit") // Attached Event lister to this item 



// -------------------------------------------------------
//                      GLOBAL VARIABLES
// -------------------------------------------------------
let questionLength = questions.length
let time = 0
let questionsAnswered = 0
let scoreCounter = 0
let initialsValue = initials.value
// -------------------------------------------------------
//                      HELPER FUNCTIONS
// -------------------------------------------------------

// ------  Show/Hide Sections ---------

const hideStartScreen = function(){
    let startScreenDiv = document.querySelector("#start-screen")
    startScreenDiv.classList.add("hide")
}
const showQuestions = function(){
    let questionsDiv = document.querySelector("#questions")
    questionsDiv.classList.remove("hide")
}  
const hideQuestions = function(){
    let questionsDiv = document.querySelector("#questions")
    questionsDiv.classList.add("hide")
}
const showFeedback = function() {
    let feedback = document.querySelector("#feedback")
    feedback.classList.remove("hide")
}
const showEndScreen = function() {
    let feedback = document.querySelector("#end-screen")
    feedback.classList.remove("hide")
}

// ------ Timer Functions ---------

let startQuiz = function() {
    // Once start button is clicked, start the game, and run functions stated
    startTimer()
    showQuestion()
    hideStartScreen()
    showQuestions()
}

let startTimer = function() {
    // Set timer to 15 seconds per question. 
    // If timer is at 0, clearInverval (stop the timer) / End quix
    // The rest of the time, subtract 1 from time at each interval
    time = 15 * questionLength
    let countDown = setInterval(function() {    
        if (time <= 0) {
            clearInterval(countDown)
            endQuiz()
        }
        timeEl.textContent = time
        time--
    }, 1000)
    return time;   

}

let timeCheck = function() {
    // Time check: if time is 0 or less, end the quiz. Else run next question. 
    if (time <= 0){
        endQuiz()
    }
    showFeedback()
    showQuestion ()
}


let endQuiz = function() {
    // At the end of the quiz, show score and the end screen.
    hideQuestions()
    showEndScreen()
    finalScore()
}

let finalScore = function () {
    // insert the final score into the finalScore element element
    finalScoreEl.innerHTML = scoreCounter
}

let storeScore = function (event) {
    // On event, update entries variable to the value of local storage, or an emtpy array, if local storage is empty
    // Create an object with input from the user and "name" and the score from the game as "score"
    // Then push that entry object to the entries array, and set the item back into the storage, via JSON stringfy.
    event.preventDefault()
    let entries = JSON.parse(localStorage.getItem("entries")) || []
    let entry = { name: initials.value.trim(), score: scoreCounter,};   
    entries.push(entry)
    localStorage.setItem("entries", JSON.stringify(entries));

    openHighScore()
}
let openHighScore = function (event) {
    // Open page in the same tab
    window.open("highscores.html", "_self")
}
// -------------------------------------------------------
//                      MAIN FUNCTIONS
// ------------------------------------------------------


let i = 0 // the value of i is needed in both showQuestion & choiceMade funcitons. 

let showQuestion = function () {
    // This function will display the next question in the question array of objects. 
    while (true){
        // if i is greater than the length of question, endQuix 
        if (i >= questionLength) {
            endQuiz()
            break
        }
        // else return the next set of questions 
        questionTitleEl.innerHTML = questions[i].question
        choiceItem[0].innerHTML = questions[i].choice[0]
        choiceItem[1].innerHTML = questions[i].choice[1]
        choiceItem[2].innerHTML = questions[i].choice[2]
        choiceItem[3].innerHTML = questions[i].choice[3]
        break
    }
}

let choiceMade = function(event) {
    //This function checks the value of the chosen button and compares against the corrosponding answer (found in the question object)
    let clickedButton = event.target.innerHTML // get value of the item clicked on
    let answer = questions[i].answer // get the value of the answer key
    if (clickedButton === answer) { // if correct, tell user, + 1  to total score. 
        feedbackContent = "Correct"
        scoreCounter ++
        feedbackEl.innerHTML = feedbackContent
    } else { // state wrong and deduct 15 second from timer
        feedbackContent = "Wrong" 
        feedbackEl.innerHTML = feedbackContent
        time = time - 15
    }
    // check time and update questions answered and the value of i
    questionsAnswered ++ 
    i ++
    timeCheck()
    return time
}
// -------------------------------------------------------
//                        EVENT LISTENERS
// -------------------------------------------------------


startButton.addEventListener("click", startQuiz)

choiceItem[0].addEventListener("click", choiceMade)
choiceItem[1].addEventListener("click", choiceMade)
choiceItem[2].addEventListener("click", choiceMade)
choiceItem[3].addEventListener("click", choiceMade)
submitButton.addEventListener("click", storeScore)
