import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser'
dotenv.config()
import connectDB from './config/db.js';
import cors from 'cors';
import { notFound,errorHandler } from './middleware/ErrorMiddleware.js';
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'
const app = express();
  

app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
connectDB()
app.use('/api/users',userRoutes)

app.get("/", (req, res) => res.send("Server is Ready"));

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log('listening on port', port);
}) 

