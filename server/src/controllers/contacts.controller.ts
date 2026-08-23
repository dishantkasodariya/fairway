import { Request, Response } from "express";

export const getContacts = async (_req: Request, res: Response) => {
  return res.json({
    success: true,
    data: [
      {
        id: "cnt_1",
        name: "Jane Doe",
        email: "jane@acme.com",
        phone: "+1 555-0199",
        company: "Acme Corporation",
        role: "VP of Sales"
      }
    ]
  });
};

export const createContact = async (req: Request, res: Response) => {
  return res.status(201).json({
    success: true,
    data: { id: `cnt_${Date.now()}`, ...req.body }
  });
};
