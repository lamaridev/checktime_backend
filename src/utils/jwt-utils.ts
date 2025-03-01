import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const jwtSecret : any  = process.env.JWT_SECRET ;

export interface CustomRequest extends Request {
    user?: any;
}
export const GenerateAccessToken = (data: object): string => {
    try {
        return jwt.sign({ data }, jwtSecret, { expiresIn: '3d' });
    } catch (err : any) {
        throw new Error('Error generating access token');
    }
};

export const VerifyAccessToken = async (req: CustomRequest, res: Response, next: NextFunction): Promise<any> => {
    try {
        
        const { authorization } = req.headers;

        if (!authorization || !authorization.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Access token missing or malformed",
            });
        }

        const token = authorization.split(" ")[1];

        const decodedData = jwt.verify(token, jwtSecret);
        req.user = decodedData;

        next();
    } catch (err : any) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired access token",
        });
    }
};


