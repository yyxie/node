const fs = require('fs');
// 创建文件夹
const mkdir = (pos, dirArray, _callback) => {
  const len = dirArray.length;
  if (pos >= len || pos > 10) {
    _callback();
    return;
  }
  let currentDir = '';
  for (let i = 0; i <= pos; i++) {
    currentDir += '/';
    currentDir += dirArray[i];
  }
  fs.exists(currentDir, (exists) => {
    if (!exists) {
      fs.mkdir(currentDir, (err) => {
        if (err) {
          console.log(`${currentDir}文件夹-创建失败！`);
        } else {
          mkdir(pos + 1, dirArray, _callback);
        }
      });
    } else {
      mkdir(pos + 1, dirArray, _callback);
    }
  });
};

// 创建目录结构
const mkDirs = (dirPath, _callback) => {
  const dirPathNew = dirPath.concat([]);
  const dirArray = dirPathNew.split('/').splice(1);
  fs.exists(dirPath, (exists) => {
    if (!exists) {
      mkdir(0, dirArray, () => {
        _callback();
      });
    } else {
      _callback();
    }
  });
};

module.exports = mkDirs;
