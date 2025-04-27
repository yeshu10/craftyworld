import dotenv from 'dotenv';
dotenv.config(); // ✅ Must be before any usage of process.env
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });

  if (existing) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });

  res.status(201).json({ token: generateToken(user._id), user });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.password) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  res.json({ token: generateToken(user._id), user });
};

const frontendUrl = process.env.FRONTEND_URL;  

// Google login success (triggered via passport)
export const googleAuthSuccess = (req, res) => {
  const token = generateToken(req.user._id);
  res.redirect(`${frontendUrl}?token=${token}`); // frontend can read this
};
