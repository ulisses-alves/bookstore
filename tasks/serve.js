var gulp = require('gulp')
var gls = require('gulp-live-server')

gulp.task('serve', function () {
  var server = gls.static('./')
  server.start()
})
