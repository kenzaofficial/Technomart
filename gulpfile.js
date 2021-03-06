const gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

const paths = {
  styles: {
    src: "./src/scss/**/*.scss",
    dest: "./build/",
  },
};
function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function reload() {
  browserSync.reload();
}

function watch() {
  style();

  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch("./src/scss/*.scss", style);
  gulp.watch("./*.html", reload);
}

exports.watch = watch;

