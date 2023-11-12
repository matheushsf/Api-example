import jwt from 'jsonwebtoken';

export function ValidateTokenUser(authorization: string) {
    return jwt.verify(authorization, process.env.SECRET_JWT!);
};
