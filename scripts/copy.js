import path from 'path';
import gaze from 'gaze';
import Promise from 'bluebird';
import cpy from 'cpy';


async function copy({watch} = {}) {
  await cpy('src/*.{html,css}', 'dist')
  await cpy('src/assets/*.png', 'dist/assets')

  if (watch) {
    const watcher = await new Promise((resolve, reject) => {
      gaze('src/**/*.{html, css}', (err, val) => err ? reject(err) : resolve(val));
    });

    const cp = async(file) => {
      const relPath = file.substr(path.join(__dirname, '../src/').length);
      await ncp(`src/${relPath}`, `dist/${relPath}`);
    };

    watcher.on('changed', cp);
    watcher.on('added', cp);
  }
}

export default copy;
