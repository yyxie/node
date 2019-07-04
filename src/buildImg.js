const traverFile = require('./traverFile.js');
const mkDirs = require('./makeDir.js');

const path = require('path');
const fs = require('fs');

// 解析需要遍历的文件夹
const filePath = path.resolve('./src');

// 图片类型map
const imgTypes = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

// 调用文件遍历方法
traverFile(filePath, function (fileDir, fileName) {
  console.log('fileDir', fileDir);
  /* const isImg = imgTypes[path.extname(fileName)];
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
    }*/
});
