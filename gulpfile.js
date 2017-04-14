const g = require('gulp')
const cn = require('gulp-cssnano')
const rs = require('run-sequence')

g.task('default', function() {
  return g.src('src/byd.css')
  .pipe(cn())
  .pipe(g.dest('out'))
})

