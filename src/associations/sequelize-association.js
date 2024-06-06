import models from '../../models'
import * as response from '../utils/response.util'

export const createCompany = async (req, res) => {
    try {
        const _response = await models.Company.create(req.body)
        return response.sendSuccess(res, 201, 'company created', [_response.toJSON()])
    }
    catch (error) {
        return response.sendError(res, 500, error.message)
    }
}

export const createUser = async (req, res) => {

    try {
        const _response = await models.User.create(req.body)
        return response.sendSuccess(res, 201, 'user created', [_response.toJSON()])
    }
    catch (error) {
        return response.sendError(res, 500, error.message)
    }
}

export const getDetails=async(req,res)=>{
    try{
        const details=await models.User.findAll({
            include:[{
                model:models.Company,
                as:'company',
                attributes:{
                    exclude: ['id', 'createdAt', 'updatedAt']
                }
            }],
            raw:true,
            attributes:{
                exclude:['id','createdAt','updatedAt']
            }
        })
        console.log(details)
        return response.sendSuccess(res,200,'user and company details',details)
    }
    catch(error){
        return response.sendError(res,500,error.message)
    }
}