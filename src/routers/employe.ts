import express from 'express';
import { AllEmploye } from '../controllers/employe';
const router = express.Router();


router.get('/',AllEmploye);


export default router;