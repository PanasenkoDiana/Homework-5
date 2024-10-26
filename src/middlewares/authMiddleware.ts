import { NextFunction, Request, Response } from "express";

const authMiddleware = (req, res, next) => {
  const userCookie = req.cookies.user;

  if (userCookie) {
    const user = JSON.parse(userCookie);

    if (user.email && user.name && user.role) {
      return next();
    }
  }

  res.status(401).json({ error: "Unauthorized" });
};

export default authMiddleware;
