var iconPackager = require('@ephox/oxide-icons-tools').iconPackager;
var clean = require('gulp-clean');
var gulp = require('gulp');
const fs = require('fs');

gulp.task('icon-packager', function () {
    const contents = fs.readFileSync('package.json');
    const name = JSON.parse(contents).iconPackName;

    return gulp.src('src/svg/**/*.svg')
        .pipe(iconPackager({
            name, svgo: {
                plugins: [
                    "removeViewBox",
                    {
                        name: 'removeAttrs',
                        params: {
                            attrs: 'null'
                        }
                    },
                    {
                        name: "removeAttrs",
                        params: {
                            attrs: ["svg:width", "svg:height", "svg:class"],
                            elemSeparator: ":",
                            preserveCurrentColor: true
                        }
                    },
                    {
                        name: "addAttributesToSVGElement",
                        params: {
                            attributes: [`width="24"`, `height="24"`]
                        }
                    },
                ]
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src('./dist', {
        read: false,
        allowEmpty: true,
    }).pipe(clean());
});
gulp.task('copyjs', function () {
    return gulp.src('./dist/icons/colorIcon/icons.js')
        .pipe(gulp.dest('F:\\programs\\cygwin\\home\\workspace\\work_folder\\zxxdyxt\\zxxdykt-ui\\public\\icons\\colorIcon'));
});
gulp.task('default', gulp.series('clean', 'icon-packager', 'copyjs'));
// gulp.task('default', gulp.series('clean', 'icon-packager'));
