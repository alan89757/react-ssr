import express from 'express'
import React from 'react'//引入React以支持JSX的语法
import { renderToString } from 'react-dom/server'//引入renderToString方法
import Home from'./src/Home.js'

// const express = require('express')
const app = express();
const content = renderToString(<Home/>);

app.get("/", (req, res)=> res.send(`
  <html>
    <head>
      <title>ssr demo</title>
    </head>
    <body>
      ${content}
    </body>
  </html>
`));

app.listen(3000, ()=> {
  console.log("App listening on port 3000 !")
});

