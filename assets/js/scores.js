


const wrapperEl = document.querySelector(".wrapper")
const highScoresContainer = document.querySelector("#highscores")
const clearButton = document.querySelector("#clear")


const entriesArray = JSON.parse(localStorage.getItem("entries"))

entriesArray.forEach(entry => {
    const listItem = document.createElement("li")
    listItem.innerHTML = "Name: " + entry.name + " | Score : " + entry.score
    highScoresContainer.appendChild(listItem)
    
});

const clearStorage = function(){
    localStorage.removeItem("entries")
    highScoresContainer.classList.add("hide")


}


clearButton.addEventListener("click", clearStorage)




