angular.module('example', 
	['ui.router', 
	'ngMaterial', 
	'example.controller.Main'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main', {
				url: '/', 
        		templateUrl: '/views/main.html', 
        		controller: 'MainController'
			})
			.state('example', {
				url: '/example', 
        		templateUrl: '/views/example.html', 
        		controller: 'ExampleController'
			})

	})