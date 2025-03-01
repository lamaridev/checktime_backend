import express from 'express';
import { AllCompany, CreateCompany, DeleteCompany, UpdateCompany } from '../controllers/company';
const router = express.Router();


router.get('/',AllCompany);
router.post('/',CreateCompany);
router.put('/:id',UpdateCompany);
router.delete('/:id',DeleteCompany);


export default router;