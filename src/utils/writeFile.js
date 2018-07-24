/**
 * FlatDB - utils -> writeFile
 * @ndaidong
 **/
const {
  isString,
} = require('bellajs');

const {
  writeFileSync,
} = require('../adapter');

const writeFile = (f, data = '') => {
  let content = isString(data) ? data : JSON.stringify(data);
  return writeFileSync(f, content, 'utf8');
};

module.exports = writeFile;
