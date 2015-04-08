/**
 * Created by Austin on 4/6/15.
 */
// controller to handle calculating and displaying the score and answers for the final page

angular.module('ansCtrl', ['ansFact'])

    .controller('answerController', function(answerFactory) {
        var vm = this;
        vm.score = 0;
        vm.question = answerFactory.getQuestion();
        vm.getNumber = function() {
            return new Array(vm.question.length);
        };

        vm.corrects = [];
        vm.usersAnswers = [];
        // I arranged tabulate like this because it wasn't firing when the route changed.
        tabulate();

        // loops through all the user answers and the correct answers, places them into arrays to be displayed with ng-repeat
        function tabulate() {
            for(var i = 0;i < answerFactory.getAnswer().length; i++) {
                vm.corrects.push(answerFactory.getQuestion()[i].choices[answerFactory.getQuestion()[i].correctAnswer]);
                vm.usersAnswers.push(answerFactory.getQuestion()[i].choices[answerFactory.getAnswer()[i]]);
                if (answerFactory.getQuestion()[i].correctAnswer === answerFactory.getAnswer()[i]) {
                    vm.score += 1;
                }
            }
            return vm.score;
        }

    });
