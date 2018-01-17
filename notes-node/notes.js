console.log("Starting notes.js");
const fs = require("fs");
var addNote = (title, body) => {
	var notes = [];
	var note = {
		title : title,
		body : body
	}
	try {
		var notes = JSON.parse(fs.readFileSync('notes-data.json'));
	} catch(e) {

	}
	
	var duplicateNotes = notes.filter((note) => note.title == title)
	if(duplicateNotes.length == 0) {
		notes.push(note);
		fs.writeFileSync('notes-data.json',JSON.stringify(notes));
	}
}

var getAll = () => {
	console.log("Getting all notes");
}

var getNote = (title) => {
	console.log("Reading note ", title );
}

var removeNote = (title) => {
	console.log("Removing note ", title );
}

module.exports = {
	addNote, 
	getAll, 
	getNote, 
	removeNote
}