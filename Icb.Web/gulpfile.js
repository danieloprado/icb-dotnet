"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var rimraf = require("rimraf");

var paths = {
    webrootJs: "./wwwroot/js",
    webrootCss: "./wwwroot/css",
    webrootFonts: "./wwwroot/fonts",

    sass: [
        "scss/app.scss"
    ],
    cssLibs: [
        "bower_components/bootstrap/dist/css/bootstrap.min.css",
        "bower_components/animate.css/animate.min.css"
    ],
    cssFonts: [
        "bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff"
    ],
    jsLibs: [
        "bower_components/jquery/dist/jquery.min.js",

        //jquery validate
        "bower_components/jquery-validation/dist/jquery.validate.min.js",
        "bower_components/jquery-validation/dist/additional-methods.min.js",
        "bower_components/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js",

        //bootstrap
        "bower_components/bootstrap/dist/js/bootstrap.min.js",

        //angular
        "node_modules/angular2/bundles/angular2-polyfills.js",
        "node_modules/systemjs/dist/system.src.js",
        "node_modules/rxjs/bundles/Rx.min.js",
        "node_modules/angular2/bundles/angular2.dev.js",
        "node_modules/angular2/bundles/router.dev.js",
        "node_modules/angular2/bundles/http.dev.js"
    ]
};

//CLEAN
gulp.task("clean:js", function (cb) {
    rimraf(paths.webrootJs + "**/*.js", cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.webrootCss + "app.css", cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

//SASS
gulp.task("css:fonts", function () {
    return gulp.src(paths.cssFonts)
		.pipe(gulp.dest(paths.webrootFonts));
});

gulp.task("css:libs", ["css:fonts"], function () {
    return gulp.src(paths.cssLibs)
		.pipe($.concat("libs.css"))
		.pipe(gulp.dest(paths.webrootCss));
});

gulp.task("sass", function () {
    return gulp.src(paths.sass)
        .pipe($.sourcemaps.init())
		.pipe($.sass({
		    outputStyle: "compressed",
		}).on('error', $.sass.logError))
		.pipe($.autoprefixer({
		    browsers: ["last 2 versions", "ie >= 9"]
		}))
        .pipe($.sourcemaps.write())
		.pipe(gulp.dest(paths.webrootCss))
		.pipe($.livereload({ start: true }));
});


//JS
gulp.task("js:libs", function () {
    return gulp.src(paths.jsLibs)
		.pipe($.concat("libs.js"))
		.pipe(gulp.dest(paths.webrootJs));
});

gulp.task("js:hint", function () {
    return gulp.src(paths.js)
		.pipe($.jshint())
		.pipe($.jshint.reporter("default"));
});

//DEFAULT
gulp.task("default", ["js:libs", "css:libs", "sass"]);

gulp.task("watch", ["default"], function () {
    $.livereload.listen();

    gulp.watch(["scss/**/*.scss"], ["sass"]);
});
