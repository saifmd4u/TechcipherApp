myApp.service('dataService', ['$http', function ($http) {

    var urlBase = 'http://www.techcipher.com/api/';
    //urlBase = 'http://localhost:51970/api/';

    this.getAllSections = function () {
        return $http.get(urlBase + 'section/Home/all');
    };
}]);