var path = require("path");

var gulp = require("gulp");
var less = require("gulp-less");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var webpack = require("webpack-stream");

var webpackConfig = require("./webpack.config.js");

var jsSrcGlob = "./src/**/*.*(js|jsx)";
var cssSrcGlob = "./src/**/*.*(css|less)";

gulp.task("css", () => {
    
    return gulp.src(cssSrcGlob)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write("./"))
        .pipe(rename("app.css"))
        .pipe(gulp.dest("build/app"));
});

gulp.task("js", () => {
    
    return gulp.src(path.resolve(__dirname, "src", "index.js"))
        .pipe(webpack(webpackConfig, require("webpack")))
        .pipe(gulp.dest("build/app"));
});

gulp.task("css-update", [ "css" ], () => {
    
    return gulp.src("build/app/app.css*")
        .pipe(gulp.dest("public/app"));
});

gulp.task("js-update", [ "js" ], () => {
    
    return gulp.src("build/app/app.js*")
        .pipe(gulp.dest("public/app"));
});

gulp.task("dev", [ "css-update", "js-update" ], () => {
    
    gulp.watch(jsSrcGlob, { interval: 500 }, [ "js-update" ]);
    gulp.watch(cssSrcGlob, { interval: 500 }, [ "css-update" ]);
});