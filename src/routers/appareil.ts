import express from 'express';
import { AllAppareil, CreateAppareil, DeleteAppareil, UpdateAppareil } from '../controllers/appareil';
const router = express.Router();


router.get('/',AllAppareil);
router.post('/',CreateAppareil);
router.put('/:id',UpdateAppareil);
router.delete('/:id',DeleteAppareil);




export default router;