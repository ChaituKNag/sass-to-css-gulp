"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var tap = require("gulp-tap");

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      tap(function(file, t) {
        let newFilePath = file.path
          .replace("scss/", "components/")
          .replace(".css", "");
        t.through(gulp.dest, [newFilePath]);
      })
    );
});

gulp.task("sass:watch", function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});
