import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import * as jwtProvider from "../config/jwtProvider.js";

export const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password, role } = userData;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("user already exist with email : ", email);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    console.log("user ", user);

    return user;
  } catch (error) {
    console.log("error - ", error.message);
    throw new Error(error.message);
  }
};

export const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error(`User not found with id: ${userId}`);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error(`User not found with email: ${email}`);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);

    const user = (await findUserById(userId)).populate("addresses");

    if (!user) {
      throw new Error(`User not found with id: ${userId}`);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};
