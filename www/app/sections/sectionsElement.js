tcApp.directive('sections', function ($location) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            sections: '='
        },
        templateUrl: 'app/sections/sectionsTmp.html',
        controller: function ($scope) {
            var sections = $scope.sections;
            $scope.showsection = function (sections, section) {
                //alert(section.name);
                var redirectUrl = '';
                if (section.name == 'About') {
                    redirectUrl = '/' + section.name;
                }
                else {
                    redirectUrl = '/Categories/' + section.name;
                }
                $location.path(redirectUrl);
            };

            $scope.mouseenter = function (e) {
                angular.element(e.srcElement).addClass('fg-color-blue')
            }

            $scope.mouseleave = function (e) {
                angular.element(e.srcElement).removeClass('fg-color-blue')
            }
            
        },
        replace: true
    };
});