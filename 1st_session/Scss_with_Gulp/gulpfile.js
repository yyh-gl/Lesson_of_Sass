var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
		console.log("hoge")
});

// 自動コンパイルタスク
gulp.task('sass', function() {
		// src()：読みに行くファイルを指定
		gulp.src('./scss/**/*.scss')
		// sass()："gulp-sass"プラグインを使用
				.pipe(sass())
		// dest()：出力先の指定
				.pipe(gulp.dest('./css'))		
});

// ファイル更新有無の監視タスク
gulp.task('watch', function() {
		// 1つ目の[]内が監視するファイルのパス，2つ目の[]内は実行するGulpタスク
		gulp.watch(['./scss/**/*'],['sass']);
});
