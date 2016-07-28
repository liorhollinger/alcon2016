const gulp = require('gulp');

const clean = require('gulp-clean');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const server = require('gulp-server-livereload');
const sass = require('gulp-sass');
const templateCache = require('gulp-angular-templatecache');
const argv = require('yargs').argv;

const bases = {
    app: 'app/',
    dist: 'dist/'
};

if (argv.env == 'PROD') {
    bases.dist = 'prod/';
}

const paths = {
    scripts: ['**/*.js', '!**/*_test.js', '!bower_components/**/*.js'],
    //libs: ['scripts/libs/jquery/dist/jquery.js', 'scripts/libs/underscore/underscore.js', 'scripts/backbone/backbone.js'],
    libs: ['bower_components/**/*.js'],
    libFiles: [
        'bower_components/angular/angular.js', 
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/swiper/dist/js/swiper.js',
        'bower_components/angular-swiper/dist/angular-swiper.js',
        'bower_components/lodash/lodash.js'],
    sass: ['css/*.scss'],
    styles: ['css/main.css'],
    libsStyles: ['bower_components/**/*.css'],
    libsStyleFiles: [
        'bower_components/html5-boilerplate/dist/css/normalize.css',
        'bower_components/html5-boilerplate/dist/css/main.css',
        'bower_components/swiper/dist/css/swiper.min.css'],
    html: ['dist/index.html', '404.html'],
    fonts: ['fonts/*.woff', 'fonts/*.woff2'],
    images: ['img/**/*.png', 'img/**/*.jpg', 'img/**/*.JPG'],
    extras: ['crossdomain.xml', 'humans.txt', 'manifest.appcache', 'robots.txt', 'favicon.ico'],
    angularTemplates: ['**/*.html', '!index.html', '!index-async.html', '!bower_components/**/*.html']
};

// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src(bases.dist)
        .pipe(clean());
});

// console.log(paths.libFiles.concat(paths.scripts))


gulp.task('libScripts', ['clean'], function() {
    gulp.src(paths.libFiles, {cwd: bases.app})
        // .pipe(jshint())
        // .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest(bases.dist + '/'));
});

// Process scripts and concatenate them into one output file
gulp.task('scripts', ['clean'], function() {
    gulp.src(paths.scripts, {cwd: bases.app})
        // .pipe(jshint())
        // .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(bases.dist + '/'));
});

gulp.task('cssLibs', ['clean'], function() {
    gulp.src(paths.libsStyleFiles, {cwd: bases.app})
        // .pipe(jshint())
        // .pipe(jshint.reporter('default'))
        .pipe(concat('libs.css'))
        .pipe(gulp.dest(bases.dist + '/css'));
});

gulp.task('angularTpls', function () {
  return gulp.src(paths.angularTemplates, {cwd: bases.app})
    .pipe(templateCache({standalone: true}))
    .pipe(gulp.dest(bases.dist));
});
gulp.task('angularTpls_dev', function () {
  return gulp.src(paths.angularTemplates, {cwd: bases.app})
    .pipe(templateCache({standalone: true}))
    .pipe(gulp.dest(bases.app));
});


// Imagemin images and ouput them in dist
gulp.task('imagemin', ['clean'], function() {
    gulp.src(paths.images, {cwd: bases.app})
        .pipe(imagemin())
        .pipe(gulp.dest(bases.dist + 'img/'));
});

// Copy all other files to dist directly
gulp.task('copy', [], function() {
    // Copy html
    gulp.src(paths.html, {cwd: bases.app})
        .pipe(gulp.dest(bases.dist));

    // Copy styles
    gulp.src(paths.styles, {cwd: bases.app})
        .pipe(gulp.dest(bases.dist + 'css'));

    // gulp.src(paths.libFiles, {cwd: bases.app})
    //     .pipe(gulp.dest(bases.dist + 'lib-files'));

    // copy images
    gulp.src(paths.images, {cwd: bases.app})
        .pipe(gulp.dest(bases.dist + 'img'));
    
    // copy fonts
    gulp.src(paths.fonts, {cwd: bases.app})
        .pipe(gulp.dest(bases.dist + 'fonts'));


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
//angularTemplates

// Define the default task as a sequence of the above tasks
gulp.task('build:prod', ['clean', 'libScripts', 'scripts', 'cssLibs','angularTpls', 'imagemin', 'copy']);

gulp.task('dev', ['angularTpls_dev', 'html:watch']);
gulp.task('html:watch', function () {
    gulp.watch(paths.angularTemplates, {cwd: bases.app}, ['dev']);
});
//