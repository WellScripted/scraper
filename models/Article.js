var mongoose = require("mongoose");

//Creating Schema Class
var Schema = mongoose.Schema;

//Creating article Schema
var ArticleSchema = new Schema({
    //title requires a string
    title: {
        type: String,
        required: true
    },
    //link requires a string
    link: {
        type: String,
        required: true
    },
    summary: {
        type: String,
    },
    byline: {
        type: String,
    },
    //Saves one note's ObjectID, the ref refers to the Note model
    note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

//Create the Article's model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

//Export the model
module.exports = Article;