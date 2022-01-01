const express = require('express')
var logger =  require('./config/winston'); 
const morgan = require('morgan');
const app = express()
const port = 3000


app.use(morgan("combined", { stream: logger.stream }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  logger.info(`Example app listening at http://localhost:${port}`)
})