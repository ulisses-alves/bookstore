module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['mocha'],
    basePath: '',
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/scripts/**/*.js',
      'tests/**/*.js'
     ]
  })
}
