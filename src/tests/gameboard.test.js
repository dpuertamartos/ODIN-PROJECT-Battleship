import Ship from "../ship.js"
import Gameboard from "../gameboard.js"

describe("testing gameboard model", ()=>{
    const gameboard = new Gameboard()
    const newShip = new Ship(3)
    newShip.place([0,1],[0,3])
    const response = gameboard.add(newShip)
    const successAttack = gameboard.receiveAttack([0,2])
    const failAttack = gameboard.receiveAttack([0,0])

    test("Gameboards should be able to place ships at specific coordinates by calling the ship factory function", ()=>{
        expect(response).toBeDefined();
        expect(newShip.position).toEqual([[0,1],[0,2],[0,3]])
        expect(gameboard.placedShips.length).toBe(1)
        expect(gameboard.placedShips[0].position).toEqual([[0,1],[0,2],[0,3]])
    })

    test("receiveAttack takes a pair of coordinates", ()=>{
        expect(successAttack).toBeDefined();
    })

    test("determines wheter or not the attack hit a ship", ()=>{
        expect(successAttack).toBe(newShip)
        expect(failAttack).toBe(null)  
    })

    test("send hit function to the correct ship", ()=>{
        expect(newShip.hits.length).toBe(1)
    })

    test("Gameboards should keep track of missed attacks so they can display them properly.", ()=>{
        const failAttack2 = gameboard.receiveAttack([1,1])
        expect(gameboard.missed).toEqual([[0,0],[1,1]])           
    })
    
    test("Gameboards should be able to report whether or not all of their ships have been sunk.", ()=>{
        expect(gameboard.checkGameOver()).toBeDefined()
        expect(gameboard.checkGameOver()).toBe(false)
        gameboard.receiveAttack([0,1])
        gameboard.receiveAttack([0,3])
        expect(gameboard.placedShips[0].isSunk()).toBe(true)
        expect(gameboard.checkGameOver()).toBe(true)
    })
})





