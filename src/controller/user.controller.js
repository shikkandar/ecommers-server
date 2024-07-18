import * as userService from "../services/user.service.js";

export const getUserProfile = async (req, res) => {
  const jwt = req.headers.authorization?.split(" ")[1];
  console.log(jwt);
  if (!jwt) {
    return res.status(404).send({ error: "Token not found" });
  }

  try {
    const user = await userService.getUserProfileByToken(jwt);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).send({ users });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
