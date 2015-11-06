bcApp.config(['$routeProvider',
  function($routeProvider) {
//	console.log("Inside Routes1");
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controllerAs: "controller",
        controller: 'mainController'
      }).
      when('/contacts', {
          templateUrl: 'views/contacts.html',
          controllerAs: "controller",
          controller: 'mainController'
        }).
      otherwise({
        redirectTo: '/'
      });
//	console.log("Inside Routes2");
  }]);