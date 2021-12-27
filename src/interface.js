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

    const proccessComputerPlay = (response) => {
        const row = response[1][0].toString()
        const col = response[1][1].toString()
        const selectedSquare = document.querySelector(`[row="${row}"][col="${col}"]`)
        if(response[0]==="missed"){
            addImg(selectedSquare,emptyImage)
        }
        else{
            addImg(selectedSquare,boatImage)
        }
    }

    const createSquareClickEvent = (square, player, enemy) => {
        square.addEventListener("click", ()=>{
            if(player.getTurn()===false){  
                const rowAttacked = Number(square.getAttribute("row"))
                const colAttacked = Number(square.getAttribute("col"))
                const response = enemy.play([rowAttacked, colAttacked],player)
                if(response==="missed"){
                    addImg(square,emptyImage)
                    passTurn()
                }
                else if(response==="already played"){
                    createNotification("square already played!!")
                }
                else{
                    addImg(square,boatImage)
                    passTurn()
                }
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

    return {initialize, addImg, createNotification, proccessComputerPlay}
}

export default interfc;