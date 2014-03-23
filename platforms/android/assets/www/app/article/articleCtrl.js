tcApp.controller('articleCtrl', function ($scope, CordovaService, dataService, $routeParams, $location) {
    CordovaService.ready.then(function () {

        $scope.loadstyle = { "display": "block" };
        $scope.datastyle = { "display": "none" };

        var article = dataService.getArticle($routeParams.articleid);
        
        article.success(function (response) {
            var r = response;
        })
        .error(function (data, status, headers, config) {
            var r = data;
        })
        .then(function (response) {
            $scope.article = response.data;
            $scope.loadstyle = { "display": "none" };
            $scope.datastyle = { "display": "block" };
        });
    });
});