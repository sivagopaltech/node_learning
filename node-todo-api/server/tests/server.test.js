const expect = require("expect");
const request = require("supertest");

const {app} = require("./../server.js");
const {Todo} = require("./../models/todo");

describe("Post /todos", () => {
    it("should create a new todo", (done) => {
        var text = "text todo app";
        request(app)
        .post("/todos")
        .send({text: text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text)
        }) 
        .end((err, res) => {
            if(err) {
                return done(err);
            }
            done();
        });
    });
});