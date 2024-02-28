import { hash, compare } from 'bcrypt';
const rounds = parseFloat(process.env.Bcrypt_ROUNDS);

export const hashPassword = async (passwordInput) => {
  return await hash(passwordInput, rounds);
};
export const verifyPassword = async (passwordInput, hashedPassword) => {
  return await compare(passwordInput, hashedPassword);
};
