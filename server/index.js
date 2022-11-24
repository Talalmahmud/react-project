
import express from 'express';
import data from './data.js';
import cors from 'cors';

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))

app.get('/api/products', (req, res)=>{
    res.send(data.products)
})


app.use('all', (req, res, err)=>{
    res.send({message: err.message})

})



const port = process.env.PORT || 8000

app.listen(port , ()=>{
    console.log(`Server running: http://localhost:${port}`)
})