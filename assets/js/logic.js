// -------------------------------------------------------
//                    HTML VARIABLES
// -------------------------------------------------------


// All items related the te
let timeEl = document.getElementById("time") // timer Element
let startButton = document.getElementById("start") // the button that starts the game


// All variables related the QuestionsDiv.
let questionDIV = document.querySelector("#questions") // the questions container
let questionTitleEl = document.querySelector("#question-title") // the h2 element to display the question
let choiceList = document.querySelector("#choice-list") //Get the ordered List item, choiceList
let choiceItem = choiceList.querySelectorAll("button") // Gets all of the list items inside choiceList

let endScreen = document.querySelector("#end-screen")
let finalScoreEl = document.querySelector("#final-score")
let initials = document.querySelector("#initials")
let submitButton = document.querySelector("#submit")

// Feedback Div items
let feedbackEl = document.querySelector("#feedback") 



// -------------------------------------------------------
//                      GLOBAL VARIABLES
// -------------------------------------------------------


let questionLength = questions.length
let questionsAnswered = 0
let scoreCounter = 0
let time = 0 
let initialsValue = initials.value



// -------------------------------------------------------
//                      HELPER FUNCTIONS
// -------------------------------------------------------


// ------ Display show/hide Functions ---------

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


// Start Quiz

let startQuiz = function() {
    // Once start button has been clicked, run all these functions. 
    startTimer()
    runQuestion()
    hideStartScreen()
    showQuestions()
}


let startTimer = function() {
    // startTimer function, starts a countDown function, which will minus 1 from time until time = 0
    // if time = 0, clear the interval timer
    time = 15 * questionLength 
    let countDown = setInterval(function() {     
        if (time <= 0) {
            // if there is no time left, clearInterval
            clearInterval(countDown)
        }
        // this set the text content of the time element to the value of time. 
        timeEl.textContent = time
        time--
    }, 1000)


    return time;
    
    // Then switch to endscreen()
}

let timeCheck = function() {

    if (time <= 0){
        endQuiz()
    }
    showFeedback()
    runQuestion ()

}

let endQuiz = function() {
    hideQuestions()
    showEndScreen()
    finalScore()
}

let finalScore = function () {
    finalScoreEl.innerHTML = scoreCounter
}

let storeScore = function (event) {
    event.preventDefault()

    // Get items from local storage
    let entries = JSON.parse(localStorage.getItem("entries")) || []

    let entry = {
        name: initials.value.trim(),
        score: scoreCounter,
      };    

    entries.push(entry)
    localStorage.setItem("entries", JSON.stringify(entries));
    openHighScore()

}

let openHighScore = function (event) {
    window.open("highscores.html", "_self")

}



// -------------------------------------------------------
//                      MAIN FUNCTIONS
// ------------------------------------------------------

// Display next set of questions

let i = -1 
// the value of i iterates over each object found in the question array.
//  exmplain that i needs to be -1 one, so that the value of i in both runquestion and choiceMade are the same. 

let runQuestion = function () {
    while (true){
        i ++
        // if i is greater than the length of question, break the loop. 
        if (i >= questionLength) {
            endQuiz()
            break
        }
        questionTitleEl.innerHTML = questions[i].question
        choiceItem[0].innerHTML = questions[i].choice[0]
        choiceItem[1].innerHTML = questions[i].choice[1]
        choiceItem[2].innerHTML = questions[i].choice[2]
        choiceItem[3].innerHTML = questions[i].choice[3]
        break
    }

}

// Check the choicen element against answer key in object. 

let choiceMade = function(event) {
    //This function checks the value of the chosen button and compares against the corrosponding answer.
    let clickedButton = event.target.innerHTML
    console.log(event)
    console.log(clickedButton)
    let answer = questions[i].answer

    if (clickedButton === answer) {
        feedbackContent = "Correct"
        scoreCounter ++
        feedbackEl.innerHTML = feedbackContent

    } else {
        feedbackContent = "Wrong"
        feedbackEl.innerHTML = feedbackContent
        time = time - 15
    }

    questionsAnswered ++
    timeCheck()
    return time

}




// -------------------------------------------------------
//                        EVENT LISTENERS 
// -------------------------------------------------------

 
startButton.addEventListener("click", startQuiz) 

// Creatr an event listen for the choiceList
choiceList.addEventListener("click", choiceMade)

submitButton.addEventListener("click", storeScore)


// -------------------------------------------------------
//                 HTML RETUNED VARIABLES
// -------------------------------------------------------


/* 
1. Get Item 

2. Function - Make the item do something.
    a - think what is being putted
    b - what is happening inide 
    c - what is being outputted 

3. Set item 
*/


// Load init function from Local Storage 
    // Update the wins/losses

// Click button (launch timer, - Set Interval)
// 