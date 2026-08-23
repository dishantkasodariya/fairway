import { Request, Response } from "express";

export const getActivities = async (_req: Request, res: Response) => {
  return res.json({
    success: true,
    data: [
      {
        id: "act_1",
        type: "call",
        description: "Introductory call with Jane Doe",
        date: new Date().toISOString(),
        user: "Demo User"
      }
    ]
  });
};

export const createActivity = async (req: Request, res: Response) => {
  return res.status(201).json({
    success: true,
    data: { id: `act_${Date.now()}`, ...req.body }
  });
};
