import { Request, Response } from "express";

export const getTasks = async (_req: Request, res: Response) => {
  return res.json({
    success: true,
    data: [
      {
        id: "tsk_1",
        title: "Follow up with Acme Corp",
        dueDate: new Date(Date.now() + 86400000).toISOString(),
        status: "Pending",
        priority: "High"
      }
    ]
  });
};

export const createTask = async (req: Request, res: Response) => {
  return res.status(201).json({
    success: true,
    data: { id: `tsk_${Date.now()}`, ...req.body }
  });
};
