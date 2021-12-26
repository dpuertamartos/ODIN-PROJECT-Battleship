const Ship = (len) => {
    let length = len
    let hits = []
    let position = []

    const createHit = (position) => {
        hits.push(position)
    }

    const isSunk = () => {
        return (hits.length<length===true ? false : true)
    }

    const place = (start,end) => {
        let horizontal = true
        if(start[0]===end[0]){
            horizontal = false
        }
        
        for(let i=0;i<length;i++){
            if(horizontal){
                position.push([start[0]+i,start[1]])
            }
            else{
                position.push([start[0],start[1]+i])
            }
        }  
    }

    return {length, hits, position, place, createHit, isSunk}

}

export default Ship;

