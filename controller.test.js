/* const targetFn = require("./controller");

describe("the print function", ()=>{

    // standard best practice
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it("should respond with 'Hello world!'", ()=>{
        const mockReq = {};
        const mockRes = {
            send:jest.fn()
        }

        targetFn(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith("Hello world!!"); // If you change this value, the test will fail.
    })
}) */

const controller = require("./controller");

describe("the print function", ()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it("should respond with 'Hello world!'", ()=>{
        const mockReq = {};
        const mockRes = {
            send: jest.fn()
        }

        // Call the specific print function from the controller object
        controller.print(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith("Hello world!!");
    })
})