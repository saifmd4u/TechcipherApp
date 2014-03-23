tcApp.controller('articlesCtrl', function ($scope, CordovaService, dataService, $routeParams, $location) {
    CordovaService.ready.then(function () {

        $scope.loadstyle = { "display": "block" };
        $scope.datastyle = { "display": "none" };

        $scope.articles = [];
        var articles = dataService.getSubCategory($routeParams.subcategoryid);
        
        articles.success(function (response) {
            var r = response;
        })
        .error(function (data, status, headers, config) {
            var r = data;
        })
        .then(function (response) {
            var responseData = response.data;
            var allarticles = responseData.Articles;
            angular.forEach(allarticles, function (article) {
                var uiarticle = {
                    name: article.ID,
                    caption: article.Title,
                    selected: false,
                    bgColor: article.BackGroundColor,
                    fgColor: article.BackGroundColor.replace("bg-", "fg-")
                };
                $scope.articles.push(uiarticle);
            });

            angular.forEach($scope.articles, function (article) {
                article.selected = false;
            });

            $scope.loadstyle = { "display": "none" };
            $scope.datastyle = { "display": "block" };
        });
    });
});