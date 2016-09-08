angular.module('app.controllers.Person', [])
  .controller('PersonCtrl', function ($scope, $rootScope, $mdDialog, PersonService) {

    $scope.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };
    
    $scope.getPerson = function () {
      $scope.members = [];

      $scope.showLoading = true;
      
      PersonService.getPerson()
        .then(function (rows) {
          $scope.members = rows;
          $scope.showLoading = false;
        })
        .catch(function (err) {
          console.log(err);
          $scope.showLoading = false;
        });
    } 

    $scope.getPersonByCid = function (cid) {
      $scope.response = [];

      $scope.showLoading = true;
      
      PersonService.getPersonByCid(cid)
        .success(function (data) {
            if (data.ok) {
              $scope.response = data.rows;
              $scope.showLoading = false;
            } else {
              alert(JSON.stringify(data.msg));
              $scope.showLoading = false;
            }
          })
          .error(function () {
            console.log('Connection failed!')
          });
    }
    
  });