import Errors from "@/shared/Errors";
import { Task } from "@prisma/client";


export class TaskService {
    constructor() { }

    async CreateTask(task: Task) {
        const userExist = await this.userRepository.findUserByUsername(userName)

        if (!userExist) throw new Error(Errors.USUARIO_NOT_EXIST)

        const isMatch = await bcrypt.compare(password, userExist.Password)

        if(!isMatch) throw new Error(Errors.ERROR_CREDENTIAL)

        const providerJWT = new ProviderJWT(process.env.SECRET_JWT!)
        const tokenJWT = providerJWT.GenerateToken({idUser: userExist.Id})

        return tokenJWT;
    }
}