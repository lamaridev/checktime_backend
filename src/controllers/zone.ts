import { Model } from 'sequelize-typescript';
import { NextFunction, Request, Response } from "express"
import Zone from "../models/zone";
import Appareil from '../models/appareil';


export const AllZone = async (req:Request,res:Response,next:NextFunction): Promise<any> =>{
    try {
        const zone = await Zone.findAll({
            include:[{
                model:Appareil
            }]
        });

        return res.status(200).json({
            success: true,
            data: zone
        })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const CreateZone = async (req:Request,res:Response,next:NextFunction) : Promise<any> =>{
    try {
        const {nom} = req.body;

        const zone = await Zone.create({nom:nom});

        return res.status(201).json({
            success: true,
            data: 'zone created'
        })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const UpdateZone = async (req:Request,res:Response,next:NextFunction) : Promise<any> =>{
    try {
        const {nom} = req.body;
        const {id} = req.params;

        const zone = await Zone.findByPk(id);

        if(!zone){
            return res.status(404).json({
                success: true,
                data: 'zone dont existe'
            })
        }

        zone.nom = nom;

        await zone.save();

        return res.status(200).json({
            success: true,
            data: 'zone updated'
        })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const DeleteZone = async (req:Request,res:Response,next:NextFunction) : Promise<any> =>{
    try {

        const {id} = req.params;

        const zone = await Zone.findByPk(id);

        if(!zone){
            return res.status(404).json({
                success: true,
                data: 'zone dont existe'
            })
        }


        await zone.destroy();

        return res.status(200).json({
            success: true,
            data: 'zone deleted'
        })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}