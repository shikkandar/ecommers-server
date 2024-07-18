import jwt from "jsonwebtoken";

const SECERET_KEY = "vhuivudbvkjbkdvnjdvuishucjhsncjvnjsknvcjshucvihusvcn";

export const generateToken = (userId) => {
  const token = jwt.sign({ userId }, SECERET_KEY, { expiresIn: "48h" });
  return token;
};

export const getUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, SECERET_KEY);
  return decodedToken.userId;
};
