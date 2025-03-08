import { NextFunction, Request, Response } from "express";
import Absence from "../models/absence";



export const AllAbsence = async (req:Request,res:Response,next:NextFunction): Promise<any> =>{
    try {
        const absence = await Absence.findAll();

        return res.status(200).json({
            success: true,
            data: absence
        })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}



