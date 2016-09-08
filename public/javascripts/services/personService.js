
angular.module('app.services.Person', [])
  .factory('PersonService', function ($http) {
    return {
      getPerson: function () {
        return $http.get('/person/getPerson');
      },
      getPersonByCid: function (cid) {
        return $http.post('/person/getPersonByCid', { cid: cid });
      }
    }
  });