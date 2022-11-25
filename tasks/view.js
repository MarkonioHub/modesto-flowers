// yarn add -D gulp-pug gulp-plumber gulp-typograf gulp-data
const { src, dest, series } = require('gulp')
const plumber = require('gulp-plumber')
const typograf = require('gulp-typograf')
const formatHtml = require('gulp-format-html')

const env = require('./env')
const { browserSync } = require('./browserSync')

const path = 'assets/views/**/*.html'

function view () {
  return src(path)
    .pipe(plumber())
    .pipe(formatHtml())
    .pipe(dest(env.outputFolder))
      .on('end', () => browserSync.reload())
}

module.exports = {
  build: series(view),
  path
}
