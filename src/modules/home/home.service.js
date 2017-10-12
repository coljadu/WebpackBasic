import angular from 'angular';

export default class homeService {
    constructor($http) {
        console.log('service loaded');
        this.$http = $http;
        this.names = ['raju', 'ram', 'ravi'];
    }

    getNames(){
        console.log('in service method');
    }
}

homeService.$inject = ['$http'];