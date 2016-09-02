angular.module('exam', ['ui.router', 'exam.controller.Main'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.starte('main', {
				url: '/', 
        		templateUrl: '/views/main.html', 
        		controller: 'MainController'
			})
	})