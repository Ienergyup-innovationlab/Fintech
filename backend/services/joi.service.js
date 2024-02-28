import Joi from 'joi';

/*
Joi service is used to verify the user inputs against pre-set conditions
mainly to match user model
*/

// Check the user schema fields against pre-set conditions
export const regularUserSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().required().lowercase(),
  phone_number: Joi.string().required().lowercase(),
  residential_address: Joi.string().required(),
  business_type: Joi.string().required(),
  investment_amount_range: Joi.string().required(),
  net_worth: Joi.string().required(),
  investment_experience: Joi.string().required(),
  source_of_funds: Joi.string().required(),
  password: Joi.string().min(8).max(30).required(),
});

// Check the user schema fields against pre-set conditions
export const regularUserLoginDetails = Joi.object({
  email: Joi.string().email().required().lowercase(),
  password: Joi.string().min(8).max(30).required(),
});
