const gulp = require("gulp")
const minifyCSS = require('gulp-minify-css')
const del = require('del');

gulp.task("css", async function () {
  await del(['dist/css']);
  return gulp.src("components/css/**/*.css")
    .pipe(minifyCSS())
    .pipe(gulp.dest("dist/css"))
})