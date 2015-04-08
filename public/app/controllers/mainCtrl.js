// main controller, handles the home page and the quiz pages. Also changes the paths when needed


angular.module('mainCtrl', ['ansFact'])

.controller('mainController', function($location, answerFactory) {

		var vm = this;

		vm.counter = 0;
		vm.score = 0;

		vm.check = function (value) {
			answerFactory.setAnswer(vm.counter, value);
		};
		vm.play = function () {
			$location.path('/quiz');
		};

		vm.showScore = function () {
			$location.path('/score');
		};

		vm.loadQuestion = function() {
			return answerFactory.getQuestion()[vm.counter].question;
		};

		vm.loadChoice = function(number) {
			return answerFactory.getQuestion()[vm.counter].choices[number];
		};

		vm.increase = function () {
			if (vm.counter < 18) {
				vm.counter += 1;
			} else vm.showScore();
			if (answerFactory.getAnswer()[vm.counter] != undefined) {
				document.getElementById(answerFactory.getAnswer()[vm.counter]).checked = true;
			} else {
				document.getElementById(answerFactory.getAnswer()[vm.counter - 1]).checked = false;
			}
		};

		vm.decrease = function () {
			if (vm.counter > 0) vm.counter -= 1;
			document.getElementById(answerFactory.getAnswer()[vm.counter]).checked = true;
		};

	});