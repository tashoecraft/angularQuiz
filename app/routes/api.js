// my attempt at starting to get the questions into the mongdb database
// not working nor finished yet

var Quiz   = require('../models/quizQuestions');

module.exports = function(app, express) {

	var apiRouter = express.Router();

	// on routes that end in /users
	// ----------------------------------------------------
	apiRouter.route('/question')

		// create a question (accessed at POST http://localhost:8080/users)
		.post(function(req) {
			
			var quiz = new Quiz();		// create a new instance of the User model
			quiz.question = req.body.question;  // set the users name (comes from the request)
			quiz.choices = req.body.choices;  // set the users username (comes from the request)
			quiz.correctAnswer = req.body.correctAnswer;  // set the users password (comes from the request)
		});
	return apiRouter;
};