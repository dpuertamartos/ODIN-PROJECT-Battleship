function isArrayInArray(arr, item){
    let item_as_string = JSON.stringify(item);
  
    let contains = arr.some(function(ele){
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }

const gameboard = () => {
    const missed = []
    const placedShips = []

    const add = (ship) => {
       placedShips.push(ship)
       return "ship added to gameboard"
    }

    const receiveAttack = (coords) => {
        const shipsHit = placedShips.filter(ship=>isArrayInArray(ship.position,coords)===true)
        console.log(shipsHit)
        if(shipsHit.length===1){return shipsHit[0]}
        else{return null}
    }

    return {placedShips, add, receiveAttack}

}

export default gameboard