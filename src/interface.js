import { isArrayInArray } from "./gameboard"
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

    const createSquareClickEvent = (square, board) => {
        square.addEventListener("click", ()=>{
            if(square.classList.contains("clicked")===false){
                square.classList.add("clicked")
                const rowAttacked = Number(square.getAttribute("row"))
                const colAttacked = Number(square.getAttribute("col"))
                const response = board.receiveAttack([rowAttacked, colAttacked])
                if(response===null){
                    addImg(square,emptyImage)
                }
                else{
                    addImg(square,boatImage)
                }
            }
            else{
                createNotification("square already played!!")
            }
        })
    }

    const createNotification = (notification)=>{
        const notContainer = document.querySelector("#notification")
        notContainer.textContent=notification
        setTimeout(() => notContainer.textContent = "",5000)
    }

    const createBoard = (container,player) => {
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
                    createSquareClickEvent(col, player.board)
                }
                row.append(col)
            }
            container.append(row)
        }
    }

    const initialize = (player1,player2) => {
        const g1container = document.querySelector("#player1board")
        createBoard(g1container,player1)
        const g2container = document.querySelector("#player2board")
        createBoard(g2container,player2)
        createNotification("GAME START")
    }

    return {initialize, addImg, createNotification}
}

export default interfc;