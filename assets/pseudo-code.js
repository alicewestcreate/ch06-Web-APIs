
// -------------------------------------------------------
//                    HTML VARIABLES
// -------------------------------------------------------



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
// -------------------------------------------------------




// displayNextQuestion() function: 
    // Each time choiceButton is clicked
        // Display next question for list.     


// question varible
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