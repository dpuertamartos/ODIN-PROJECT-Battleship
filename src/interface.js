const interfc = () => {

    const createBoard = (container,gameboard) => {
        for(let i=0;i<gameboard.size;i++){
            const row = document.createElement("div")
            row.className="row"
            for(let j=0;j<gameboard.size;j++){
                const col = document.createElement("div")
                col.className="col square"
                col.setAttribute("row",`${i}`)
                col.setAttribute("col",`${j}`)
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
    }

    return {initialize}
}

export default interfc;