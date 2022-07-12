const express = require('express')
const detailsRouter = require('./routes/details')
const app = express()
const cors = require('cors')
app.use(cors())
app.use('/api',detailsRouter)

app.listen(3001,()=>{
    console.log('listening...')
})