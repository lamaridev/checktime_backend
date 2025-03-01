import express from 'express';
import { AllZone, CreateZone, DeleteZone, UpdateZone } from '../controllers/zone';
const router = express.Router();


router.get('/',AllZone);
router.post('/',CreateZone);
router.put('/:id',UpdateZone);
router.delete('/:id',DeleteZone);


export default router;

