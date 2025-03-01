import { NextFunction, Request, Response } from "express"
import Company from "../models/company";

export const AllCompany = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const company = await Company.findAll();

        return res.status(200).json({
            success: true,
            data: company
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

export const CreateCompany = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { nom, telephone, nomcontact, numerocontact, adresse } = req.body;

        const company = await Company.create({ nom: nom, telephone: telephone, nomcontact: nomcontact, numerocontact: numerocontact, adresse: adresse });

        return res.status(201).json({
            success: true,
            data: 'company created'
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

export const UpdateCompany = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {

        const { id } = req.params;
        const { nom, telephone, nomcontact, numerocontact, adresse } = req.body;

        const company = await Company.findByPk(id);


        if (!company) {
            return res.status(404).json({
                success: true,
                data: 'company dont existe'
            })
        }

        await Company.update(
            {
                nom: nom, telephone: telephone, nomcontact: nomcontact, numerocontact: numerocontact, adresse: adresse
            },
            {
                where: { id_company: id }!
            }
        );

        return res.status(200).json({
            success: true,
            data: 'company updated'
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

export const DeleteCompany = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.params;

        const company = await Company.findByPk(id);


        if (!company) {
            return res.status(404).json({
                success: true,
                data: 'company dont existe'
            })
        }

        await company.destroy();

        
        return res.status(200).json({
            success: true,
            data: 'company deleted'
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