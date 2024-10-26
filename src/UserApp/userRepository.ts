import db from './prisma/schema/db';

const userRepository = {
  findUserByEmail: async (email) => {
    const user = await db.user.findUnique({
      where: { email },
    });
    return user || "Not Found";
  },

  createUser: async (userData) => {
    return db.user.create({
      data: userData,
    });
  },
};

export default userRepository;
