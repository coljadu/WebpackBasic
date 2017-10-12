export default config;

function config($urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

}

config.$inject = ['$urlRouterProvider', '$locationProvider'];