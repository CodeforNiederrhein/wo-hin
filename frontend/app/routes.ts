import mapModule from './components/map/map'

const moduleName = 'myApp.routes'
export default moduleName

angular.module(moduleName, [
  mapModule
])
  .config(($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        template: '<a href="#/map">Zur karte</a>'
      })
      .when('/map', {
        template: '<map></map>'
      })
  })
