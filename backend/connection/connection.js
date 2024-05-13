import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connectionString = process.env.Database_URL;



const database = mongoose.connect(connectionString).then(() => {
    console.log("database connection establish");
}).catch((error) => {
    console.log(" Doesn't connect with database ", error);
});
export default database;


