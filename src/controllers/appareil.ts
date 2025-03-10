import { NextFunction, Request, Response } from "express"
import Appareil from "../models/appareil"
import Zone from "../models/zone";

export const AllAppareil = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const appareil = await Appareil.findAll({
            include:[{
                model:Zone
            }]
        });

        return res.status(200).json({
            success: true,
            data: appareil
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

export const CreateAppareil = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {

        const { nom, id_zone, addresseip, numeroserie, modetransfert, fuseauhoraire, battement } = req.body;

        const appareil = await Appareil.create({ nom: nom, id_zone: id_zone, addresseip: addresseip, numeroserie: numeroserie, modetransfert: modetransfert, fuseauhoraire: fuseauhoraire, battement: battement });

        return res.status(201).json({
            success: true,
            data: 'appareil created'
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

export const UpdateAppareil = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.params;

        const { nom, id_zone, addresseip, numeroserie, modetransfert, fuseauhoraire, battement } = req.body;
        const appareil = await Appareil.findByPk(id);


        if (!appareil) {
            return res.status(404).json({
                success: true,
                data: 'appareil dont existe'
            })
        }

        await Appareil.update(
            {
                nom,
                id_zone,
                addresseip,
                numeroserie,
                modetransfert,
                fuseauhoraire,
                battement
            },
            {
                where: { id_appareil: id }!
            }
        );


        return res.status(200).json({
            success: true,
            data: 'appareil updated'
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

export const DeleteAppareil = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {

        const { id } = req.params;

        const appareil = await Appareil.findByPk(id);


        if (!appareil) {
            return res.status(404).json({
                success: true,
                data: 'appareil dont existe'
            })
        }

        await appareil.destroy();

        
        return res.status(200).json({
            success: true,
            data: 'appareil deleted'
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