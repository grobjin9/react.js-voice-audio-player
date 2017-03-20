const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat'),
      babel = require('gulp-babel'),
      cleanCSS = require('gulp-clean-css'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      browserify = require('browserify'),
      browserSync = require('browser-sync').create(),
      del = require('del'),
      babelify = require('babelify');

const isProduction = (() => {
  const isProd = process.env.NODE_ENV === 'production';

  console.log(`Running in ${isProd ? 'production' : 'development'} mode...`);

  return process.env.NODE_ENV === 'production';
})();

const VENDORS = [
  'react',
  'react-dom',
  'react-addons-css-transition-group',
  'react-redux',
  'redux',
  'url',
  'soundcloud',
  'react-spinner'
];

gulp.task('clear:public', function () {
  return del(['public/js/*.js', 'public/css/*.css']);
});

gulp.task('styles', function () {

  gulp.src('dev/fonts/**.*')
    .pipe(gulp.dest('public/fonts'));

  return gulp.src('dev/**/*.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public'));
});

gulp.task('build:vendor', function () {

  if (isProduction) {
    return browserify()
      .require(VENDORS)
      .bundle()
      .pipe(source('vendor.min.js'))
      .pipe(buffer())
      .pipe(uglify({
        mangle: false,
        compress: true
      }))
      .pipe(gulp.dest('public/js/'));
  } else {
    return browserify()
      .require(VENDORS)
      .bundle()
      .pipe(source('vendor.js'))
      .pipe(gulp.dest('public/js'));
  }
});

gulp.task('js', function () {
  const props = {
    entries: ['dev/js/index.js'],
    cache: {},
    packageCache: {},
    transform: [babelify.configure({
      presets: ["es2015", "react", "stage-2"]
    })]
  };

  if (isProduction) {
    return browserify(props)
      .external(VENDORS)
      .bundle()
      .pipe(source('bundle.min.js'))
      .pipe(buffer())
      .pipe(uglify({
        mangle: false,
        compress: true
      }))
      .pipe(gulp.dest('public/js'));
  } else {
    return browserify(props)
      .external(VENDORS)
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('public/js'));
  }
});

gulp.task('scripts', function () {
  const src = isProduction ? gulp.src(['public/js/vendor.min.js', 'public/js/bundle.min.js']) :
              gulp.src(['public/js/vendor.js', 'public/js/bundle.js']);

  return src
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('serve', function () {
  browserSync.init({
    server: 'public'
  });

  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function () {
  gulp.watch('dev/css/*.css', gulp.series('styles'));
  gulp.watch('dev/js/**/*.js', gulp.series('js'));
});

gulp.task('build', gulp.series(gulp.parallel('js', 'styles', 'build:vendor'), 'scripts'));

gulp.task('dev', gulp.series('clear:public', 'build', gulp.parallel('watch', 'serve')));
gulp.task('prod', gulp.series('clear:public', 'build'));

gulp.task('default', gulp.series('prod'));
