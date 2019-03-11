var mongoose = require("mongoose");

//Reference to the Schema constructor
var Schema = mongoose.Schema;

//Using the Schema constructor
var NoteSchema = new Schema({
    title: String,
    body: String
});

//Creates mongoose model
var Note = mongoose.model("Note", NoteSchema);

//Export the Note model
module.exports = Note;