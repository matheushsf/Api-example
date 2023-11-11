import User from '@/core/user/models/User';
import { prisma } from '../Prisma'

export default class UserRepository {
    constructor( ){ }

    async findUserByUsername(userName: string){
        try{
            console.log(userName)
            return await prisma.user.findUnique({where: {UserName: userName}})
        }catch(error){
            throw new Error("Erro com banco de dados")
        }
    }

    
    async CreateUser(user: User){
        try{
            console.log(user)
           return await prisma.user.create({
                data: user
            })
        }catch(error){
            console.log(error)
            throw new Error("Erro com banco de dados")
        }
    }
}