import multer from 'multer';
import path from 'path';

// Set storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/'); 
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); 
      
    },
  });
 
  
export const Image = multer({ 
  storage: storage }).single('Image');


