/**
 * Companies service.
 * Future REST contract:
 *   GET    /companies
 *   GET    /companies/:id
 *   POST   /companies
 *   PUT    /companies/:id
 *   DELETE /companies/:id
 *   PUT    /companies/:id/stage
 *   PUT    /companies/:id/owner
 */
import { db, delay, nextId } from "@/modules/core/services/mock/db";
import type { Company, CompanyInput } from "@/modules/core/types/crm";

export async function listCompanies(): Promise<Company[]> {
  return delay([...db.companies]);
}

export async function getCompany(id: string): Promise<Company | undefined> {
  return delay(db.companies.find((company) => company.id === id));
}

export async function createCompany(input: CompanyInput): Promise<Company> {
  const now = new Date().toISOString();
  const company: Company = {
    ...input,
    id: nextId("company"),
    lastActivityAt: now,
    createdAt: now,
    updatedAt: now,
  };
  db.companies = [company, ...db.companies];
  return delay(company, 120);
}

export async function updateCompany(id: string, patch: Partial<CompanyInput>): Promise<Company> {
  const existing = db.companies.find((company) => company.id === id);
  if (!existing) throw new Error("Company not found");
  const updated: Company = { ...existing, ...patch, updatedAt: new Date().toISOString() };
  db.companies = db.companies.map((company) => (company.id === id ? updated : company));
  return delay(updated, 120);
}

export async function deleteCompany(id: string): Promise<void> {
  db.companies = db.companies.filter((company) => company.id !== id);
  return delay(undefined, 120);
}

export async function updateCompanyStage(id: string, stageId: string): Promise<Company> {
  return updateCompany(id, { stageId });
}

export async function updateCompanyOwner(id: string, ownerId: string): Promise<Company> {
  return updateCompany(id, { ownerId });
}
