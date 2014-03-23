tcApp.directive('articles', function ($routeParams, $location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            articles: '='
        },
        templateUrl: 'app/articles/articlesTmp.html',
        controller: function ($scope) {
            var articles = $scope.articles;
            $scope.showarticle = function (articles, article) {
                redirectUrl = '/Article/' + article.name;
                $location.path(redirectUrl);
            };

            $scope.mouseenter = function (e, article) {
                angular.element(e.srcElement).addClass(article.fgColor)
            }

            $scope.mouseleave = function (e, article) {
                angular.element(e.srcElement).removeClass(article.fgColor)
            }
        },
        replace: true
    };
});