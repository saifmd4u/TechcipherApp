tcApp.directive('article', function ($routeParams, $location, $sce) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            article: '='
        },
        templateUrl: 'app/article/articleTmp.html',
        controller: function ($scope, $sce) {
            //var articles = $scope.articles;
            //$scope.showarticle = function (articles, article) {
            //    redirectUrl = '/Article/' + article.name;
            //    $location.path(redirectUrl);
            //};

            //$scope.mouseenter = function (e, article) {
            //    angular.element(e.srcElement).addClass(article.fgColor)
            //}

            //$scope.mouseleave = function (e, article) {
            //    angular.element(e.srcElement).removeClass(article.fgColor)
            //}

            //$('#exampleCode').find('pre').addClass('prettyprint').addClass('linenums');
            //window.prettyPrint && prettyPrint();

            $scope.Description = function () {
                return $sce.trustAsHtml($scope.article.Description);
            };

            $scope.Example = function () {
                return $sce.trustAsHtml($scope.article.ArcExample);
            };

            $scope.References = function () {
                return $sce.trustAsHtml($scope.article.ArcReferences);
            };

            $scope.DeveloperTools = function () {
                return $sce.trustAsHtml($scope.article.ArcDevTools);
            };
        },
        replace: true
    };
});

tcApp.directive('prettyprint', function () {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
            element.html(prettyPrint(scope.dom));
        }
    };
});
