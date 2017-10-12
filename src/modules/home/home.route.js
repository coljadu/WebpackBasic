//import hometpl from './home.html';

export default homeRouteConfig;

function homeRouteConfig($stateProvider) {

    $stateProvider
    .state('home',{
       url : '/home',
       template: require('./home.html'),
       controller : 'homeController',
       controllerAs : 'homeCtrl'
        }


    )

}
homeRouteConfig.$inject = ['$stateProvider']
