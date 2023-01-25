


const wrapperEl = document.querySelector(".wrapper")
const highScoresContainer = document.querySelector("#highscores")
const listItem = document.createElement("li")

const listItemContent = JSON.parse(localStorage.getItem("entry"))

listItem.innerHTML = listItemContent




highScoresContainer.appendChild(listItem)