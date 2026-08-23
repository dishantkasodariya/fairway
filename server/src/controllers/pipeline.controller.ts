import { Request, Response } from "express";

export const getPipeline = async (_req: Request, res: Response) => {
  return res.json({
    success: true,
    data: {
      stages: [
        { id: "lead", name: "Lead", deals: [{ id: "deal_1", title: "Acme Cloud Migration", value: 50000 }] },
        { id: "qualified", name: "Qualified", deals: [] },
        { id: "proposal", name: "Proposal Sent", deals: [] },
        { id: "negotiation", name: "Negotiation", deals: [] },
        { id: "closed_won", name: "Closed Won", deals: [] }
      ]
    }
  });
};
