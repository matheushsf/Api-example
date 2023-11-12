import { prisma } from '../Prisma'

export default class UserRepository {
    constructor( ){ }

    async findAllCollaborator(){
        try{
            return  await prisma.collaborator.findMany()
        }catch(error){
            throw new Error("Erro ao realizar operacão")
        }
    }
}