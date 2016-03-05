const moduleName = 'myApp.layout'
export default moduleName

angular.module(moduleName, [])
  .component('layout', {
    transclude: true,
    templateUrl: 'app/components/layout/layout.html'
  })
