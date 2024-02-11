const express = require('express');
const cors = require('cors');
const PORT= 5400
const app = express()

app.get('/',(req,res)=>{
  res.send("Hello")
})


app.listen(PORT,()=>{
  console.log('server running')
})