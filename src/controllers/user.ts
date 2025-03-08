import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import { HashPassword } from "../utils/password-utils";
import Parametre from "../models/parametre";
import { sequelize } from "../../config/db";

export const CreateAdmin = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const transaction = await sequelize.transaction();
    try {

        const parametre = await Parametre.create({transaction});

        const { email, password, nomcomplet } = req.body;

        const hashedPassword = await HashPassword(password)

        const user = await User.create({
            email,
            password: hashedPassword,
            role: 'admin',
            nomcomplet,
            id_parametre:parametre.id_parametre
        },{transaction});



       

        await transaction.commit();

        return res.status(201).json({
            success: true,
            data: 'admin created'
        })


    } catch (err: any) {

        await transaction.commit();

        const [ValidationErrorItem] = err.errors;

        const message = ValidationErrorItem?.message || "Internal server error";

        res.status(500).json({
            success: false,
            message
        });


    }
}

export const CreateSimple = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {

        const { email, password, nomcomplet } = req.body;

        const hashedPassword = await HashPassword(password)

        const user = await User.create({
            email,
            password: hashedPassword,
            role: 'simple',
            nomcomplet
        });

        return res.status(201).json({
            success: true,
            data: 'simple created'
        })


    } catch (err: any) {
        const [ValidationErrorItem] = err.errors;

        const message = ValidationErrorItem?.message || "Internal server error";

        res.status(500).json({
            success: false,
            message
        });


    }
}

