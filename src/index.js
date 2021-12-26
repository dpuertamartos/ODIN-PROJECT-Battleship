import Player from "./player.js"
import Ship from "./ship.js"
import Gameboard from "./gameboard.js"

const gameboard1 = Gameboard()
const gameboard2 = Gameboard()
const player = Player("player", 1, gameboard1)
const computer = Player("computer", 2, gameboard2)

console.log(player.getTurn())
console.log(computer.getTurn())

player.swapTurn()

console.log(player.getTurn())

