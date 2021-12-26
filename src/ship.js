const Ship = (len) => {
    let length = len
    let hits = []

    const createHit = (position) => {
        hits.push(position)
    }

    const isSunk = () => {
        return (hits.length<length===true ? false : true)
    }

    return {length, hits, createHit, isSunk}

}

export default Ship;

