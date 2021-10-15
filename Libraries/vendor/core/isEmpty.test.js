const isEmpty = require("./isEmpty")
// @ponicode
describe("isEmpty", () => {
    test("0", () => {
        let callFunction = () => {
            isEmpty({ length: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            isEmpty({ length: 10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            isEmpty({ length: 16 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            isEmpty({ length: 256 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            isEmpty({ length: 64 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            isEmpty({ length: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
