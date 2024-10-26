import { NextFunction, Request, Response } from "express";

const userRoleMiddleware = (req, res, next) => {
  const userCookie = req.cookies.user;

  if (userCookie) {
    const user = JSON.parse(userCookie);

    if (user.role === "admin") {
      return next();
    }
  }

  res.status(403).json({ error: "Forbidden" });
};

export default userRoleMiddleware;
