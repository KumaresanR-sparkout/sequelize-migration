import express from 'express'
import env from 'dotenv'
import associationRouter from './routes/association-route'

env.config()
const app = express()
app.use(express.json())

app.use('/api/sequelize',associationRouter)

app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`)
})



