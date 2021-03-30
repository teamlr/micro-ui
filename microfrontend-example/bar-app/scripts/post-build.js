const concat = require('concat');
const cpx = require('cpx');

(async function() {
  const dist = './dist/bar-microapp';
  const outputDirectory = './gen';
  const outputFile = 'bar-microapp.js';

  const filesToConcat = [ `${dist}/runtime-es2015.js`, `${dist}/polyfills-es2015.js`, `${dist}/scripts.js`, `${dist}/main-es2015.js` ];
  const filesToCopy = [ '[0-9]*-es2015.js', 'styles.css'];

  filesToCopy.forEach(filePattern => cpx.copySync(`${dist}/${filePattern}`, outputDirectory));
  await concat(filesToConcat, `${outputDirectory}/${outputFile}`);
})();
