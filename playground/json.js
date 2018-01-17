// var obj = {name: "Siva"}
// var stringObj = JSON.stringify(obj);
// console.log(stringObj);

// var personString = '{"name":"siva","age":25}';
// var person = JSON.parse(personString);
// console.log(person);

const fs = require("fs");
var originalNote = {
	title : "some title",
	body : "some body"
}
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);
console.log(note.title);