const express = require('express')
// const cors = require('cors')


const app = express()

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/productRouter.js')
app.use('/products', router)

//static Images Folder

app.use('/images', express.static('./images'))


//port

const PORT = process.env.PORT || 3000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})