"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');

var dest = "public"

gulp.task("copyhtml", function() {
  gulp.src("html/**/*.html")
    .pipe(gulp.dest(dest))
});

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]})
    ]))
    .pipe(gulp.dest(dest))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "./public/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("html/**/*.html"), ["copyhtml"];
  gulp.watch("*.html").on("change", server.reload);
});

/******************************
 * SVG icons task
 ******************************/
gulp.task("icons", function () {
  return gulp
    .src("img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: false
    }))
    .pipe(gulp.dest(dest));
});
