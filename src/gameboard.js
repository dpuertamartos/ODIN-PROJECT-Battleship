function isArrayInArray(arr, item){
    let item_as_string = JSON.stringify(item);
  
    let contains = arr.some(function(ele){
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }

const gameboard = () => {
    let size = 10
    let missed = []
    let placedShips = []
    let gameover = false

    const add = (ship) => {
       placedShips.push(ship)
       return "ship added to gameboard"
    }

    const checkGameOver = () => {
        const notSunk = placedShips.filter(ship=>ship.isSunk()===false)
        if(notSunk.length===0){
            gameover=true
        }
        console.log(gameover)
        return(gameover)
    }

    const receiveAttack = (coords) => {
        const shipsHit = placedShips.filter(ship=>isArrayInArray(ship.position,coords)===true)
        if(shipsHit.length===1){
            shipsHit[0].createHit(coords)
            return shipsHit[0]}
        else if(shipsHit.length===0){
            missed.push(coords)
            return "missed"}
    }

    return {missed, size, placedShips, add, receiveAttack, checkGameOver}

}

export {isArrayInArray}
export default gameboard