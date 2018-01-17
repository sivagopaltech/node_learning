console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");
const _ = require("lodash");

console.log(_.isString(true));
console.log(_.isString("siva"));
var filteredArray = _.uniq([1, 2, 3, 4, 1, 7, 1, 6]);
console.log(filteredArray);

// console.log("Result:"+ notes.add(9, -2));
// var user = os.userInfo();

// fs.appendFile("greetings.txt", `Hello ${user.username}! You are ${notes.age}`, function(err){
// 	if(err){
// 		console.log("Unable to write to file!");
// 	}
// })
