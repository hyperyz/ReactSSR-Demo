import express from 'express'
import render from './render'
const app = express()

// 设置静态文件目录，找到public下的文件就优先展示，否则就按照下面的get请求响应
app.use(express.static('public'))

// 任何一个get请求，都响应HTML
app.get('/', render)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
    console.log('http://localhost:3000')
})

