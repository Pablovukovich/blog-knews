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
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// routes
app.use('/api/auth', authRoutes);
app.use('/api', articulosRoutes )
app.use('/api/comentarios', comentariosRoutes)
app.use('/api',adminRoutes)

export default app;

