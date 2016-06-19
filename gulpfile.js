const gulp = require('gulp');

const clean = require('gulp-clean');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const server = require('gulp-server-livereload');
const sass = require('gulp-sass');

const bases = {
    app: 'app/',
    dist: 'dist/'
};

const paths = {
    scripts: ['**/*.js', '!libs/**/*.js'],
    //libs: ['scripts/libs/jquery/dist/jquery.js', 'scripts/libs/underscore/underscore.js', 'scripts/backbone/backbone.js'],
    libs: ['bower_components/**/*.js'],
    sass: ['css/*.scss'],
    styles: ['css/**/main.css'],
    html: ['index.html', '404.html'],
    images: ['img/**/*.png'],
    extras: ['crossdomain.xml', 'humans.txt', 'manifest.appcache', 'robots.txt', 'favicon.ico']
};

// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src(bases.dist)
        .pipe(clean());
});

// Process scripts and concatenate them into one output file
gulp.task('scripts', ['clean'], function() {
    gulp.src(paths.scripts, {cwd: bases.app})
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        //.pipe(uglify())
        //.pipe(concat('app.min.js'))
        .pipe(gulp.dest(bases.dist + '/'));
});

gulp.task('scripts_prod', ['clean'], function() {
    gulp.src(paths.scripts, {cwd: bases.app})
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(bases.dist + 'scripts/'));
});

// Imagemin images and ouput them in dist
gulp.task('imagemin', ['clean'], function() {
    gulp.src(paths.images, {cwd: bases.app})
        .pipe(imagemin())
        .pipe(gulp.dest(bases.dist + 'images/'));
});

// Copy all other files to dist directly
gulp.task('copy', ['clean'], function() {
    // Copy html
    gulp.src(paths.html, {cwd: bases.app})
        .pipe(gulp.dest(bases.dist));

    // Copy styles
    gulp.src(paths.styles, {cwd: bases.app})
        .pipe(gulp.dest(bases.dist + 'styles'));

    // Copy lib scripts, maintaining the original directory structure
    gulp.src(paths.libs, {cwd: 'app/**'})
        .pipe(gulp.dest(bases.dist));

    // Copy extra html5bp files
    gulp.src(paths.extras, {cwd: bases.app})
        .pipe(gulp.dest(bases.dist));
});

// A development task to run anytime a file changes
gulp.task('watch', function() {
    gulp.watch('app/**/*', ['scripts', 'copy']);
});

gulp.task('webserver', function() {
    gulp.src(bases.dist)
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

//'./sass/**/*.scss'
gulp.task('sass', function () {
    return gulp.src(paths.sass, {cwd: bases.app})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/', {cwd: bases.app}));
});

gulp.task('sass:watch', function () {
    gulp.watch(paths.sass, {cwd: bases.app}, ['sass']);
});

// Define the default task as a sequence of the above tasks
gulp.task('default', ['clean', 'scripts', 'imagemin', 'copy']);
