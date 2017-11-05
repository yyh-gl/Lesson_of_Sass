var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
		console.log("hoge")
});

gulp.task('sass', function() {
		// src()：読みに行くファイルを指定
		gulp.src('./scss/**/*.scss')
		// sass()："gulp-sass"プラグインを使用
				.pipe(sass())
		// dest()：出力先の指定
				.pipe(gulp.dest('./css'))		
});
