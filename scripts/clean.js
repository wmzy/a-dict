import del from 'del';

async function clean() {
  await del(['dist'], {dot: true});
}

export default clean;
