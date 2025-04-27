import dotenv from 'dotenv';
dotenv.config(); // ✅ Must be before any usage of process.env

import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';

import connectDB from './config/db.js';
import './config/passport.js'; // this uses GOOGLE_CLIENT_ID, so it must come AFTER dotenv.config()

import authRoutes from './routes/authRoutes.js';

connectDB();

const frontendUrl = process.env.FRONTEND_URL;  // This will get the correct frontend URL from the .env file

const app = express();
app.use(cors({ origin: frontendUrl, credentials: true }));
app.use(express.json());

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
