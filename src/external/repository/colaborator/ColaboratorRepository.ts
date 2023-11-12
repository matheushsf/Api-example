import { prisma } from '../Prisma'

export default class CollaboratorRepository {
    constructor( ){ }

    async GetAllCollaborator(){
        try{
            return  await prisma.collaborator.findMany()
        }catch(error){
            throw new Error("Erro ao realizar operacão")
        }
    }
}