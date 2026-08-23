import { Request, Response } from "express";

export const getCompanies = async (_req: Request, res: Response) => {
  return res.json({
    success: true,
    data: [
      {
        id: "comp_1",
        name: "Acme Corporation",
        industry: "Technology",
        employees: "50-100",
        location: "San Francisco, CA",
        status: "Active"
      },
      {
        id: "comp_2",
        name: "Global Logistics Ltd",
        industry: "Supply Chain",
        employees: "200-500",
        location: "Chicago, IL",
        status: "Prospect"
      }
    ]
  });
};

export const getCompanyById = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json({
    success: true,
    data: {
      id,
      name: "Acme Corporation",
      industry: "Technology",
      employees: "50-100",
      location: "San Francisco, CA",
      status: "Active"
    }
  });
};

export const createCompany = async (req: Request, res: Response) => {
  const newCompany = { id: `comp_${Date.now()}`, ...req.body };
  return res.status(201).json({
    success: true,
    data: newCompany
  });
};

export const updateCompany = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json({
    success: true,
    data: { id, ...req.body }
  });
};

export const deleteCompany = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json({
    success: true,
    message: `Company ${id} deleted successfully`
  });
};
