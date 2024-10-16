const express = require('express')
const path =require('path')
const blogs = require('../blog_data/blogs')

const router = express.Router()


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../blog_templates/index.html'))
})

router.get('/blog',(req,res)=>{
    // blogs.forEach(e=>{
    //     console.log(e.title)
    // });
    res.sendFile(path.join(__dirname,'../blog_templates/blogHome.html'))
})

router.get('/blogpost/:slug',(req,res)=>{
    myBlog =  req.params.blogblogs.filter((e)=>{
       return e.slug == req.params.slug
    });
    console.log(myBlog)
    res.sendFile(path.join(__dirname,'../blog_templates/blogPage.html'))
})

module.exports = router