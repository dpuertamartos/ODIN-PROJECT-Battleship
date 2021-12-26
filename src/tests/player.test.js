import Player from "../player.js"
import Ship from "../ship.js"
import Gameboard from "../gameboard.js"

describe("testing player model", ()=>{

    gameboard1 = new Gameboard()
    gameboard2 = new Gameboard()
    player = new Player("player", 1, gameboard1)
    computer = new Player("computer", 2, gameboard2)
    

    test("creating a player returns an object", ()=>{
        expect(typeof player).toBe("object");
    })

    test("player mode can be computer or ai", ()=>{
        expect(player.mode).toBe("player")
        expect(computer.mode).toBe("computer")
    })

    test("player has an associated gameboard", ()=>{
        expect(player.board).toBe(gameboard1)
        expect(computer.board).toBe(gameboard2)
    })

    test("previous to the attack player turn is true", ()=>{
        expect(player.turn).toBe(true)
        expect(computer.turn).toBe(false)
    })

    test("player can attack enemy gameboard", ()=>{
        player.play([0,1], computer)
        expect(computer.board.missed).toEqual([[0,1]]) 
    })

    test("after attacking player turn is false, and computer turn is true", ()=>{
        expect(player.turn).toBe(false)
        expect(computer.turn).toBe(true)
    })

    test("computer can play random legal moves", ()=>{
        computer.play("random", player)
        expect(player.board.missed.length).toEqual(1)
    })

    test("computer wont play a move already played", ()=>{
        computer.play(player.board.missed[0], player)
        expect(player.board.missed.length).toEqual(1)
    })
})

    
