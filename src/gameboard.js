function isArrayInArray(arr, item){
    let item_as_string = JSON.stringify(item);
  
    let contains = arr.some(function(ele){
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }

const gameboard = () => {
    let missed = []
    let placedShips = []
    let gameover = false

    const add = (ship) => {
       placedShips.push(ship)
       return "ship added to gameboard"
    }

    const checkGameOver = () => {
        for(let i=0;i<placedShips.length;i++){
            if(placedShips[i].isSunk()===true){
                console.log("inside of game over", placedShips[i].isSunk() )
                gameover=true
                console.log("gameover value", gameover)
            }
            else{
                console.log("inside of game over false", placedShips[i].isSunk() )
                gameover=false
            }
        }
        return(gameover)
    }

    const receiveAttack = (coords) => {
        const shipsHit = placedShips.filter(ship=>isArrayInArray(ship.position,coords)===true)
        console.log(shipsHit.length)
        if(shipsHit.length===1){
            shipsHit[0].createHit(coords)
            return shipsHit[0]}
        else if(shipsHit.length===0){
            missed.push(coords)
            return null}
    }

    return {missed, placedShips, add, receiveAttack, checkGameOver}

}

export default gameboard