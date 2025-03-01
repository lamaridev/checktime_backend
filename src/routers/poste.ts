import express from 'express';
import { AllPoste, CreatePoste, DeletePoste, UpdatePoste } from '../controllers/poste';
const router = express.Router();


router.get('/',AllPoste);
router.post('/',CreatePoste);
router.put('/:id',UpdatePoste);
router.delete('/:id',DeletePoste);

export default router;