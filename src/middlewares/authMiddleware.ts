import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

const SECRET_KEY = process.env.SECRET_KEY;

interface AuthenticatedRequest extends Request {
  user?: any;
}

const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const user = jwt.verify(token, SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
};

export default authMiddleware;
