import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password required" });
  }

  // Placeholder auth response
  return res.json({
    success: true,
    message: "Login successful",
    token: "mock-jwt-token",
    user: {
      id: "usr_1",
      email,
      name: "Demo User",
      role: "admin"
    }
  });
};

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password required" });
  }

  return res.status(201).json({
    success: true,
    message: "Registration successful",
    token: "mock-jwt-token",
    user: {
      id: "usr_2",
      email,
      name: name || "New User",
      role: "user"
    }
  });
};

export const getCurrentUser = async (req: Request, res: Response) => {
  return res.json({
    success: true,
    user: {
      id: "usr_1",
      email: "demo@fairway.com",
      name: "Demo User",
      role: "admin"
    }
  });
};
