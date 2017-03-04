angular.module('app', 
	['ui.router', 
	'ngMaterial', 
	'app.controllers.Main',
	'app.controllers.Sidenav',
	'app.controllers.Toolbar',
	'app.controllers.Person',
	'app.services.Person'])
	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
			// .state('main', {
			// 	url: '/', 
   //      		templateUrl: '/views/main.html', 
   //      		controller: 'MainController'
			// })
			.state('example', {
				url: '/example', 
        		templateUrl: '/views/example.html', 
        		controller: 'ExampleController'
			})
			.state('main', {
		        url: '/',
		        templateUrl: './views/index.html',
		        controller: 'MainCtrl'
		    })
		    .state('person', {
		        url: '/person',
		        templateUrl: './views/person.html',
		        controller: 'PersonCtrl'
		    })

	})