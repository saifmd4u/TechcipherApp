tcApp.directive('categories', function ($routeParams, $location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            categories: '='
        },
        templateUrl: 'app/categories/categoriesTmp.html',
        controller: function ($scope) {
            var categories = $scope.categories;
            $scope.showcategory = function (categories, category) {
                //alert(section.name);
                redirectUrl = '/SubCategories/' + category.name;
                $location.path(redirectUrl);
            };

            $scope.mouseenter = function (e, category) {
                angular.element(e.srcElement).addClass(category.fgColor)
                //alert(category.bgColor);
            }

            $scope.mouseleave = function (e, category) {
                angular.element(e.srcElement).removeClass(category.fgColor)
                //alert(category.fgColor);
            }
        },
        replace: true
    };
});