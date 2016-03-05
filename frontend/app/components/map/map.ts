import * as angular from 'angular'

class Map {
  constructor() {}
}

const moduleName = 'myApp.map'
export default moduleName

angular.module(moduleName, [])
  .component('map', {
    template: '<h1>Map</h1>'
  })
