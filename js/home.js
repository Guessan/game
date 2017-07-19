angular.module("assApp", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl: "home.html"
			})
			.when("/about", {
				templateUrl: "about.html"
			})
			.when("/leader", {
				templateUrl: "leader.html"
			})
			.when("/contact", {
				templateUrl: "contact.html"
			})
	})
	.controller("insert-controller-here", function(){
});