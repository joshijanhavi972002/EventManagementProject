import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { generateToken } from '../../middleware/jwt.js';
import ADMIN_CREDENTIALS from "../../model/Admin_Credientials.js";
import jwt from 'jsonwebtoken'; 

dotenv.config();
const secretKey = process.env.ADMIN_SECRET_KEY;


export const profileController = async (request, response) => {
    
    const tokenData = request.params;
   
    const token=tokenData.token;

    if (!token) {
        return response.status(401).json({ message: 'Unauthorized' });
    }

    try {
      
        const decodedToken = jwt.verify(token, secretKey);
     
        const userEmail = decodedToken. theaterOwnerData.email;

        
        const userProfile = await ADMIN_CREDENTIALS.findOne({ email: userEmail });

        if (!userProfile) {
            return response.status(404).json({ message: 'User not found' });
        }

        
        response.status(200).json({ userProfile });
    } catch (error) {
      
        response.status(500).json({ message: 'Internal server error' });
    }
}