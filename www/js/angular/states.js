bcApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controller: "mainController"
    })
    .state('contacts', {
      url: "/contacts",
      templateUrl: "views/contacts.html",
      controller: "mainController"
    });
});