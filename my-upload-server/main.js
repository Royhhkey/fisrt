const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.post('/hello', (req, res) => {
    res.send('Hello World!')
    console.log('请求路径:', req.path); // 打印请求路径
    console.log('请求参数:', req.body); // 打印请求参数
})

app.listen(port,'',() => {
  console.log(`服务器运行在 http://120.55.52.240:${port}`);
  
});