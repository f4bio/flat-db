const exec = require('child_process').execSync;
const mkdir = require('mkdirp').sync;

const {
  readdirSync,
  existsSync,
  unlinkSync,
  readFileSync,
  writeFileSync,
} = require('fs');

const rmdir = (d) => {
  return exec(`rm -rf ${d}`);
};

module.exports = {
  readdirSync,
  existsSync,
  unlinkSync,
  readFileSync,
  writeFileSync,
  mkdir,
  rmdir,
};
