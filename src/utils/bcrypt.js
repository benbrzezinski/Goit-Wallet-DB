import bcrypt from "bcryptjs";
const saltRounds = 10;
const plainTextPassword = input => input;

export const passwordHashBcrypt = async pass =>
  await bcrypt.hash(plainTextPassword(pass), saltRounds).then(hash => hash);

export const passwordCompareBcrypt = async (inputPass, dbPass) => {
  const match = await bcrypt.compare(inputPass, dbPass);
  return match;
};
