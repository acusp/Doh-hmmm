// gulp核心文件
var gulp = require('gulp');
// 压缩js
var uglify = require('gulp-uglify');
// 压缩css
var cleanCSS = require('gulp-clean-css');
// 压缩图片
var imagemin = require('gulp-imagemin');
// 合并文件
var concat = require('gulp-concat');
// 清除打包目录
var clean = require('gulp-clean');
// 本地服务器
var gls = require('gulp-live-server');

var config = {
  src: {
    html: '*.html',
    js: '*.js',
    css: '*.css',
    image: 'image/',
  },
  dest: 'dist/',
}

// 压缩合并html
gulp.task('html', function() {
  gulp
    .src(config.src.html)
    .pipe(gulp.dest(config.dest));
})
// 压缩合并js
gulp.task('js', function() {
  gulp
    .src(config.src.js)
    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
})
// 压缩合并css
gulp.task('css', () => {
  gulp
    .src(config.src.css)
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.dest));
})
// 压缩图片
gulp.task('img', function() {
  gulp
    .src(config.src.image)
    .pipe(
      imagemin({
        progressive: true
      })
    )
    .pipe(gulp.dest(config.dest + '/img'));
})

// 清除目标文件夹
gulp.task('clean', function() {
  return gulp.src(config.dest).pipe(clean());
})

gulp.task('minify', ['html', 'js', 'css', 'img'])

// gulp build
gulp.task('build', ['clean'], function() {
  return gulp.start('minify');
})

gulp.task('watch', function() {
  gulp.watch(config.src.html, ['html']);
  gulp.watch(config.src.js, ['js']);
  gulp.watch(config.src.css, ['css']);
});

gulp.task('default', ['watch'], function() {
  var server = gls.static('dist', 8888);
  server.start();
  gulp.watch([config.src.html, config.src.js, config.src.css], function (file) {
    server.notify.apply(server, [file]);
  });
})
