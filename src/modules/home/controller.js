import homeController from './home.controller';

const MODULE_NAME = 'homeControllers';

angular
    .module(MODULE_NAME,[])
    .controller('homeController', homeController);

    export default MODULE_NAME