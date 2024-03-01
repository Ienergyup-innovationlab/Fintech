import jwt from 'jsonwebtoken';
import 'dotenv/config';

//get secret key and token duration from .env
const secretKey = process.env.JWT_SECRET_KEY;
const duration = process.env.JWT_EXPIRES_IN;

//generate token by signing a user details against a secret key when they sign in
export const generateToken = (payload) => {
  // console.log('check:', payload, secretKey, duration);
  return jwt.sign(payload, secretKey, { expiresIn: duration });
};

// Verifies the authenticity of a user by checking the validity of the user's token against the secret key
export const verifyToken = (payload) => {
  try {
    const decoded = jwt.verify(payload, secretKey);
    return {
      isValid: true,
      payload: decoded,
    };
  } catch (error) {
    return {
      isValid: false,
      errorName: error.name,
      errorMessage: error.message,
    };
  }
};
