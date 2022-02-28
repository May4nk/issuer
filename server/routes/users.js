//routes/users
import express from 'express';

//controllers
import { loginUser, signupUser } from '../controllers/users.js';

//router
const router = express.Router();

//routes
router.post('/', loginUser);
router.post('/signup', signupUser);

export default router;
