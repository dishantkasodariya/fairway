/**
 * Facilities service.
 * Future REST contract:
 *   GET  /companies/:id/facilities
 *   POST /companies/:id/facilities
 *   PUT  /facilities/:id
 *   DELETE /facilities/:id
 */
import { db, delay, nextId } from "@/modules/core/services/mock/db";
import type { Facility, FacilityInput } from "@/modules/core/types/crm";

export async function listFacilities(): Promise<Facility[]> {
  return delay([...db.facilities]);
}

export async function listCompanyFacilities(companyId: string): Promise<Facility[]> {
  return delay(db.facilities.filter((facility) => facility.companyId === companyId));
}

export async function createFacility(input: FacilityInput): Promise<Facility> {
  const facility: Facility = {
    ...input,
    id: nextId("facility"),
    createdAt: new Date().toISOString(),
  };
  db.facilities = [facility, ...db.facilities];
  return delay(facility, 120);
}

export async function updateFacility(id: string, patch: Partial<FacilityInput>): Promise<Facility> {
  const existing = db.facilities.find((facility) => facility.id === id);
  if (!existing) throw new Error("Facility not found");
  const updated = { ...existing, ...patch };
  db.facilities = db.facilities.map((facility) => (facility.id === id ? updated : facility));
  return delay(updated, 120);
}

export async function deleteFacility(id: string): Promise<void> {
  db.facilities = db.facilities.filter((facility) => facility.id !== id);
  return delay(undefined, 120);
}
