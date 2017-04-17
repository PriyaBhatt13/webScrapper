const gulp = require('gulp');
const es6Pipeline = require('gulp-webpack-es6-pipeline');
const sass = require('gulp-sass');

es6Pipeline.registerBuildGulpTasks(
    gulp,
    {
        entryPoints: {
            'app': __dirname + '/frontend/scripts/index.jsx'
        },
        outputDir: __dirname + '/frontend/bundles/scripts/'
    }
);

var input = __dirname + '/frontend/stylesheets/*.scss';
var output =__dirname + '/frontend/bundles/styles/';

gulp.task('sass', function() {
    gulp.src(input)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
  return gulp
    .watch(input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});