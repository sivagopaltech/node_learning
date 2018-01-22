const utils = require("./utils");
const expect = require("expect");
it("should add two numbers", () => {
    var res = utils.add(12, 13);
    expect(res).toBe(25);
});

it("should add two numbers async", (done) => {
    var res = utils.asyncAdd(12, 13 , (sum) => {
        expect(sum).toBe(25);
        done();
    });
});

it("should Square a number", () => {
    var res = utils.square(9);
    expect(res).toBe(81);
});

it("should have some values", () => {
    var res = utils.square(9);
    expect([2,3,4]).toEqual([2,3,4]);
});