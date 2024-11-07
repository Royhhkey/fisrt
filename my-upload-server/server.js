// const express = require('express');
// const multer = require('multer');
// const cors = require('cors');
// const app = express();
// const port = 3000;
// const fs = require('fs');
// const path = require('path');

// const uploadDir = path.join(__dirname, 'uploads');

// // 检查目录是否存在，如果不存在则创建
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }
// // 

// // 配置CORS
// app.use(cors());

// // 配置Multer的存储选项
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')  // 保存的路径，需事先创建
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname.split('.').shift() + '-' + Date.now() + '.' + file.originalname.split('.').pop())
//   }
// });
// const upload = multer({ storage: storage });
// // 路由：处理文件上传
// app.post('/upload', upload.single('file'), (req, res) => {
//   if (req.file) {
//     return res.json({ message: '文件上传成功', file: req.file });
//   } else {
//     return res.status(400).json({ message: '没有文件上传' });
//   }
// });
// // app.use(express.static('uploads'));
// // 路由：处理文件下载
// app.post('/hello', (req, res) => {
//     res.send('Hello World!')
//     console.log('请求路径:', req.path); // 打印请求路径
// })

// // 启动服务器
// app.listen(3000,'',() => {
//   console.log(`服务器运行在 http://120.55.52.240:80`);
// });
