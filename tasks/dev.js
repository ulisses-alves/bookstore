var gulp = require('gulp')

gulp.task('dev', ['test', 'serve'], function () {
  gulp.watch([
    'src/**/*.{js,scss}',
    'tests/**/*.js'
  ], ['test'])
})
