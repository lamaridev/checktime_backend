import { NextFunction, Request, Response } from "express"
import Poste from "../models/poste";
import Presence from "../models/presence";

export const AllPresence = async (req:Request,res:Response,next:NextFunction): Promise<any> =>{
    try {
        const presence = await Presence.findAll();

        return res.status(200).json({
            success: true,
            data: presence
        })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}


