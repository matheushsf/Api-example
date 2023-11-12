import CollaboratorRepository from "@/external/repository/colaborator/ColaboratorRepository";

export class CollaboratorUseCase {
    constructor(private taskRepository: CollaboratorRepository) { }

    async GetAllCollaborator() {
        return await this.taskRepository.GetAllCollaborator()
    }
}


