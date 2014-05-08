TechcipherApp
=============

Mobile App using Cordova and AngularJS.

Uses following dependencies

- Cordova (https://cordova.apache.org/)
- AngularJS (http://angularjs.org/)


Overview
=============

'deviceready' is the key for bootstrapping cordova with angularjs

<pre>
angular.module('fsCordova', [])
.service('CordovaService', ['$document', '$q',
  function ($document, $q) {

      var d = $q.defer(),
          resolved = false;

      var self = this;
      this.ready = d.promise;

      document.addEventListener('deviceready', function () {
          resolved = true;
          d.resolve(window.cordova);
      });

      // Check to make sure we didn't miss the 
      // event (just in case)
      setTimeout(function () {
          if (!resolved) {
              if (window.cordova) d.resolve(window.cordova);
          }
      }, 3000);
  }]);


var tcApp = angular.module('tcApp', ['fsCordova', 'ngRoute']);
</pre>


Demo
==========

<img src="http://www.saifikram.com/Uploads/tcapp_screen3.jpg" width="222" height="307" border="5" />

for code walk through go to <a href="http://www.saifikram.com/2014/02/building-mobile-app-with-cordova-and-angularjs">
"Building Mobile App with Cordova, Bootstrap and AngularJS"</a>
