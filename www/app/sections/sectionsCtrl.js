myApp.controller('sectionsCtrl', function ($scope, CordovaService, dataService) {
    CordovaService.ready.then(function () {

        $scope.loadstyle = { "display": "block" };
        $scope.datastyle = { "display": "none" };

        $scope.sections = [];
        var sections = dataService.getAllSections();
        sections.success(function (response) {
            var r = response;
        })
        .error(function (data, status, headers, config) {
            var r = data;
        })
        .then(function (response) {
            var allsections = response.data;


            angular.forEach(allsections, function (section) {
                var section = {
                    name : section.Title,
                    caption: section.Title,
                    selected: false
                };
                $scope.sections.push(section);
            });

            angular.forEach($scope.sections, function (section) {
                section.selected = false;
            });
            //$scope.sections[0].selected = true;

            $scope.loadstyle = { "display": "none" };
            $scope.datastyle = { "display": "block" };
        });
    });
});