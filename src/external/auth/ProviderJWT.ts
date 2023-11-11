import jwt from 'jsonwebtoken'

export class ProviderJWT {
    constructor(private secretJWT: string) { }

    async GenerateToken(dados: object) {
        return jwt.sign(dados, this.secretJWT, {
            expiresIn: "1d",
        })
    }
}