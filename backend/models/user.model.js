import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// User Schema
const userSchema = new Schema({
  fullname: {
    type: String,
    lowercase: true,
    required: true,
    minlength: 3,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone_number: {
    type: String,
    unique: false,
    trim: true,
    lowercase: true,
  },
  residential_address: {
    type: String,
    unique: false,
    trim: true,
    lowercase: true,
  },
  business_type: {
    type: String,
    unique: false,
    trim: true,
    lowercase: true,
  },
  investment_amount_range: {
    type: String,
    unique: false,
    trim: true,
    lowercase: true,
  },
  net_worth: {
    type: String,
    unique: false,
    required: true,
    trim: true,
    lowercase: true,
  },

  investment_experience: {
    type: String,
    trim: true,

    lowercase: true,
  },
  source_of_funds: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
  },
});

const User = model('RegularUser', userSchema);
export default User;
