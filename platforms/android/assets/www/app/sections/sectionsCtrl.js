tcApp.controller('sectionsCtrl', function ($scope, CordovaService, dataService, $location, $rootScope) {
    CordovaService.ready.then(function () {

        $scope.loadstyle = { "display": "block" };
        $scope.datastyle = { "display": "none" };
        $scope.sections = [];
        var sections = new Array();

        var svcSections = dataService.getAllSections();
        svcSections.success(function (response) {
            var r = response;
        })
        .error(function (data, status, headers, config) {
            var r = data;
        })
        .then(function (response) {
            var allsections = response.data;

            angular.forEach(allsections, function (section) {
                var section = {
                    name: section.SectionId,
                    caption: section.Title,
                    selected: false
                };
                sections.push(section);
            });

            var section = {
                name: 'About',
                caption: 'About',
                selected: false
            };
            sections.push(section);

            $scope.loadstyle = { "display": "none" };
            $scope.datastyle = { "display": "block" };

            //alert("sections : " + sections.length);

            $scope.sections = sections;
        });
    });
});