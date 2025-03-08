import { NextFunction, Request, Response } from "express"
import Employe from "../models/employe";
import Planning from "../models/planning";
import { sequelize } from "../../config/db";
import Jourtravailstandard from "../models/jourtravailstandard";
import Jourtravailrotation from "../models/jourtravailrotation";
import { Op } from "sequelize";

export const AllPlanning = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {

        const planning = await Planning.findAll();

        return res.status(200).json({
            success: true,
            data: planning
        })
    } catch (err: any) {
        const [ValidationErrorItem] = err.errors;

        const message = ValidationErrorItem?.message || "Internal server error";

        res.status(500).json({
            success: false,
            message
        });
    }
}

export const CreatePlanning = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const transaction = await sequelize.transaction();
    try {
     
        const { nom, type, jours , heuretravail, heurerepos, heurereprise } = req.body;

        const planning = await Planning.create({ nom, type }, { transaction });

        let query;

        if (type === 'standard') {
            query = await Jourtravailstandard.bulkCreate(
                jours.map((jour: any) => ({
                    id_jourtravailstandard:jour.nombrejour,
                    heuredebut: jour.heuredebut,
                    heurefin: jour.heurefin,
                    isnext: jour.isnext,
                    id_planning: planning.id_planning
                })),
                { transaction }
            );
        } else {
            query = await Jourtravailrotation.create({
                heuretravail, heurerepos, heurereprise, id_planning: planning.id_planning
            }, { transaction });
        }

        await transaction.commit();

        return res.status(201).json({
            success: true,
            data: "Planning created successfully"
        });

    } catch (err: any) {

        await transaction.rollback();

        const [ValidationErrorItem] = err.errors;

        const message = ValidationErrorItem?.message || "Internal server error";

        res.status(500).json({
            success: false,
            message
        });
    }
}

export const UpdatePlanning = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    const transaction = await sequelize.transaction();
    try {

        const { id } = req.params;
        const { nom, jours, heuretravail, heurerepos, heurereprise } = req.body;

        const planning = await Planning.findByPk(id);
        if (!planning) {
            return res.status(404).json({ success: false, message: "Planning not found" });
        }

        await planning.update({ nom }, { transaction });

        let query;

        if (planning.type === 'standard') {

            const idJoursEnvoyes = jours.map((jour: any) => jour.nombrejour);

            for (const jour of jours) {
                const { nombrejour, heuredebut, heurefin, isnext } = jour;
    
                const existingJour = await Jourtravailstandard.findOne({
                    where: { id_jourtravailstandard:nombrejour, id_planning:id },
                    transaction,
                });
    
                if (existingJour) {
                    await Jourtravailstandard.update(
                        { heuredebut, heurefin, isnext },
                        { where: { id_jourtravailstandard:nombrejour, id_planning:id}, transaction }
                    );
                } else {
                    // Insérer un nouveau jour s'il n'existe pas
                    await Jourtravailstandard.create(
                        { id_jourtravailstandard:nombrejour, heuredebut, heurefin, isnext, id_planning:id },
                        { transaction }
                    );
                }
            }

            await Jourtravailstandard.destroy({
                where: {
                    id_planning: id,
                    id_jourtravailstandard: { [Op.notIn]: idJoursEnvoyes },
                },
                transaction,
            });
    

        } else {
            query = await Jourtravailrotation.update(
                { heuretravail, heurerepos, heurereprise },
                { where: { id_planning: id }, transaction }
            );
        }

        await transaction.commit();

        return res.status(200).json({
            success: true,
            message: "Planning updated successfully"
        });


    } catch (err: any) {
        await transaction.rollback();

        const [ValidationErrorItem] = err.errors;

        const message = ValidationErrorItem?.message || "Internal server error";

        res.status(500).json({
            success: false,
            message
        });
    }
}

export const DeletePlanning = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    const transaction =  await sequelize.transaction();

    try {

        const { id } = req.params;

        const planning = await Planning.findByPk(id);
        if (!planning) {
            return res.status(404).json({ success: false, message: "Planning not found" });
        }

        const employeCount = await Employe.count({ where: { id_planning: id } });
        if (employeCount > 0) {
            return res.status(400).json({ success: false, message: "Cannot delete planning with assigned employees" });
        }

        await planning.destroy({ transaction });

        await transaction.commit();

        return res.status(200).json({
            success: true,
            message: "Planning deleted successfully"
        });

    } catch (err: any) {

        await transaction.rollback();


        const [ValidationErrorItem] = err.errors;

        const message = ValidationErrorItem?.message || "Internal server error";

        res.status(500).json({
            success: false,
            message
        });
    }
}