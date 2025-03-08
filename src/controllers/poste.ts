import { NextFunction, Request, Response } from "express"
import Poste from "../models/poste";
import { sequelize } from "../../config/db";
import { ConnectToCheckTime, InsertPoste } from "../middlewares/connectToChecktime";

export const AllPoste = async (req:Request,res:Response,next:NextFunction): Promise<any> =>{
    try {
        const poste = await Poste.findAll();

        return res.status(200).json({
            success: true,
            data: poste
        })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const CreatePoste = async (req:Request,res:Response,next:NextFunction) : Promise<any> =>{
    const transaction = await sequelize.transaction();
    try {
        const {nom} = req.body;

        const poste = await Poste.create({nom:nom},{transaction});

        InsertPoste({nom,id_poste:poste.id_poste});


        // console.log(response)

        // return res.status(201).json({
        //     success: true,
        //     data: 'poste created'
        // })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const UpdatePoste = async (req:Request,res:Response,next:NextFunction) : Promise<any> =>{
    try {
        const {nom} = req.body;
        const {id} = req.params;

        const poste = await Poste.findByPk(id);

        if(!poste){
            return res.status(404).json({
                success: true,
                data: 'poste dont existe'
            })
        }

        poste.nom = nom;

        await poste.save();

        return res.status(200).json({
            success: true,
            data: 'poste updated'
        })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const DeletePoste = async (req:Request,res:Response,next:NextFunction) : Promise<any> =>{
    try {

        const {id} = req.params;

        const poste = await Poste.findByPk(id);

        if(!poste){
            return res.status(404).json({
                success: true,
                data: 'poste dont existe'
            })
        }


        await poste.destroy();

        return res.status(200).json({
            success: true,
            data: 'poste deleted'
        })
    } catch (err : any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}