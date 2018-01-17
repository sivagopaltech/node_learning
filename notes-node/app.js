const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
var command = argv._[0];

if(command == "add") {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log("Note created");
    } else {
        console.log("Note title taken");
    }
} else if(command == "list") {
    var allNotes = notes.getAll();
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
} else if(command == "read") {
    var note = notes.getNote(argv.title);
    if(note){
        console.log("Note Found");
        notes.logNote(note);
    } else {
        console.log("Note not found");
    }
} else if(command == "remove") {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note removed":"Note not found";
    console.log(message);
} else {
    console.log("Command not recognized");
}



