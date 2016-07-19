var requireDir = require('require-dir')
var gulp = require('gulp')
requireDir('./tasks')

gulp.task('default', ['test'])
