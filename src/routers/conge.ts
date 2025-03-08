import express from 'express';
import { AllConge, CreateConge, DeleteConge, UpdateConge } from '../controllers/conge';
const router = express.Router();


router.get('/',AllConge);
router.post('/',CreateConge);
router.put('/:id',UpdateConge);
router.delete('/:id',DeleteConge);


export default router;