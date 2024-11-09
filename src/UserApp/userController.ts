import userService from "./userService";
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;


const createToken = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

const getLoginPage = (req, res) => {
  res.render("login");
};

const getRegistrationPage = (req, res) => {
  res.render("registration");
};

const authLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.authenticateUser(email, password);
  
  if (user) {
    const token = createToken(user);
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ message: "Login successful", user });
  } else {
    res.status(401).json({ error: "Invalid login credentials" });
  }
};

const authRegistration = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await userService.registerUser(username, email, password);
    const token = createToken(newUser);
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({ message: "Registration successful", newUser });
  } catch (error) {
    if (error.message === "User exists") {
      res.status(409).json({ error: "Пользователь уже существует" });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
};

export default {
  getLoginPage,
  getRegistrationPage,
  authLogin,
  authRegistration,
};
