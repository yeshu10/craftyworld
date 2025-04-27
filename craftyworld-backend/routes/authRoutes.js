import express from 'express';
import passport from 'passport';
import {
  registerUser,
  loginUser,
  googleAuthSuccess,
} from '../controllers/authController.js';

const router = express.Router();

// Normal auth
router.post('/register', registerUser);
router.post('/login', loginUser);

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/login',
  session: false,
}), googleAuthSuccess);

export default router;
