const g = require('gulp')
const cn = require('gulp-cssnano')

g.task('css', function() {
  return g.src('src/byd.css')
  g.pipe(cn())
  g.pipe(g.dest('./theme')
})
