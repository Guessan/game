// Define the `assApp` module
angular.module('assApp.about', [])
	.controller("controller1", function($scope){
      $scope.abouts = [
        {
          name: 'Malcolm Brunson',
          snippet: 'Back-End Developer'
        }, {
          name: 'Guessan G. Effi',
          snippet: 'Front-End Developer'
        }, {
          name: 'Malcolm Holliday',
          snippet: 'Game Developer'
        }, {
          name: 'Rene Pereyra',
          snippet: 'Fronter-End Developer'
        } 
      ];
	});