import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import { HashPassword } from "../utils/password-utils";
import Parametre from "../models/parametre";
import { sequelize } from "../../config/db";

export const CreateAdmin = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const transaction = await sequelize.transaction();
    try {

        const { email, password, nomcomplet } = req.body;

        const hashedPassword = await HashPassword(password)

        const user = await User.create({
            email,
            password: hashedPassword,
            role: 'admin',
            nomcomplet,
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
    const transaction = await sequelize.transaction();

    try {
        const { email, password, nomcomplet } = req.body;
        const hashedPassword = await HashPassword(password);

        const user = await User.create(
            {
                email,
                password: hashedPassword,
                role: "simple",
                nomcomplet,
            },
            { transaction }
        );

        const parametre = await Parametre.create(
            {
                id_user: user.id_user,
            },
            { transaction }
        );

        // ✅ Commit la transaction si tout est OK
        await transaction.commit();

        return res.status(201).json({
            success: true,
            data: "simple created",
        });
    } catch (err: any) {
        // ❌ Rollback la transaction en cas d'erreur
        await transaction.rollback();

        const message = err?.errors?.[0]?.message || "Internal server error";

        res.status(500).json({
            success: false,
            message,
        });
    }
};


