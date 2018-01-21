const utils = require("./utils");
it("should add two numbers", () => {
    var res = utils.add(12, 13);
    if(res != 25) {
        throw new Error(`Expecting 25 but got ${res}`);
    }
});

it("should Square a number", () => {
    var res = utils.square(9);
    if(res != 81) {
        throw new Error(`Expecting 81 but got ${res}`);
    }
});