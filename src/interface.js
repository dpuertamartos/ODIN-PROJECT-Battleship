import { isArrayInArray } from "./gameboard"
import { initializeGame } from "./index.js"
import boatImage from "./img/boat.png"
import sinkBoat from "./img/sinkboat.png"
import blankImage from "./img/blank.png"
import emptyImage from "./img/empty.png"
import fireShot from "./assets/fireshot.mp3"
import Controller from "./controller.js"

const delay = ms => new Promise(res => setTimeout(res, ms));
const controller = Controller()

const interfc = () => {

    let axisX = true

    const getPlacedPositions = (ships) => {
        let placedPositions = []
        for(let i=0;i<ships.length;i++){
            placedPositions=placedPositions.concat(ships[i].position)
        }
        return placedPositions
    }

    const addImg = (col, imgadded) =>{    
        col.textContent=""
        const img = document.createElement("img")
        img.clasName = "img-fluid"
        img.setAttribute("class","img-fluid imgsquare")
        img.src = imgadded
        col.append(img)
    }

    const proccessComputerPlay = (response, c, p) => {
        const fireSound = new Audio(fireShot)
        fireSound.play()
        const row = response[1][0].toString()
        const col = response[1][1].toString()
        const selectedSquare = document.querySelector(`[row="${row}"][col="${col}"]`)
        if(response[0]==="missed"){
            selectedSquare.setAttribute("style","opacity:0.2;")
        }
        else{
            selectedSquare.setAttribute("style","opacity:0.35;")
            addImg(selectedSquare,sinkBoat)
            computerPlay(c,p)
        }
    }

    const computerPlay = async (c,p) => {
        await delay(800)
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
                    const fireSound = new Audio(fireShot)
                    fireSound.play()
                    square.setAttribute("style","opacity:0.2;")
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
                    const fireSound = new Audio(fireShot)
                    fireSound.play()
                    addImg(square,boatImage)
                    if(player.board.checkGameOver()){
                        gameOver(enemy.position)
                        createNotification("player 1 won")
                    }
                }
            }
            else if(player.board.checkGameOver()===true||enemy.board.checkGameOver()===true){
                createNotification("A VICTORIOUS ARMY WAS ALREADY DECLARED")
            }
            else{
                createNotification("ENEMY TURN, AWAIT YOUR TURN!")
                console.log("computer turn",player.getTurn(),"player turn",enemy.getTurn())
            }
        })
    }

    const createNotification = (notification)=>{
        const notContainer = document.querySelector("#notification")
        notContainer.textContent=notification
        setTimeout(() => notContainer.textContent = "",3000)
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
                else if(player.mode==="player"&&isArrayInArray(placedPositions,[i,j])){
                    addImg(col,boatImage)
                }
                row.append(col)
            }
            container.append(row)
        }
    }
    const placingListener = (col,i,j,length) => {
        console.log("placing")
        const parent = document.querySelector(".modal-content")
        let selectedList = []
        col.addEventListener("mouseover", ()=>{
            selectedList = []
            for(let w=0;w<length;w++){
                if(axisX){
                    const squareToAdd = parent.querySelector(`[row="${i+w}"][col="${j}"][placed="no"]`)
                    if(squareToAdd!==null){selectedList.push(squareToAdd)}  
                }
                else{
                    const squareToAdd = parent.querySelector(`[row="${i}"][col="${j+w}"][placed="no"]`)
                    if(squareToAdd!==null){selectedList.push(squareToAdd)}  
                }
            }
            if(selectedList.length<length){
                selectedList.forEach(s=>s.setAttribute("style","opacity: 0.2; background-color: red;"))
            }
            else{
                selectedList.forEach(s=>s.setAttribute("style","opacity: 0.2; background-color: green;"))
            }     
            console.log(selectedList)
        })
        col.addEventListener("mouseout", ()=>{
            selectedList.forEach(s=>s.setAttribute("style","opacity: 0.7;"))
        }) 
        col.addEventListener("click", ()=>{
            if(selectedList.length===length){
                selectedList.forEach(s=>{
                    s.classList.add("placed")
                    s.setAttribute("placed","yes")
                })
                const start = [Number(selectedList[0].getAttribute("row")),Number(selectedList[0].getAttribute("col"))]
                const end = [Number(selectedList[selectedList.length-1].getAttribute("row")),Number(selectedList[selectedList.length-1].getAttribute("col"))]
                const response = controller.saveStartingBoat(selectedList.length,start,end)
                if(response[0]==="create"){
                    createPlacingBoard(response[1],response[2])
                }
                else{
                    initializeGame(controller)
                }
            }
        })
    }

    const createPlacingBoard = (length, arrayShips) => {
        const placedPositions= getPlacedPositions(arrayShips)
        const parent = document.querySelector(".modal-content")
        parent.textContent=""
        const container = document.createElement("div")
        container.className = "container"
        const row1 = document.createElement("div")
        row1.className="row placingBoardTitle justify-content-start"
        const col = document.createElement("div")
        col.className="col-4 col-lg-6 boatplacingTitle d-flex justify-content-center" 
        col.textContent="Placing boat:"
        const col2 = document.createElement("div")
        col2.className="col-8 col-lg-6 d-flex justify-content-center" 
        row1.append(col,col2)
        for(let i=0;i<length;i++){
            const span = document.createElement("span")
            span.className="boatplacing" 
            col2.append(span)
        }
        const row2 = document.createElement("div")
        const switchButton = document.createElement("button")
        switchButton.className = "btn btn-success changeAxis"
        switchButton.textContent = "Change axis"
        switchButton.addEventListener("click", ()=>{
            axisX=!axisX
            console.log("axis X", axisX)
            createPlacingBoard(length, arrayShips)
        })
        row2.append(switchButton)
        container.append(row1,row2)

        for(let i=0;i<10;i++){
            const row = document.createElement("div")
            row.className="row"
            for(let j=0;j<10;j++){
                const col = document.createElement("div")
                col.className="col square d-flex justify-content-center"
                col.setAttribute("row",`${i}`)
                col.setAttribute("col",`${j}`)
                if(isArrayInArray(placedPositions,[i,j])){
                    col.setAttribute("placed","yes")
                    col.classList.add("placed")
                }
                else{
                    col.setAttribute("placed","no")
                }
                placingListener(col,i,j,length)
                row.append(col)
            }
            container.append(row)
        }
        parent.append(container)
    }

    const initialize = (player1,player2) => {
        const g1container = document.querySelector("#player1board")
        createBoard(g1container,player1,player2)
        const g2container = document.querySelector("#player2board")
        createBoard(g2container,player2,player1)
        createNotification("GAME START. CLICK ENEMY WATERS TO ATTACK!!")
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

    return {initialize, addImg, createNotification, proccessComputerPlay, gameOver, createPlacingBoard}
}

export default interfc;