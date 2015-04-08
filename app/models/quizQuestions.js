// creates the schema that will be used to post all the questions to be stored into the database
// not working

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// question schema
var questionSchema = new Schema({
	question: String,
	choices: [String],
	correctAnswer: String
});

var QuizQs = mongoose.model('QuizQs', questionSchema);

module.exports = QuizQs;