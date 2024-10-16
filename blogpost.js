const express = require('express')
const path = require('path')
const app = express()
const port = 3000
 

// we will use built-in middleware
app.use(express.static(path.join(__dirname,'static blog post')))
app.use('/',require(path.join(__dirname,'blog_routes/blog.js')))

app.get('/About', (req, res) => {
     //res.send("About")
     // res.sendFile(path.join(__dirname,'index.html'))
     //res.status(403)
     res.json({"Vishal":27})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})