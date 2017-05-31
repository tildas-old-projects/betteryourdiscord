const g = require('gulp')
const cn = require('gulp-cssnano')
const ap = require('gulp-autoprefixer')

g.task('default', function () {
  return g.src('src/byd.css')
  .pipe(cn())
  .pipe(ap())
  .pipe(g.dest('out'))
})
