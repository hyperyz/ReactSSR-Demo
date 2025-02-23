import React from 'react'
import App from './App'
import ReactDom from 'react-dom/server'
import getScripts from './getScripts'

export default (req, res) => {
    // 把组件渲染成字符串
    const HomeString = ReactDom.renderToString(<App />)
    console.log(HomeString);

    let html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React SSR</title>
        </head>
        <body>
            <div id="root">${HomeString}</div>
            ${getScripts()}
        </body>
    </html>
    `
    res.send(html)
}