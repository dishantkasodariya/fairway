import { Request, Response } from "express";

export const getDashboardStats = async (_req: Request, res: Response) => {
  return res.json({
    success: true,
    data: {
      totalRevenue: 125000,
      activeCompanies: 24,
      totalContacts: 156,
      openDeals: 18,
      recentActivities: [
        { id: "act_1", description: "New contact added: Jane Doe", time: "10 mins ago" }
      ]
    }
  });
};
