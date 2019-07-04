# node
node学习(文件操作)

## 方法和作用

### file

* fs.readdir(filePath, (err, files) => {}) // 根据文件路径读取文件， 返回文件列表

* fs.stat(fileDir, (eror, stats) => {}) // 根据文件路径获取文件信息，返回一个fs.Stats对象

* fs.createReadStream(fileDir) // 创建文件读取流

* fs.createWriteStream(toWardDir) // 创建文件写入流

* fs.exists(path, callback) // 检测给定的路径是否存在。

* fs.mkdir(path[, mode], callback) //创建目录
