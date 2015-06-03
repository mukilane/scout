
      var app = angular.module('Scouting', ['ngMaterial']);

      app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
        $scope.toggleSidenav = function(menuId) {
          $mdSidenav(menuId).toggle();
        };
 
      }]);
      angular.module('tabsDemoDynamicHeight', ['ngMaterial'] );
   		
      app.controller('btmsht', function($scope, $mdBottomSheet) {
      $scope.openBottomSheet = function() {
        $mdBottomSheet.show({
          template:   '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>,
        });	
      };
      });

      app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');
        function buildToggler(navID) {
          var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
            .toggle()
            .then(function () {
              $log.debug("toggle " + navID + " is done");
            });
          },300);
          return debounceFn;
        }
      });
      app.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
          $mdSidenav('right').close()
          .then(function () {
            $log.debug("close RIGHT is done");
          });
        };
      });
     
	
