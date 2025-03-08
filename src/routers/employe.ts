import express from 'express';
import { AllEmploye, CreateEmploye, DeleteEmploye, UpdateEmploye } from '../controllers/employe';
const router = express.Router();


router.get('/',AllEmploye);
router.post('/',CreateEmploye);
router.put('/:id',UpdateEmploye);
router.delete('/:id',DeleteEmploye);


export default router;