const mkDirs = require('./makeDir.js');
const fs = require('fs');
const path = require('path');

// 图片类型map
const imgTypes = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

// 文件遍历方法
const traverFile = (filePath, callBack) => {
  // 根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, (err, files) => {
    if (err) {
      console.warn(err);
    } else {
      console.warn('files', files);
      // 遍历读取到的文件列表
      files.forEach((fileName) => {
        // 获取当前文件的绝对路径
        const fileDir = path.join(filePath, fileName);
        // 根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(fileDir, (eror, stats) => {
          if (eror) {
            console.warn('获取文件stats失败');
          } else {
            const isFile = stats.isFile(); // 是文件
            const isDir = stats.isDirectory(); // 是文件夹
            if (isFile) {
              console.log('isFile', fileDir);

              // callBack && callBack(fileDir, fileName);
              /* 处理文件 */
              const isImg = imgTypes[path.extname(fileName)];
              if (!isImg) return null;
              if (isImg) {
                const toWardDir = path.join(fileDir.replace('src', 'lib'));
                // 创建文件夹
                mkDirs(filePath.replace('src', 'lib'), () => {
                  // 创建文件读取流
                  const readStream = fs.createReadStream(fileDir);
                  // 创建文件写入流
                  const writeStream = fs.createWriteStream(toWardDir);
                  // 写文件
                  readStream.pipe(writeStream);
                });
              }
              /* 处理文件 */
            }
            if (isDir) {
              console.log('isDir', fileDir);
              traverFile(fileDir, callBack);// 递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        });
      });
    }
  });
};

module.exports = traverFile;
