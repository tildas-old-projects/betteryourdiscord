const g = require('gulp')
const cn = require('gulp-cssnano')
const rs = require('run-sequence')
const ap = require('gulp-autoprefixer')

g.task('default', function() {
  return g.src('src/byd.css')
  .pipe(cn())
  .pipe(ap())
  .pipe(g.dest('out'))
})

