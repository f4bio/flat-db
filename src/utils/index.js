// index
const {
  existsSync,
  unlinkSync,
  mkdir,
  rmdir,
} = require('../adapter');

const fixPath = require('./fixPath');
const readFile = require('./readFile');
const writeFile = require('./writeFile');
const delFile = (f) => unlinkSync(f);
const exists = (f) => existsSync(f);

const normalize = require('./normalize');
const logger = require('./logger');

module.exports = {
  fixPath,
  readFile,
  writeFile,
  delFile,
  exists,
  mkdir,
  rmdir,
  normalize,
  logger,
};
