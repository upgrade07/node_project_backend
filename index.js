const express = require('express')
const detailsRouter = require('./routes/details')
const app = express()
const cors = require('cors')
app.use(cors())
app.use('/',function(req,res){
    res.send("app is running")
})
app.use('/api',detailsRouter)

app.listen(3001,()=>{
    console.log('listening...')
})