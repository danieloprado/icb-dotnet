"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var rimraf = require("rimraf");

var paths = {
    webroot: "./wwwroot/"
};

paths.js = [
    paths.webroot + "app/module.js",
    paths.webroot + "app/**/*.js"
];
paths.jsLibs = [
    paths.webroot + "lib/jquery/dist/jquery.min.js",

    //jquery validate
    paths.webroot + "lib/jquery-validation/dist/jquery.validate.min.js",
    paths.webroot + "lib/jquery-validation/dist/additional-methods.min.js",
    paths.webroot + "lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js",

    //bootstrap
    paths.webroot + "lib/bootstrap/dist/js/bootstrap.min.js",

    //angular
    paths.webroot + "lib/angular/angular.min.js",
    paths.webroot + "lib/angular-animate/angular-animate.min.js",
    paths.webroot + "lib/angular-aria/angular-aria.min.js",
    paths.webroot + "lib/angular-material/angular-material.min.js"

];
paths.jsFolder = paths.webroot + "js";

paths.sass = paths.webroot + "scss/app.scss";
paths.cssFolder = paths.webroot + "css";


//CLEAN
gulp.task("clean:js", function (cb) {
    rimraf(paths.jsFolder + "**/*.js", cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.cssFolder + "app.css", cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

//SASS
gulp.task("sass", function () {
    return gulp.src(paths.sass)
        .pipe($.sourcemaps.init())
		.pipe($.sass({
		    outputStyle: "compressed"
		}).on('error', $.sass.logError))
		.pipe($.autoprefixer({
		    browsers: ["last 2 versions", "ie >= 9"]
		}))
        .pipe($.sourcemaps.write())
		.pipe(gulp.dest(paths.cssFolder));
});


//JS
gulp.task("js:libs", function () {
    return gulp.src(paths.jsLibs)
        //.pipe($.uglify())
		.pipe($.concat("libs.js"))
		.pipe(gulp.dest(paths.jsFolder));
});

gulp.task("js:hint", function () {
    return gulp.src(paths.js)
		.pipe($.jshint())
		.pipe($.jshint.reporter("default"));
});

gulp.task("js", ["js:hint"], function () {
    return gulp.src(paths.js)
		.pipe($.sourcemaps.init())
		.pipe($.uglify())
		.pipe($.concat("app.js"))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest(paths.jsFolder));
});

//DEFAULT
gulp.task("default", ["js:libs", "js", "sass"]);

gulp.task("watch", ["default"], function () {
    gulp.watch([paths.webroot + "scss/**/*.scss"], ["sass"]);
    gulp.watch(paths.js, ["js"]);
});
