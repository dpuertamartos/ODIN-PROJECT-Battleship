import { isArrayInArray } from "./gameboard"
import { passTurn } from "./index.js"
import boatImage from "./img/boat.png"
import blankImage from "./img/blank.png"
import emptyImage from "./img/empty.png"

const interfc = () => {

    const getPlacedPositions = (ships) => {
        let placedPositions = []
        for(let i=0;i<ships.length;i++){
            placedPositions=placedPositions.concat(ships[i].position)
        }
        return placedPositions
    }

    const addImg = (col, imgadded) =>{    
        const img = document.createElement("img")
        img.clasName = "img-fluid"
        img.setAttribute("class","img-fluid imgsquare")
        img.src = imgadded
        col.append(img)
    }

    const proccessComputerPlay = (response, c, p) => {
        const row = response[1][0].toString()
        const col = response[1][1].toString()
        const selectedSquare = document.querySelector(`[row="${row}"][col="${col}"]`)
        if(response[0]==="missed"){
            addImg(selectedSquare,emptyImage)
        }
        else{
            addImg(selectedSquare,boatImage)
            computerPlay(c,p)
        }
    }

    const computerPlay = (c,p) => {
        const response = c.play("random",p)
        proccessComputerPlay(response, c, p)
    }

    
    const createSquareClickEvent = (square, player, enemy) => {
        square.addEventListener("click", ()=>{
            if(player.getTurn()===false&&player.board.checkGameOver()===false&&enemy.board.checkGameOver()===false){  
                const rowAttacked = Number(square.getAttribute("row"))
                const colAttacked = Number(square.getAttribute("col"))
                const response = enemy.play([rowAttacked, colAttacked],player)
                if(response==="missed"){
                    addImg(square,emptyImage)
                    if(player.getTurn()===true){
                        computerPlay(player,enemy)
                        if(enemy.board.checkGameOver()){
                            gameOver(player.position)
                            createNotification("computer won")
                        }
                    }
                }
                else if(response==="already played"){
                    createNotification("square already played!!")
                }
                else{
                    addImg(square,boatImage)
                    if(player.board.checkGameOver()){
                        gameOver(enemy.position)
                        createNotification("player 1 won")
                    }
                }
            }
            else if(player.board.checkGameOver()===true||enemy.board.checkGameOver()===false){
                createNotification("game is over, relax")
            }
            else{
                createNotification("computer turn, relax")
                console.log("computer turn",player.getTurn(),"player turn",enemy.getTurn())
            }
        })
    }

    const createNotification = (notification)=>{
        const notContainer = document.querySelector("#notification")
        notContainer.textContent=notification
        setTimeout(() => notContainer.textContent = "",2000)
    }

    const createBoard = (container,player,enemy) => {
        const ships = player.board.placedShips
        const placedPositions = getPlacedPositions(ships)
        console.log("placedPositions", placedPositions)

        for(let i=0;i<player.board.size;i++){
            const row = document.createElement("div")
            row.className="row"
            for(let j=0;j<player.board.size;j++){
                const col = document.createElement("div")
                col.className="col square d-flex justify-content-center"
                col.setAttribute("row",`${i}`)
                col.setAttribute("col",`${j}`)
                if(player.mode==="computer"){
                    createSquareClickEvent(col, player, enemy)
                }
                row.append(col)
            }
            container.append(row)
        }
    }

    const initialize = (player1,player2) => {
        const g1container = document.querySelector("#player1board")
        createBoard(g1container,player1,player2)
        const g2container = document.querySelector("#player2board")
        createBoard(g2container,player2,player1)
        createNotification("GAME START")
    }

    const gameOver = (position) => {
        if(position===1){
            const ownBoard = document.querySelector("#player1board")
            ownBoard.textContent = ""
            const attackedBoard = document.querySelector("#player2board")
            attackedBoard.classList.add("boardDestroyed")
        }
        else{
            const ownBoard = document.querySelector("#player2board")
            ownBoard.textContent = ""
            const attackedBoard = document.querySelector("#player1board")
            attackedBoard.classList.add("boardDestroyed")
        }
    }

    return {initialize, addImg, createNotification, proccessComputerPlay, gameOver}
}

export default interfc;