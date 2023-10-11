const express = require("express");
const app = express();
const newsRoute = require('./routes/news')
var cors = require('cors');

app.use(cors())
app.use(express.json());

app.use('/api/news',newsRoute)
// app.use('/api/company',companyRoute)



app.use((err, req, res, next) =>{
  console.error("err.stack")
  res.status(500).send({data:{message:err.message}})
})

app.listen(9001,()=>{
  console.log('Running at 9001');
})
