tcApp.controller('categoriesCtrl', function ($scope, CordovaService, dataService, $routeParams, $location) {
    CordovaService.ready.then(function () {

        $scope.loadstyle = { "display": "block" };
        $scope.datastyle = { "display": "none" };

        $scope.categories = [];
        var categories = dataService.getAllCategories($routeParams.sectionid);
        categories.success(function (response) {
            var r = response;
        })
        .error(function (data, status, headers, config) {
            var r = data;
        })
        .then(function (response) {
            var allcategories = response.data;


            angular.forEach(allcategories, function (category) {
                var category = {
                    name: category.ID,
                    caption: category.Title,
                    selected: false,
                    bgColor: category.BackGroundColor,
                    fgColor: category.BackGroundColor.replace("bg-", "fg-")
                };
                $scope.categories.push(category);
            });

            angular.forEach($scope.categories, function (category) {
                category.selected = false;
            });

            $scope.loadstyle = { "display": "none" };
            $scope.datastyle = { "display": "block" };
        });
    });
});