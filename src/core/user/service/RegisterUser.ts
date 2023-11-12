import UserRepository from "@/external/repository/user/UserRepository";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt'
import Errors from "@/shared/Errors";
import { User } from "@prisma/client";

export class RegisterUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async registerUser(userName: string, password: string) {

        const userExist = await this.userRepository.findUserByUsername(userName)
        if (userExist) throw new Error(Errors.USUARIO_EXIST)

        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, salt)

        const user: User = {
            Id: uuidv4(),
            UserName: userName,
            Password: hashPassword,
            CreatedAt: new Date(),
            UpdateAt: new Date(),
            DeletedAt: new Date()
        }

        const userCreate = await this.userRepository.CreateUser(user)
        console.log(userCreate)
        return userCreate;
    }
}