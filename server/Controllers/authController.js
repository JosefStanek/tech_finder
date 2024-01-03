import { User } from "../Schemas/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.SECRET_KEY;
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, secretKey, {
    expiresIn: maxAge,
  });
};

export const registerController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    return res
      .status(201)
      .cookie("jwt", token, {
        withCrdentials: true,
        httpOnly: false,
        maxAge: maxAge * 1000,
      })
      .json({
        user: user._id,
        created: true,
      });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
      created: false,
    });
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.login(email, password);
    const token = createToken(user._id);
    return res
      .status(201)
      .cookie("jwt", token, {
        withCrdentials: true,
        httpOnly: false,
        maxAge: maxAge * 1000,
      })
      .json({
        user: user._id,
        useremail: user.email,
        created: true,
      });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
      created: false,
    });
  }
};

export const getmeController = async (req, res, next) => {
  try {
    const { token } = req.body;
    const { id } = jwt.verify(token, secretKey);
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        status: "fail",
        message: "User nenalezen",
      });
    }
    return res.status(200).json({
      status: "success",
      useremail: user.email,
      id: user._id,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
      created: false,
    });
  }
};
