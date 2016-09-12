const 	gulp = require('gulp'),
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

gulp.task('clear:public', function() {
	return del(['public/js/*.js', 'public/css/*.css']);
});

gulp.task('styles', function() {

	gulp.src('dev/fonts/**.*')
		.pipe(gulp.dest('public/fonts'));

	return gulp.src('dev/**/*.css')
		.pipe(autoprefixer())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('public'));
});

gulp.task('build:vendor', function() {
	process.env.NODE_ENV = 'production';

	return browserify()
		.require(VENDORS)
		.bundle()
		.pipe(source('vendor.js'))
		.pipe(gulp.dest('public/js/'))
		.pipe(buffer())
		.pipe(uglify({
			mangle : false,
			compress : true
		}))
		.pipe(rename('vendor.min.js'))
		.pipe(gulp.dest('public/js/'))
});

gulp.task('js', function() {
	const props = {
		entries: ['dev/js/index.js'],
		cache: {},
	    packageCache: {},
		transform: [babelify.configure({
			presets: ["es2015", "react", "stage-2"]
		})]
	};

	return browserify(props)
		.external(VENDORS)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('public/js'))
		.pipe(buffer())
		.pipe(uglify({
			mangle : false,
			compress : true
		}))
		.pipe(rename('bundle.min.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('scripts', function() {
	return gulp.src(['public/js/vendor.min.js', 'public/js/bundle.min.js'])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('serve', function() {
	browserSync.init({
		server: 'public'
	});

	browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function() {
	gulp.watch('dev/css/*.css', gulp.series('styles'));
	gulp.watch('dev/js/**/*.js', gulp.series('js'));
});

gulp.task('build:app', gulp.series('clear:public', gulp.parallel('js', 'styles')));
gulp.task('build:app-production', gulp.series('clear:public', gulp.parallel('styles', gulp.series('js', 'build:vendor', 'scripts'))));

gulp.task('dev', gulp.series('build:app', gulp.parallel('watch', 'serve')));
gulp.task('prod', gulp.series('build:app-production', gulp.parallel('watch', 'serve')));

gulp.task('default', gulp.series('prod'));