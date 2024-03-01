import {
  regularUserSchema,
  regularUserLoginDetails,
} from '../services/joi.service.js';

// Catching required fields errors when creating a new user
export const validateRegularUserInputs = (req, res, next) => {
  try {
    const validateInput = regularUserSchema.validate(req.body);

    if (validateInput.error) {
      return res.status(400).json({
        success: false,
        errormessage: validateInput.error.details[0].message,
      });
    }

    console.log('User input validated successfully');
    next();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
      success: false,
    });
  }
};
// Catching required fields errors when creating a new user
export const validateRegularUserLoginDetails = (req, res, next) => {
  try {
    const validateInput = regularUserLoginDetails.validate(req.body);

    if (validateInput.error) {
      return res.status(400).json({
        success: false,
        errormessage: validateInput.error.details[0].message,
      });
    }

    console.log('User input validated successfully');
    next();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
      success: false,
    });
  }
};
