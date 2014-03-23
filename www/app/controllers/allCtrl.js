//tcApp.controller('demoCtrl', function ($scope, $location, CordovaService) {
//    $scope.message = "I am a message";

//    $scope.testClick = function () {
//        if ($location.path() != "/Home")
//            $location.path("\Home");
//        else
//            $location.path("\About");
//    };
//});

tcApp.controller('homeCtrl', function ($scope) {
    $scope.message = "I am a message";
});

tcApp.controller('aboutCtrl', function ($scope) {
    $scope.message = "I am a message";
});