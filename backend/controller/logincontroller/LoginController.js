import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { generateToken, verifyToken } from '../../middleware/jwt.js';
import ADMIN_CREDIENTIALS from "../../model/Admin_Credientials.js";

dotenv.config();
const secretKey = process.env.ADMIN_SECRET_KEY;

export const loginController = async (request, response) => {
 

    const { email, password } = request.body;
   
    try {
        const user = await ADMIN_CREDIENTIALS.findOne({ email: email });

        if (user) {
            const pass = await bcrypt.compare(password, user.password);

            if (pass) {
                const payload = { email: user.email }; 
                let token;
                token = generateToken(user, secretKey);
                response.status(201).json({ userData: user, jwtToken: token });
            } else {
                response.status(203).json({ message: 'Password not matched' });
            }
        } else {
            response.status(202).json({ message: 'Email not matched' });
        }
    } catch (error) {
      
        response.status(500).json({ message: 'Internal server error' });
    }
}
   