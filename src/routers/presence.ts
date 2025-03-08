import { upload } from './../middlewares/upload';
import express from 'express';
import { AllPresence, CreatePresence } from '../controllers/presence';
const router = express.Router();

router.get("/",AllPresence)
router.post("/",upload.single('uploaded_file'),CreatePresence)



export default router;