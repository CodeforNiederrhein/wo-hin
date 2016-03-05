import * as angular from 'angular'
import 'angular-route'
import 'angular-material'

import routes from './routes'

angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  routes
])
