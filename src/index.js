import express from 'express'
import env from 'dotenv'
import associationRouter from './routes/association-route'
// import models from '../models'

env.config()
const app = express()
app.use(express.json())
app.use('/api/sequelize',associationRouter)

// app.post('/get', async (req, res) => {
//     try {
//         const response = await category.create({
//             name: 'shirt'
//         })
//         return res.send(response.toJSON())
//     }
//     catch (error) {
//         console.log(error.message)
//     }
// })

// app.get('/get', async (req, res) => {
//     try {
//         const response = await models.User.create({
//             email:'john@gmail.com',
//             firstName:'john',
//             lastName:'J',
//             companyId:1
//         })
//         return res.send(response.toJSON())
//     }
//     catch (error) {
//         console.log(error.message)
//     }
// })

// app.get('/details', async (req, res) => {
//     try {
//         const response = await models.User.findAll({
//             include: [
//                 {
//                     model: models.Company,
//                     as:'employ',
//                     attributes: {
//                         exclude: ['id', 'createdAt', 'updatedAt']
//                     }
//                 }
//             ],
//             raw: true
//         }
//         )
//         console.log(response)
//         return res.send(response)
//     }
//     catch (error) {
//         console.log(error.message)
//     }
// })

app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`)
})



