
/**
 * Created by DreamBoy on 2018/12/22
 */
var gulp = require('gulp'),
    livereload = require(' gulp-livereload ');
 
gulp.task('watch', function() { //这里的watch，是自定义的，携程live或者别的也行
    livereload.listen();//这里需要注意！旧版使用var server = livereload();已经失效  
    // app/**/*.* 的意思是 app 文件夹下的 任何文件夹 的 任何文件
    gulp.watch('./**/*.*', function(event) {
    	livereload.changed(event.path);
    });
});
