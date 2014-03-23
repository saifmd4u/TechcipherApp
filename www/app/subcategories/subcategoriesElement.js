tcApp.directive('subcategories', function ($routeParams, $location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            subcategories: '='
        },
        templateUrl: 'app/subcategories/subcategoriesTmp.html',
        controller: function ($scope) {
            var subcategories = $scope.subcategories;
            $scope.showsubcategory = function (subcategories, subcategory) {
                //nextleveltype =  0 (SubCategory)
                //nextleveltype =  1 (Articles)
                if (subcategory.nextleveltype == '0')
                    redirectUrl = '/SubCategory/' + subcategory.name;
                else
                    redirectUrl = '/Articles/' + subcategory.name;
                $location.path(redirectUrl);
            };

            $scope.mouseenter = function (e, subcategory) {
                angular.element(e.srcElement).addClass(subcategory.fgColor)
            }

            $scope.mouseleave = function (e, subcategory) {
                angular.element(e.srcElement).removeClass(subcategory.fgColor)
            }
        },
        replace: true
    };
});