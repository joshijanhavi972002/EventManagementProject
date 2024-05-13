import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
 
import database from './connection/connection.js';
import EventCategoryRoute from './routes/EventCategory/EventCategoryRoute.js';
import CreateEventRoute from './routes/CreateEvent/CreateEventRoute.js';
import AddEventMemberRoute from './routes/AddEventMember/AddEventMember.js';
import EventWishRoute from './routes/EventWishList/EventWishRoute.js';
import UserMarkRoute from './routes/UserMark/UserMarkRoute.js';
import AdminRoute from './routes/Admin/AdminRoute.js';

import cookieParser from 'cookie-parser';



const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cookieParser());


app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/EventCategoryapi', EventCategoryRoute); 
app.use('/CreateEventapi', CreateEventRoute);
app.use('/AddEventMemberapi',AddEventMemberRoute);
app.use('/EventWishUserapi',EventWishRoute);
app.use('/UserMarkapi',UserMarkRoute);
app.use('/Adminapi', AdminRoute);

app.listen(3001, () => {
    console.log(`Server Connection establish`);
});
