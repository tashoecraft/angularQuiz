// configure routes and their controllers

angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'app/views/pages/home.html',
			controller : 'mainController',
			controllerAs: 'main'
		})

		.when('/quiz', {
			templateUrl : 'app/views/pages/quiz.html',
			controller : 'mainController',
			controllerAs: 'main'
		})

		.when('/score', {
			templateUrl : 'app/views/pages/score.html',
			controller : 'answerController',
			controllerAs: 'answer',
			resolve: {

			}
		});

	$locationProvider.html5Mode(true);

});
