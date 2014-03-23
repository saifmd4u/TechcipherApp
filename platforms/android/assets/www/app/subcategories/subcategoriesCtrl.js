tcApp.controller('subcategoriesCtrl', function ($scope, CordovaService, dataService, $routeParams, $location) {
    CordovaService.ready.then(function () {

        $scope.loadstyle = { "display": "block" };
        $scope.datastyle = { "display": "none" };

        var subcategories;
        $scope.subcategories = [];
        if ($routeParams.categoryid) {
            subcategories = dataService.getSubCategories($routeParams.categoryid);
        }

        if ($routeParams.subcategoryid) {
            subcategories = dataService.getSubCategory($routeParams.subcategoryid);
        }

        subcategories.success(function (response) {
            var r = response;
        })
        .error(function (data, status, headers, config) {
            var r = data;
        })
        .then(function (response) {
            var responseData = response.data;
            var allsubcategories = responseData.SubCategories;
            angular.forEach(allsubcategories, function (subcategory) {
                var uisubcategory = {
                    name: subcategory.ID,
                    caption: subcategory.Title,
                    selected: false,
                    nextleveltype : subcategory.NextLevelType,
                    bgColor: subcategory.BackGroundColor,
                    fgColor: subcategory.BackGroundColor.replace("bg-", "fg-")
                };
                $scope.subcategories.push(uisubcategory);
            });

            angular.forEach($scope.subcategories, function (subcategory) {
                subcategory.selected = false;
            });

            $scope.loadstyle = { "display": "none" };
            $scope.datastyle = { "display": "block" };
        });
    });
});