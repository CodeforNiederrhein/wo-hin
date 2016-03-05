System.config({
  baseURL: './',
  defaultJSExtensions: true,
  transpiler: 'typescript',
  paths: {
    'npm:*': 'node_modules/*'
  },

  packages: {
    'app': { defaultExtension: 'ts' }
  },

  map: {
    'angular': 'npm:angular/angular.js',
    'angular-route': 'npm:angular-route/angular-route.js',
    'angular-material': 'npm:angular-material/angular-material.js',
    'angular-animate': 'npm:angular-animate/angular-animate.js',
    'angular-aria': 'npm:angular-aria/angular-aria.js',
    'jquery': 'npm:jquery/dist/jquery.js',
    'typescript': 'npm:typescript/lib/typescript.js',

    /* only necessary for tests */
    'angular-mocks': 'npm:angular-mocks/angular-mocks.js',
    'systemjs': 'npm:systemjs/dist/system.js',
    'system-polyfills': 'npm:systemjs/dist/system-polyfills.js',
    'es6-module-loader': 'npm:es6-module-loader/dist/es6-module-loader.js'
  },

  meta: {
    'angular': {
      format: 'global',
      exports: 'angular',
      deps: ['jquery']
    },
    'angular-route': {
      format: 'global',
      deps: ['angular']
    },
    'jquery': {
      format: 'global',
      exports: 'jQuery'
    },
    'angular-material': {
      format: 'global',
      exports: 'angular',
      deps: ['angular-animate', 'angular-aria']
    },
    'angular-animate': {
      format: 'global',
      exports: 'angular',
      deps: ['angular']
    },
    'angular-aira': {
      format: 'global',
      exports: 'angular',
      deps: ['angular']
    },

    /* tests */
    'angular-mocks': {
      format: 'global',
      exports: 'angular',
      deps: ['angular']
    }
  }
})
