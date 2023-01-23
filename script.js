
// -------------------------------------------------------
//                    HTML VARIABLES
// -------------------------------------------------------


// Global Variable
// Questions. This is an array of objects. Each object has a value of a question, 4 choices and 1 correct answer. 
const questions = [
    // { question: "What does API stand for", 
    //     choices: ["Application Programming Interface", "Academic Performance Index", "Active Pharmaceutical Ingredients", "American Petroleum Institue"],
    //     answer: "Application Programming Interface",
    // },
    { question: "What does API stand for", 
    choices: [["Application Programming Interface", true], ["Academic Performance Index", false], ["Active Pharmaceutical Ingredients", false], ["American Petroleum Institue", false]]
    },
    { question: "This is question two", 
    choices: ["Answer1", "Answer2", "Answer3", "Answer4"],
    answer: "Answer2",
}
]



// HTML Variables:

// Get the items inside the timer and start div
let timeEl = document.getElementById("time") // timer Element
let startButton = document.getElementById("start") // the button that starts the game


// Question Div - Itens 
let questionDIV = document.querySelector("#questions") // the questions container
let questionTitleEl = document.querySelector("#question-title") // the h2 element to display the question
let question = questions[0].question // variable to hold the question information from the object.
questionTitleEl.textContent = question // setting the innter html to equal the value of question


let choiceList = document.querySelector("#choice-list") //Get the ordered List item, choiceList
let choiceItem = choiceList.querySelectorAll('li') // Gets all of the list items inside choiceList
let choiceButtons = choiceList.querySelectorAll('button') // Gets all of the list items inside choiceList



// Make the innerHTML of each item = the corrosponding object index. 
choiceItem[0].innerHTML = questions[0].choices[0][0]
choiceItem[1].innerHTML = questions[0].choices[1][0]
choiceItem[2].innerHTML = questions[0].choices[2][0]
choiceItem[3].innerHTML = questions[0].choices[3][0]

// Assign new variable for each of the innerhtml updates 
let choice1Content = choiceItem[0].innerHTML
let choice2Content = choiceItem[1].innerHTML
let choice3Content = choiceItem[2].innerHTML
let choice4Content = choiceItem[3].innerHTML

// When the button is pressed, check if the questions[0].choices[0][1] = true, if true, its correct. else its wrong.

console.log(choiceButtons)


// For each button, inside choiceButtons 
choiceButtons.forEach(element => {
    element.addEventListener("click", ()=> {
        console.log(questions[0].choices[0][1])
        console.log(element)
        // if (element ===)
    }) 
});







// Create a new element inside question div 


// // creating the text and storing in variable


// console.log(choice)


// addach the new text to the new element

// find the ostion where the new e;e,emt sjpi;d ne added

// isert the new element into its psotion 






// Items to get:
// Get #timeSpan - this will display the timer

// Get #start-screen - change class from start to hide 

// Get #questions - change class from hide to TBC
    // Get #question-title   - this will display each question
    // Get choices - this will display the possible choices 

// Get #end-screen - remove hide 
    // Get  #final-score - input the score 
    // Get submit - get the value of the input and store somewhere? 

// Create & get feedback tag. this will display wrong or correct






startButton.addEventListener("click", ()=>{
    // Start countdown timer
    startTimer()
    // hide startScreenDiv from page
    let startScreenDiv = document.querySelector("#start-screen")
    startScreenDiv.classList.add("hide")
    
    let questionsDiv = document.querySelector("#questions")
    questionsDiv.classList.remove("hide")


    // start by putting something on the screen
    // remove div 'questions' class of hide
})


let time = 5  // Update code for time to equal questions.length x 15 seconds 

let startTimer = function() {
    // startTimer function, starts a countDown function, which will minus 1 from time until time = 0
    // if time = 0, clear the interval timer
    let countDown = setInterval(function() {     
        if (time <= 0) {
            // if there is no time left, clearInterval
            clearInterval(countDown)
        }
        // this set the text content of the time element to the value of time. 
        timeEl.textContent = time
        time--
    }, 1000)
    // Then switch to endscreen()
}















// -------------------------------------------------------
//                      GLOBAL VARIABLES
// -------------------------------------------------------


// CorrectAnswers = 0

// NumberOfQuestions = 0



// -------------------------------------------------------
//                      HELPER FUNCTIONS
// -------------------------------------------------------


// ------ Display show/hide Functions ---------

// displayStarterScreen(): 
    // Calls displaySwitch()

// displayFirstQuestion():
    // Calls displaySwitch()

// displayEndScreen():
    // Calls displaySwitch()

// displaySwitch()
        // This function switch a class from show or hide
        // If show change to hide 
        // else hide to show 


// ------ Timer Functions ---------


// timer() function: 
        // It needs to start, minus X seconds, stop
        // if timer == 0:
            // end of game 


// deductTimers function:
        // Minus X amount of seconds from timer 


// ------ Question Functions ---------
    

// questionCounter() function:
    // This function counts number of questions answered

        // let maxQuestions = false  
        // let count = 0
        // length = questions.length (might need to make this global)

        // while count is > questions.length 
            // maxQuestions == True
        
            // return maxQuestions
         
    
// scoreCounter() function: 
        // Count number of questions answered CORRECTLY. 





// -------------------------------------------------------
//                      MAIN FUNCTIONS
// ------------------------------------------------------



// displayNextQuestion() function: 
    // Each time choiceButton is clicked
        // Display next question for list.     


// question varible
// Erich's example: array of objects
/*  
    const questions = [
        {question: 'This is q1', answers: [a1, a2, a3, a4], correct: a2},
        {question: 'This is q2', answers: [a1, a2, a3, a4], correct: a4},

    ]

*/


    // A list of objects?
        // Question: Value
        // Answer: Value 
        // Wrong1: Value
        // Wrong2: Value
        // Wrong3: Value
    // Or Nested List: 
        // i[0] - Question 
        // i[1] - Answer
        // i[2] - Wrong
        // i[3] - Wrong
        // i[4] - Wrong






// -------------------------------------------------------
//                        SCRIPT
// -------------------------------------------------------



    // startButton-Onclick
        // timer() function called 
        // displaySwitch()- hide Starter Div
        // displaySwitch()- show Question Div
        // displayFirstQuestion()

// While timer is > 0 : 

    // choiceButton - Onclick
        // 1. CHECK 
        // if button is True:
            // add 1 to scoreCounter()
        // else if button is False
            // deductTimer()

        // 2. NumberOfQuestions ++
        
        // 3. CHECK
        // If timers() > 0 OR maxQuestion == False 
            // displayNextQuestion() 
            
        // Else
            // displayEndScreen()

        // 4. Display previous feedback
    





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