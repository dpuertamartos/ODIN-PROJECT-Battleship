import Ship from "../ship.js"

describe("testing ship model", ()=>{
    
    test("Ship factory function returns an object", ()=>{
        const newShip = new Ship(3)
        expect(typeof newShip).toBe("object");
    })

    test("Ship object includes length, their hits and if they're sunk", ()=>{
        const newShip = new Ship(3)
        expect(typeof newShip.length).toBe("number")
        expect(typeof newShip.hits).toBe("object")
        expect(newShip.hits.length).toBeLessThanOrEqual(newShip.length)
        expect(newShip.isSunk()).toBeDefined()
    })

    test("If number of hits are less than ship length, the ship is not sunk", ()=>{
        const newShip = new Ship(3)
        newShip.createHit(1)
        expect(newShip.isSunk()).toBe(false)
    })

    test("Create hit function creates a new number in the array of hits", ()=>{
        const newShip2 = new Ship(2)
        newShip2.createHit(1)
        expect(newShip2.hits).toEqual([1])
        newShip2.createHit(2)
        expect(newShip2.hits).toEqual([1,2])
        expect(newShip2.isSunk()).toBe(true)
    })
})


