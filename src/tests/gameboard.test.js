import Ship from "../ship.js"
import Gameboard from "../gameboard.js"

describe("testing gameboard model", ()=>{
    const gameboard = new Gameboard()
    test("Gameboards should be able to place ships at specific coordinates by calling the ship factory function", ()=>{
        const newShip = new Ship(2)
        const response = gameboard.place(newShip,[0,1],[0,2])
        expect(response).toBeDefined();
    })

    describe("receiveAttack function", ()=>{
        const successAttack = gameboard.receiveAttack([0,2])
        const failAttack = gameboard.receiveAttack([0,0])

        test("takes a pair of coordinates", ()=>{
            expect(successAttack).toBeDefined();
        })
        test("determines wheter or not the attack hit a ship", ()=>{
            expect(successAttack).toBe(newShip)
            expect(failAttack).toBe(null)
            
        })
        test("send hit function to the correct ship", ()=>{
            expect(newShip.hits.length).toBe(1)
        })
        test("records the coordinates of the missed shot", ()=>{
            expect(gameboard.missed).toContain([0,0]) 
        })

    })
    
    test("Gameboards should keep track of missed attacks so they can display them properly.", ()=>{
        const failAttack = gameboard.receiveAttack([0,0])
        const failAttack2 = gameboard.receiveAttack([1,1])
        expect(gameboard.missed).toContain([0,0]) 
        expect(gameboard.missed).toContain([1,1])           
    })
    
    test("Gameboards should be able to report whether or not all of their ships have been sunk.", ()=>{
        expect(gameboard.gameover).toBeDefined()
        expect(gameboard.gameover).toBe(false)
    })
})