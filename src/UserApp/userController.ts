import userService from "./userService";

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
    res.cookie('user', JSON.stringify(user), { httpOnly: true });
    res.status(200).json(user);
  } else {
    res.status(401).json({ error: "Invalid login credentials" });
  }
};


const authRegistration = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await userService.registerUser(username, email, password);
    res.cookie('user', JSON.stringify(newUser), { httpOnly: true });
    res.status(201).json(newUser);
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
