import UserRepository from "@/external/repository/user/UserRepository";
import bcrypt from 'bcrypt'
import Errors from "@/shared/Errors";
import { ProviderJWT } from "@/external/auth/ProviderJWT";


export class LoginUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async LoginUser(userName: string, password: string) {
        const userExist = await this.userRepository.findUserByUsername(userName)

        if (!userExist) throw new Error(Errors.USUARIO_NOT_EXIST)

        const isMatch = await bcrypt.compare(password, userExist.Password)

        if(!isMatch) throw new Error(Errors.ERROR_CREDENTIAL)

        const providerJWT = new ProviderJWT(process.env.SECRET_JWT!)
        const tokenJWT = providerJWT.GenerateToken({idUser: userExist.Id})

        return tokenJWT;
    }
}