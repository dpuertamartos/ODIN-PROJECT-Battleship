import Ship from "./ship.js"

const startingBoats = [
    [2,[0,0],[1,0]],
    [2,[5,5],[5,6]],
    [2,[0,7],[0,7]],
    [2,[9,2],[9,3]],
    [3,[3,0],[3,2]],
    [3,[5,2],[7,2]],
    [3,[9,5],[9,7]],
    [4,[0,2],[0,5]],
    [6,[4,9],[9,9]]
]

const controller = () => {
    const generateShips = (player) => {
        for(let i=0;i<startingBoats.length;i++){
            const newShip = Ship(startingBoats[i][0])
            newShip.place(startingBoats[i][1],startingBoats[i][2])
            player.board.add(newShip)
        }
    }
    return {generateShips}
}

export default controller;


