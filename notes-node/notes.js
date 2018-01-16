console.log("Starting notes.js");
module.exports.addNote = () => {
	console.log("addNote");
	return "New note";
}

module.exports.addNote = (a, b) => {
	console.log("add");
	return a+b;
}