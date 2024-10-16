const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//create middleware by developer
// const vishalMiddleware = (req,res,next)=>{
//     console.log(req)
//     next()
// }

// we will use built-in middleware
app.use(express.static(path.join(__dirname,'public')))

app.get('/hello/:name', (req, res) => {
  res.send('Hello Friend!'+req.params.name)
})

app.get('/About', (req, res) => {
     //res.send("About")
     // res.sendFile(path.join(__dirname,'index.html'))
     //res.status(403)
     res.json({"Vishal":27})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})