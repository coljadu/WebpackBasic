import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';

import config from './app.config';

import home from '../modules/home/index.js'
import 'angular-ui-router';


//import homeRouteConfig from '../modules/home/home.route'

angular.module('app',
 [
     'ui.router',
     'home'
])
.config(config);
