import angular from 'angular';
import uirouter from 'angular-ui-router';

import homeRouteConfig from './home.route';
import homeController from './home.controller';
import homeService from './home.service';

export default angular.module('home', [uirouter])
.config(homeRouteConfig)

.service('homeService', homeService)
.controller('homeController', homeController);