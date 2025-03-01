import { NextFunction, Request, Response } from "express"
import Departement from "../models/departement";

export const AllDepartement = async (req:Request,res:Response,next:NextFunction) : Promise<any> =>{
    try {

        const departement = await Departement.findAll();

        return res.status(200).json({
            success: true,
            data: departement
        })

    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const CreateDepartement = async (req:Request,res:Response,next:NextFunction) : Promise<any> =>{
    try {
        const {nom} = req.body;

        const departement = await Departement.create({nom:nom});

        return res.status(201).json({
            success: true,
            data: 'departement created'
        })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const UpdateDepartement = async (req:Request,res:Response,next:NextFunction) : Promise<any> =>{
    try {
        const {nom} = req.body;
        const {id} = req.params;

        const departement = await Departement.findByPk(id);

        if(!departement){
            return res.status(404).json({
                success: true,
                data: 'departement dont existe'
            })
        }

        departement.nom = nom;

        await departement.save();

        return res.status(200).json({
            success: true,
            data: 'departement updated'
        })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const DeleteDepartement = async (req:Request,res:Response,next:NextFunction) : Promise<any> =>{
    try {

        const {id} = req.params;

        const departement = await Departement.findByPk(id);

        if(!departement){
            return res.status(404).json({
                success: true,
                data: 'departement dont existe'
            })
        }


        await departement.destroy();

        return res.status(200).json({
            success: true,
            data: 'departement deleted'
        })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}