const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const mongoDB = require('./db'); 
mongoDB(); 

// app.use(cors(
//   {
//     origin: ["https://food4u-app.vercel.app"],
//     methods: ["POST", "GET", "UPDATE", "DELETE"],
//     Credentials: true
//   }
// )) 

app.use(cors({
    origin: 'https://food4u-app.vercel.app', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
}))



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