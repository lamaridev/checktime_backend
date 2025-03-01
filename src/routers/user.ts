import express from 'express';
import { CreateAdmin, CreateSimple } from '../controllers/user';
const router = express.Router();


router.post('/admin',CreateAdmin);
router.post('/simple',CreateSimple);


export default router;