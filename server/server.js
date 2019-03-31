const express = require('express')

const app =express()

app.get('/',function(req, res){
    return res.write('<h1>Hello World</h1>')
})

app.get('/data',function(req, res){
    return res.json({name:'liao', age:10})
})
app.listen(9093, function(){
    console.log('Server begin at 9093')
})