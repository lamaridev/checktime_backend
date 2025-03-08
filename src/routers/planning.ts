import express from 'express';
import { AllPlanning, CreatePlanning, UpdatePlanning } from '../controllers/planning';
const router = express.Router();


router.get('/',AllPlanning);
router.post('/',CreatePlanning);
router.put('/:id',UpdatePlanning);
router.post('/',CreatePlanning);



export default router;