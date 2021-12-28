import { isArrayInArray } from "./gameboard";


const Player = (mod, pos, gameboard) => {
    let board = gameboard;
    let mode = mod;
    let position = pos;
    let turn = false;
    if(pos===1){
        turn = true
    }
    let played = [];
    let lastplay;

    const generateNotPlayed = () => {
        let coordsGen = []
        for(let i=0;i<board.size;i++){
            for(let j=0;j<board.size;j++){
                coordsGen.push([i,j])
            }
        }
        return coordsGen;
    }

    let notPlayed = generateNotPlayed()

    const getTurn = () => {
        return turn
    }

    const swapTurn = () => {
        turn = !turn
    };

/*     before generating the coord, updates list of notplayed moves 
    to choose from them, therefore never repeating random moves */
    const generateCoord = () => {
        notPlayed = notPlayed.filter(coord => !isArrayInArray(played, coord))
        const randomI = Math.floor(Math.random()*notPlayed.length)
        return notPlayed[randomI]
    }

    const generateProximalCoord = () => {
        const adjacents = [[lastplay[0],lastplay[1]+1],[lastplay[0]+1,lastplay[1]],
        [lastplay[0]-1,lastplay[1]],[lastplay[0],lastplay[1]-1]]
        notPlayed = notPlayed.filter(coord => !isArrayInArray(played, coord))
        const adjacentsNotPlayed = adjacents.filter(coord=>isArrayInArray(notPlayed,coord))
        if(adjacentsNotPlayed.length>0){
            const randomI = Math.floor(Math.random()*adjacentsNotPlayed.length)
            return adjacentsNotPlayed[randomI]
        }
        else{
            return null
        }
    }
 
    const play = (attackedPosition, enemy) => {
        let response;
        console.log("generating play")

        if(isArrayInArray(played,attackedPosition)){
            return "already played"
        }
        if (attackedPosition==="random"){
            const generatedPlay = generateCoord()
            response = [enemy.board.receiveAttack(generatedPlay),generatedPlay]
            played.push(generatedPlay)
            if(response[0]==="missed"){
                swapTurn();
                enemy.swapTurn();
            }
            lastplay = generatedPlay
        }
        else if (attackedPosition==="brained"){
            const generatedPlay = generateProximalCoord()
            if(generatedPlay!==null){
                response = [enemy.board.receiveAttack(generatedPlay),generatedPlay]
                played.push(generatedPlay)
                if(response[0]==="missed"){
                    swapTurn();
                    enemy.swapTurn();
                }
                lastplay = generatedPlay
            }
            else{
                const regeneratedPlay = generateCoord()
                response = [enemy.board.receiveAttack(regeneratedPlay),regeneratedPlay]
                played.push(regeneratedPlay)
                if(response[0]==="missed"){
                    swapTurn();
                    enemy.swapTurn();
                }   
                lastplay = regeneratedPlay
            }
        }
        else{
            console.log("inside of else")
            response = enemy.board.receiveAttack(attackedPosition);
            played.push(attackedPosition);
            if(response==="missed"){
                swapTurn();
                enemy.swapTurn();
            }
            lastplay = attackedPosition
        }
        console.log("finalizing play")
        return response   
    };

    return {board, mode, position, play, swapTurn, getTurn};
};

export default Player;