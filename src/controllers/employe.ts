import { NextFunction, Request, Response } from "express"
import Employe from "../models/employe";

export const AllEmploye = async (req:Request,res:Response,next:NextFunction): Promise<any> =>{
    try {

        const employe = await Employe.findAll();

        return res.status(200).json({
            success: true,
            data: employe
        })
    } catch (err : any) {
        const [ValidationErrorItem] = err.errors;

        const message = ValidationErrorItem?.message || "Internal server error";

        res.status(500).json({
            success: false,
            message
        });
    }
}

export const CreateEmploye = async (req:Request,res:Response,next:NextFunction): Promise<any> =>{
    try {
        
    } catch (err : any) {
        const [ValidationErrorItem] = err.errors;

        const message = ValidationErrorItem?.message || "Internal server error";

        res.status(500).json({
            success: false,
            message
        });
    }
}

export const UpdateEmploye = async (req:Request,res:Response,next:NextFunction): Promise<any> =>{
    try {
        
    } catch (err : any) {
        const [ValidationErrorItem] = err.errors;

        const message = ValidationErrorItem?.message || "Internal server error";

        res.status(500).json({
            success: false,
            message
        });
    }
}

export const DeleteEmploye = async (req:Request,res:Response,next:NextFunction): Promise<any> =>{
    try {
        const { id } = req.params;

        const employe = await Employe.findByPk(id);


        if (!employe) {
            return res.status(404).json({
                success: true,
                data: 'employe dont existe'
            })
        }

        await employe.destroy();

        
        return res.status(200).json({
            success: true,
            data: 'employe deleted'
        })
    } catch (err : any) {
        const [ValidationErrorItem] = err.errors;

        const message = ValidationErrorItem?.message || "Internal server error";

        res.status(500).json({
            success: false,
            message
        });
    }
}