var gulp        = require('gulp')
var sh          = require('shelljs')
var del         = require('del')
var browserSync = require('browser-sync').create()

gulp.task('serve', ['docs'], function() {
  browserSync.init({ server: './docs' })

  gulp.watch('./assets/**/*', ['docs'])
  gulp.watch('./examples/**/*', ['docs'])
  gulp.watch('./layouts/**/*', ['docs'])
  gulp.watch('./partials/**/*', ['docs'])

  gulp.watch('./examples/**/*').on('change', browserSync.reload)
  gulp.watch('./assets/**/*').on('change', browserSync.reload)
  gulp.watch('./layouts/**/*').on('change', browserSync.reload)
  gulp.watch('./partials/**/*').on('change', browserSync.reload)
})

gulp.task('docs', function() {
  del.sync(['docs'])
  sh.exec('./node_modules/.bin/yuidoc -c yuidoc.json >> /dev/null')
})
