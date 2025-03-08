import multer from 'multer';
import fs from "fs";
import path from "path";

const uploadDir = path.join(__dirname, "../../public/uploads/");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const fileExtension = path.extname(file.originalname); 
      cb(null, "file-" + uniqueSuffix + fileExtension); 
  },
  })
  
export const upload = multer({ storage: storage })