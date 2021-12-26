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
 
    const play = (attackedPosition, enemy) => {
        if(isArrayInArray(played,attackedPosition)){
            return null
        }
        else if (attackedPosition==="random"){
            const generatedPlay = generateCoord()
            enemy.board.receiveAttack(generatedPlay)
            played.push(generatedPlay)
        }
        else{
            enemy.board.receiveAttack(attackedPosition);
            played.push(attackedPosition);
        }
        swapTurn();
        enemy.swapTurn();
        return attackedPosition    
    };

    return {board, mode, position, play, swapTurn, getTurn};
};

export default Player;