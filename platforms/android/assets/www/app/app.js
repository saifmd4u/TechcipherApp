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


var tcApp = angular.module('tcApp', ['fsCordova', 'ngRoute']);

tcApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Home', {
            templateUrl: 'app/views/sections.html',
            //controller: 'HomeCtrl'
            controller: 'sectionsCtrl'
        })
        .when('/About', {
            templateUrl: 'app/views/about.html',
            controller: 'aboutCtrl'
        })
         .when('/Categories/:sectionid', {
             templateUrl: 'app/views/categories.html',
             controller: 'categoriesCtrl'
         })
         .when('/SubCategories/:categoryid', {
             templateUrl: 'app/views/subcategories.html',
             controller: 'subcategoriesCtrl'
         })
        .when('/SubCategory/:subcategoryid', {
            templateUrl: 'app/views/subcategories.html',
            controller: 'subcategoriesCtrl'
        })
        .when('/Articles/:subcategoryid', {
            templateUrl: 'app/views/articles.html',
            controller: 'articlesCtrl'
        })
        .when('/Article/:articleid', {
            templateUrl: 'app/views/article.html',
            controller: 'articleCtrl'
        })
    .otherwise({
        redirectTo: '/Home'
    });
});

tcApp.controller('indexCtrl', function ($scope, CordovaService, $location, $rootScope) {
    $scope.GoHome = function () {
        $location.path('/Home');
    };

    $scope.tcdevicePixelRatio = window.devicePixelRatio;

    $scope.homeBtnCss = 'btnHide';
    $scope.backBtnCss = 'btnHide';

    $rootScope.$on('$locationChangeSuccess', function () {
        //console.log('$locationChangeSuccess changed!', new Date());
        if ($location.path() == '/Home') {
            $scope.homeBtnCss = 'btnHide';
            $scope.backBtnCss = 'btnHide';
        }
        else {
            $scope.homeBtnCss = 'btnShow';
            $scope.backBtnCss = 'btnShow';
        }
    });
});
