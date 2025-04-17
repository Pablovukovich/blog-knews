import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//routes
import authRoutes from './routes/auth.routes.js';
import articulosRoutes from './routes/noticias.routes.js'
import comentariosRoutes from './routes/comentarios.routes.js'
import adminRoutes from './routes/superAdmin.routes.js'

const app = express();

// middleware
dotenv.config()
app.use(morgan('dev'))
app.use(cors({
    origin: "http://localhost:3000", // o el dominio de tu frontend
  credentials: true,               // necesario para permitir cookies y auth
}))
app.use(express.json())
app.use(cookieParser())

// routes
app.use('/api/auth', authRoutes);
app.use('/api', articulosRoutes )
app.use('/api/comentarios', comentariosRoutes)
app.use('/api/admin',adminRoutes)

export default app;

