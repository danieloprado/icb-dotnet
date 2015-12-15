var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var paths = {
    sass: ['./scss/**/*.scss'],
    libs: [
        './libs/winstore-jscompat.js',
        './bower_components/ionic/release/js/ionic.bundle.js'//,
        //'./bower_components/angular-aria/angular-aria.js',
        //'./bower_components/angular-material/angular-material.js'
    ],
    js: [
        "js/app.js",
        "js/*.js",
	    "js/*/**.js",
	    "js/*/*/**.js"
    ],
    ionicFonts: [
        './bower_components/ionic/release/fonts/**/*'
    ]
};

gulp.task('default', ['sass', 'libs', 'ionicFonts']);

gulp.task('watch', ['sass', 'libs', 'ionicFonts', "js"], function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.libs, ['libs']);
    gulp.watch(paths.js, ['js']);
});

gulp.task('sass', function (done) {
    gulp.src('./scss/app.scss')
      .pipe($.sass())
      .on('error', $.sass.logError)
      .pipe(gulp.dest('./www/css/'))
      .pipe($.minifyCss({
          keepSpecialComments: 0
      }))
      .pipe(gulp.dest('./www/css/'))
      .on('end', done);
});

gulp.task("libs", function () {
    return gulp.src(paths.libs)
        .pipe($.uglify())
		.pipe($.concat("libs.js"))
		.pipe(gulp.dest("./www/js/"));
});

gulp.task("ionicFonts", function () {
    return gulp.src(paths.ionicFonts)
		.pipe(gulp.dest("./www/fonts/ionicons"));
});


gulp.task("lint", function () {
    return gulp.src(paths.js)
		.pipe($.jshint())
		.pipe($.jshint.reporter("default"));
});

gulp.task("js", ["lint"], function () {
    return gulp.src(paths.js)
		.pipe($.sourcemaps.init())
		.pipe($.uglify())
		.pipe($.concat("app.js"))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest("./www/js/"));
});