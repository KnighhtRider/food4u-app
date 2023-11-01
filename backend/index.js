const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const mongoDB = require('./db'); 
mongoDB(); 

app.use(cors(
  {
    origin: ["https://food4u-app.vercel.app"],
    methods: ["POST", "GET"],
    Credentials: true
  }
)) 


app.use((req, res, next) => { 
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.get('/', (req, res) => { 
  res.send('Hello World!')
})

app.use(express.json())
app.use('/api', require('./Routes/createUser')) 
app.use('/api', require('./Routes/DisplayData')) 
app.use('/api', require('./Routes/OrderData'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
