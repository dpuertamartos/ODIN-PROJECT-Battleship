const gameboard = () => {
    const missed = []
    const placedShips = []

    const add = (ship) => {
       placedShips.push(ship)
       return "ship added to gameboard"
    }

    return {placedShips, add}

}

export default gameboard