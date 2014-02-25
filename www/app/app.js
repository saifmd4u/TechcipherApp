angular.module('fsCordova', [])
.service('CordovaService', ['$document', '$q',
  function ($document, $q) {

      var d = $q.defer(),
          resolved = false;

      var self = this;
      this.ready = d.promise;

      document.addEventListener('deviceready', function () {
          resolved = true;
          d.resolve(window.cordova);
      });

      // Check to make sure we didn't miss the 
      // event (just in case)
      setTimeout(function () {
          if (!resolved) {
              if (window.cordova) d.resolve(window.cordova);
          }
      }, 3000);
  }]);


var myApp = angular.module('myApp', ['fsCordova']);

myApp.controller('MyController', function ($scope, CordovaService/*, myService*/) {
    CordovaService.ready.then(function () {
        // Cordova is ready
        $scope.appdata = 'Cordova is ready';

        //myService.getAllSections()
        //.success(function (sections) {
        //    $scope.sections = sections;
        //})
        //.error(function (error) {
        //    $scope.status = 'Unable to load customer data: ' + error.message;
        //});

    });
});