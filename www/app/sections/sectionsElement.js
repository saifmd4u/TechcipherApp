myApp.directive('sections', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            sections: '=',
            propertyId: '='
        },
        templateUrl: 'app/sections/sectionsTmp.html',
        controller: function ($scope) {
            var sections = $scope.sections;
            $scope.showsection = function (sections, section) {
                alert(section.name);
            };
            $scope.showabout = function () {
                alert("www.techcipher.com");
            };            
        },
        replace: true
    };
});