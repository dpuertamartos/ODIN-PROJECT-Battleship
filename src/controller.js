import Ship from "./ship.js"

const controller = () => {
    let count = 0
    let arrayLengths = [2,2,2,2,3,3,3,4,6]
    let startingBoatsAuto = [
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
    let mockShipsForPlacingBoard = []
    let startingBoats = [] 

    const generateShips = (player) => {
        for(let i=0;i<startingBoats.length;i++){
            const newShip = Ship(startingBoats[i][0])
            newShip.place(startingBoats[i][1],startingBoats[i][2])
            player.board.add(newShip)
        }
    }

    const generatePredetermined = (player) => {
        for(let i=0;i<startingBoatsAuto.length;i++){
            const newShip = Ship(startingBoatsAuto[i][0])
            newShip.place(startingBoatsAuto[i][1],startingBoatsAuto[i][2])
            player.board.add(newShip)
        }
    }

    const saveStartingBoat = (length,start,end) => {
        startingBoats.push([length,start,end])
        const mockShip = Ship(length)
        mockShip.place(start,end)
        mockShipsForPlacingBoard.push(mockShip)
        count+=1
        console.log("Mockships", mockShipsForPlacingBoard)
        if(count<9){
            return ["create",arrayLengths[count],mockShipsForPlacingBoard]
        }
        else{
            return [null,null,mockShipsForPlacingBoard]
        }
    }

    return {generateShips, generatePredetermined, saveStartingBoat}
}

export default controller;


