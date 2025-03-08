import { NextFunction, Request, Response } from "express"
import Company from "../models/company";
import Conge from "../models/conge";

export const AllConge = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {

        const conge = await Conge.findAll();

        return res.status(200).json({
            success: true,
            data: conge
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

export const CreateConge = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { datedebut,datefin,status,id_employe } = req.body;

        const conge = await Conge.create({ datedebut,datefin,status,id_employe });

        return res.status(201).json({
            success: true,
            data: 'conge created'
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

export const UpdateConge = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {

        const { id } = req.params;
        const { nom, telephone, nomcontact, numerocontact, adresse } = req.body;

        const conge = await Conge.findByPk(id);


        if (!conge) {
            return res.status(404).json({
                success: true,
                data: 'conge dont existe'
            })
        }

        await Conge.update(
            {
                nom: nom, telephone: telephone, nomcontact: nomcontact, numerocontact: numerocontact, adresse: adresse
            },
            {
                where: { id_conge: id }!
            }
        );

        return res.status(200).json({
            success: true,
            data: 'conge updated'
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

export const DeleteConge = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.params;

        const conge = await Conge.findByPk(id);


        if (!conge) {
            return res.status(404).json({
                success: true,
                data: 'conge dont existe'
            })
        }

        await conge.destroy();

        
        return res.status(200).json({
            success: true,
            data: 'conge deleted'
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