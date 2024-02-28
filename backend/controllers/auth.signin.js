import { userService } from '../services/user.service.js';
import { hashPassword, verifyPassword } from '../services/bcrypt.service.js';
import { generateToken } from '../services/jwt.service.js';

// User Signup
export const signup = async (req, res) => {
  try {
    const {
      fullname,
      email,
      phone_number,
      residential_address,
      business_type,
      investment_amount_range,
      net_worth,
      investment_experience,
      source_of_funds,
      password,
    } = req.body;

    // checks for existing user
    const existingUser = await userService.findWithDetails({
      $or: [{ email: email }],
    });

    // Gives forbidden message if user exists
    if (existingUser && existingUser.email === email) {
      // Gives forbidden message
      return res.status(403).json({
        message: `Oops, it seems like this email is taken. Try a different email or sign in if you're the one registered with this email`,
        success: false,
      });
    }

    // Hashes the user password for extra protection
    const safePassword = await hashPassword(password);

    // Creates a new user
    let newUser = await userService.create({
      fullname,
      email,
      phone_number,
      residential_address,
      business_type,
      investment_amount_range,
      net_worth,
      investment_experience,
      source_of_funds,
      password: safePassword,
    });

    // Stores the returned user's unique id and role in an object to generate a token for the user
    const token = generateToken({ id: newUser._id });

    // Saves the user
    await newUser.save();

    // This saves the token as a cookie for the duration of its validity just to simulate how the request header works for the purpose of testing.
    res.cookie('token', token, { httpOnly: true });

    // Sends success message on the console
    console.log(`Token successfully generated for ${newUser}`);

    newUser = await userService.find({
      $and: [
        { _id: newUser._id },
        { fullname: newUser.fullname },
        { email: newUser.email },
      ],
    });

    // Sends the token to the client side for it to be set as the request header using axios
    return res.json({
      message: `User successfully signed up!`,
      success: true,
      token: token,
      user: newUser,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
      success: false,
      authSign: 'THe problem is from Authsign',
    });
  }
};

// User Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let foundUser;

    // checks for existing user
    foundUser = await userService.findWithDetails({
      $or: [{ email: email }],
    });

    // Responds with forbidden message if user does not exist
    if (!foundUser || foundUser === null) {
      return res.status(404).json({
        message: `User does not exit. Trying creating an account`,
        success: false,
      });
    }

    const isValid = await verifyPassword(password, foundUser.password);
    console.log(isValid);

    // Gives forbidden message if password is wrong
    if (!isValid) {
      // Gives forbidden message
      return res.status(401).json({
        message: `Incorrect Username or Password`,
        success: false,
      });
    }

    // Stores the returned user's unique id and role in an object to generate a token for the user
    const token = generateToken({ id: foundUser._id });

    // This saves the token as a cookie for the duration of its validity just to simulate how the request header works for the purpose of testing.
    res.cookie('token', token, { httpOnly: true });

    foundUser = await userService.find({
      $and: [{ _id: foundUser._id }, { email: foundUser.email }],
    });

    // Sends success message on the console
    console.log(`Token successfully generated for ${foundUser}`);

    // Sends the token to the client side for it to be set as the request header using axios
    return res.status(200).json({
      message: `User successfully Loged in!`,
      success: true,
      token: token,
      user: foundUser,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
      success: false,
      authSign: 'THe problem is from AuthLogin',
    });
  }
};
