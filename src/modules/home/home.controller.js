let _this;

export default class homeController {
    constructor(homeService, $scope, $timeout){
        console.log('controller loaded');
        _this = this;
        _this.$timeout = $timeout;
        _this.$scope = $scope;
        _this.htmlcode='';
        _this.homeService = homeService;
        _this.retriveNames();
        
         
          
    }
    retriveNames(){
        let onSuccess = (response) => {
            console.log(response);
            _this.superhero = response.data;
        },
        onError =  (error) => {
            console.log(error);
        }
        _this.nameList = _this.homeService.getNames().then(onSuccess,onError);
    }
  


    
};

homeController.$inject = ['homeService','$scope','$timeout'];


