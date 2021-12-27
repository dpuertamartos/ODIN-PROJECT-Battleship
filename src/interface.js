import { isArrayInArray } from "./gameboard"
import boatImage from "./img/boat.png"
import blankImage from "./img/blank.png"

const interfc = () => {

    const getPlacedPositions = (ships) => {
        let placedPositions = []
        for(let i=0;i<ships.length;i++){
            placedPositions=placedPositions.concat(ships[i].position)
        }
        return placedPositions
    }

    const addImg = (col) =>{
        const i = col.getAttribute("row")
        const j = col.getAttribute("col")
        
        const img = document.createElement("img")
        img.clasName = "img-fluid"
        img.setAttribute("class","img-fluid imgsquare")
        img.src = boatImage
        
        if(isArrayInArray(placedPositions,[i,j])===true){
            img.src = boatImage
        }
        else{
            img.src = blankImage
        }

        col.append(img)
    }

    const createSquareClickEvent = (square) => {
        square.addEventListener("click", ()=>{
            console.log("square clicked")
        })
    }

    const createNotification = (notification)=>{
        const notContainer = document.querySelector("#notification")
        notContainer.textContent=notification
        setTimeout(() => notContainer.textContent = "",5000)
    }

    const createBoard = (container,gameboard) => {
        const ships = gameboard.placedShips
        const placedPositions = getPlacedPositions(ships)
        console.log("placedPositions", placedPositions)

        for(let i=0;i<gameboard.size;i++){
            const row = document.createElement("div")
            row.className="row"
            for(let j=0;j<gameboard.size;j++){
                const col = document.createElement("div")
                col.className="col square d-flex justify-content-center"
                col.setAttribute("row",`${i}`)
                col.setAttribute("col",`${j}`)
                createSquareClickEvent(col)
                row.append(col)
            }
            container.append(row)
        }
    }

    const initialize = (gameboard1,gameboard2) => {
        const g1container = document.querySelector("#player1board")
        createBoard(g1container,gameboard1)
        const g2container = document.querySelector("#player2board")
        createBoard(g2container,gameboard2)
        createNotification("GAME START")
    }

    return {initialize, addImg, createNotification}
}

export default interfc;