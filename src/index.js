import Player from "./player.js"
import Gameboard from "./gameboard.js"
import Controller from "./controller.js"
import Interface from "./interface.js"
import css from "./style.css"
import backgroundSound from "./assets/music.mp3"

const gameboard1 = Gameboard()
const gameboard2 = Gameboard()
const player = Player("player", 1, gameboard1)
const computer = Player("computer", 2, gameboard2)

const visual = Interface()

const playButton = document.querySelector(".play")
const modal = document.querySelector(".modal")
let sound = new Audio(backgroundSound)
playButton.addEventListener("click", ()=>{
    const playerName = document.querySelector("#inputName").value
    console.log(playerName)
    sound.play()
    visual.changePlayerName(playerName)
    visual.createPlacingBoard(2,[])
})

const initializeGame = (controller) => {
    controller.generateShips(player)
    controller.generatePredetermined(computer)
    visual.initialize(player,computer)
    modal.remove()
}

export {initializeGame}





