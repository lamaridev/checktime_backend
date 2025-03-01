import express from 'express';
import { AllDepartement, CreateDepartement, DeleteDepartement, UpdateDepartement } from '../controllers/departement';
const router = express.Router();


router.get('/',AllDepartement);
router.post('/',CreateDepartement);
router.put('/:id',UpdateDepartement);
router.delete('/:id',DeleteDepartement);


export default router;