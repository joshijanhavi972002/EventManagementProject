import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { generateToken } from '../../middleware/jwt.js';
import ADMIN_CREDENTIALS from "../../model/Admin_Credientials.js";

dotenv.config();
const secretKey = process.env.ADMIN_SECRET_KEY;


export const registerController = async (request, response) => {
   
    const { email, password,firstName,lastName } = request.body;
  

    try {
        // Check if the user already exists
        const existingUser = await ADMIN_CREDENTIALS.findOne({ email: email });

        if (existingUser) {
            // User with the provided email already exists
            return response.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object with hashed password
        const newUser = new ADMIN_CREDENTIALS({
            email: email,
            password: hashedPassword,
            firstName:firstName,
            lastName:lastName
        });

        // Save the new user to the database
        await newUser.save();

        // Generate JWT token for the newly registered user
        const token = generateToken(newUser, secretKey);

        // Respond with user data and token
        response.status(201).json({ userData: newUser, jwtToken: token });
    } catch (error) {
       
        response.status(500).json({ message: 'Internal server error' });
    }
}
 
export const getregistrationCount = async (req, res) => {
    
    try {
      // Count only the Event_category records where delete is false
      const categoryCount = await ADMIN_CREDENTIALS.countDocuments();
      res.json( categoryCount );
    } catch (err) {
      console.error('Error counting Event categories:', err);
      res.status(500).json({ error: 'Server error' });
    }
  };