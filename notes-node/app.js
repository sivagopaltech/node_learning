console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

var titleOpts = {
            describe: "Title of note",
            demand: true,
            alias: "t"
        };
var bodyOpts = {
            describe: "Body of note",
            demand: true,
            alias: "b"
        }
const argv = yargs
    .command('add', "Add a new note", {
        title : titleOpts, 
        body : bodyOpts
    })
    .command('list', "List all nodes")
    .command('read', "List all nodes", {
        title : titleOpts, 
    })
    .command("remove", "Remove a note", {
        title : titleOpts,
    })
    .help().argv;
var command = argv._[0];
console.log("command ", command);
console.log("Yargs ", argv);

if(command == "add") {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log("Note created");
    } else {
        console.log("Note title taken");
    }
} else if(command == "list") {
    notes.getAll();
} else if(command == "read") {
    notes.getNote(argv.title);
} else if(command == "remove") {
    notes.removeNote(argv.title);
} else {
    console.log("Command not recognized");
}



