import { ValidateTokenUser } from "@/shared/ValidateToken";
import { Request, Response, NextFunction } from "express"

export default function JWTMiddleware(){
    return async (req: Request, res: Response, next: NextFunction)=> {
        const token = req.headers.authorization?.replace('Bearer', '').trim();
        console.log(token)
        if (!token) return res.status(404).json({ message: "Permissão negada" });

        try{

          ValidateTokenUser(token);

        }catch(error){
          console.log(error)
          return res.status(400).json({ message: "Faça login novamente"});
        };
        
        next()
    }
}