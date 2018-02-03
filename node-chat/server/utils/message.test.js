var expect = require("expect");

var {generateMessage} = require("./message");

describe("generate Message", () => {
    it("Should generate a correct message", () => {
        var from = "siva";
        var text = "hello";
        var message = generateMessage(from, text);
        // expect(message).toBeDefined();
        expect(mesaage).toInclude({from, to});
    });
});