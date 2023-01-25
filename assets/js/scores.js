//    HTML VARIABLES

const wrapperEl = document.querySelector(".wrapper")
const highScoresContainer = document.querySelector("#highscores")
const clearButton = document.querySelector("#clear")


// SCRIPT

// On load, get the value of entries from the local storage
const entriesArray = JSON.parse(localStorage.getItem("entries"))

// For each entry, create a list item, with the value of the entries inside the item and append that to the highscore container
entriesArray.forEach(entry => {
    const listItem = document.createElement("li")
    listItem.innerHTML = "Name: " + entry.name + " | Score : " + entry.score
    highScoresContainer.appendChild(listItem)
    
});

// This clears the local store and hides the score on the page. 
const clearStorage = function(){
    localStorage.removeItem("entries")
    highScoresContainer.classList.add("hide")
}

// EVENT LISTENER 

clearButton.addEventListener("click", clearStorage)

