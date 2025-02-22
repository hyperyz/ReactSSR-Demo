const express = require('express')

const app = express()

// 任何一个get请求，都响应HTML
app.get('/', (req, res) => {
    html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React SSR</title>
        </head>
        <body>
            <div id="root">
                hello world12
            </div>
        </body>
    </html>
    `
    res.send(html)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

