import gulp from 'gulp';
import browserSync from 'browser-sync';
import {path, tasks} from './const';

gulp.task(tasks.CLIENT_RELOAD, () => {
  return browserSync.reload();
});

gulp.task(tasks.CLIENT_WATCH, [tasks.CLIENT_BUILD_TS], () => {
  <% if (!!secure) { %>
  browserSync({
    proxy: "https://localhost:3333", 
    reloadDelay: 1000
  });
  <%} else {%>
  browserSync({
    proxy: "http://localhost:3333", 
    reloadDelay: 1000
  });
  <% } %>

  let _watchable = [];

  _watchable.push(path.DEV + '**/.ts');
  _watchable.push(path.DEV + '**/*.css');
  _watchable.push(path.DEV + '**/*.html');

  return gulp.watch(_watchable, [
    tasks.CLIENT_BUILD_TS, 
    tasks.CLIENT_RELOAD
  ]);
});
