import Player from "./player.js"
import Gameboard from "./gameboard.js"
import Controller from "./controller.js"
import Interface from "./interface.js"
import css from "./style.css"

const gameboard1 = Gameboard()
const gameboard2 = Gameboard()
const player = Player("player", 1, gameboard1)
const computer = Player("computer", 2, gameboard2)

const controller = Controller()
const visual = Interface()

controller.generateShips(player)
controller.generateShips(computer)
visual.initialize(player,computer)

const passTurn = () => {
    player.board.checkGameOver()
    if(computer.getTurn()===true){
        const response = computer.play("random",player)
        visual.proccessComputerPlay(response)
    }
    computer.board.checkGameOver()
}



export {passTurn}