const express = require('express')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/goodjob'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongodb has connected successfully')
})
const User = mongoose.model('user',new mongoose.Schema({
    name: {type:String, require:true},
    height: {type:Number, require:true}
}))
const app = express()

User.create({
    name: 'liao',
    height: 170
}, function(err, doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})

// User.deleteOne({name:'liao'}, function(err){
//     console.log(err)
// })

app.get('/',function(req, res) {
    res.send('<h1>Hello World!</h1>')
})
app.get('/data',function(req, res){
    User.findOne({name:'liao'},function(err, doc){
        res.send(`<h1>${doc.height}</h1>`)
    })
})
app.listen(9093,function(){
    console.log("Start express")
});