import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface User {
      role: "user" | "admin";
    }
    interface Request {
      user?: User;
    }
  }
}

// Only allow a specific role
export function requireRole(role: "user" | "admin") {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user || req.user.role !== role) {
      res.status(403).json({ message: `Access denied. ${role} only.` });
      return;
    }
    next();
  };
}

// Allow any of multiple roles
export function requireAnyRole(...roles: ("user" | "admin")[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403).json({ message: `Access denied. Allowed roles: ${roles.join(", ")}` });
      return;
    }
    next();
  };
}