import { Router } from 'express';
import {
  validateRegularUserInputs,
  validateRegularUserLoginDetails,
} from '../middlewares/validate.js';
import { signup, login } from '../controllers/auth.signin.js';

const router = Router();

router.post('/signup', validateRegularUserInputs, signup);
router.post('/login', validateRegularUserLoginDetails, login);

export default router;
