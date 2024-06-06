import express from 'express'
import * as associations from '../associations/sequelize-association'
const router=express.Router()

//@POST
router.post('/user',associations.createUser)
router.post('/company',associations.createCompany)

//@GET
router.get('/details',associations.getDetails)
//@PUT

//@DELETE


export default router