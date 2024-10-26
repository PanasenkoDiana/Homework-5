import userRepository from "./userRepository";
import bcrypt from "bcrypt";

const userService = {
  authenticateUser: async (email, password) => {
    const user = await userRepository.findUserByEmail(email);
    
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  },


  registerUser: async (username, email, password) => {
    const existingUser = await userRepository.findUserByEmail(email);
    
    if (existingUser) {
      return "User exists";
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userRepository.createUser({
      username,
      email,
      password: hashedPassword,
      role: "user",
    });
    return newUser;
  },
};

export default userService;
