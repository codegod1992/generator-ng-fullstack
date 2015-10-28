import gulp from 'gulp';
import babel from 'gulp-babel';

const ES6_PATH = ['**/*.es6', '!node_modules'];

gulp.task('compile', () => {
    return gulp.src(ES6_PATH)
               .pipe(babel({stage: 0}))
               .pipe(gulp.dest('.'));
});
