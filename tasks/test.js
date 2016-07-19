var gulp = require('gulp')
var karma = require('karma')

gulp.task('test', ['build'], function (done) {
  var server = new karma.Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, function () {
    done()
  })

  server.start()
})
