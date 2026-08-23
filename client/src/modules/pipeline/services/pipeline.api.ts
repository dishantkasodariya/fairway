/**
 * Pipeline & configuration service.
 * Future REST contract:
 *   GET  /crm/pipeline
 *   GET  /crm/stages
 *   POST /crm/stages
 *   PUT  /crm/stages/:id
 *   DELETE /crm/stages/:id
 */
import { db, delay, nextId } from "@/modules/core/services/mock/db";
import type { CrmSettings, CrmStage } from "@/modules/core/types/crm";

export async function listStages(): Promise<CrmStage[]> {
  return delay([...db.stages].sort((a, b) => a.order - b.order));
}

export async function createStage(input: Omit<CrmStage, "id">): Promise<CrmStage> {
  const stage: CrmStage = { ...input, id: nextId("stage") };
  db.stages = [...db.stages, stage];
  return delay(stage, 120);
}

export async function updateStage(id: string, patch: Partial<CrmStage>): Promise<CrmStage> {
  const existing = db.stages.find((stage) => stage.id === id);
  if (!existing) throw new Error("Stage not found");
  const updated = { ...existing, ...patch };
  db.stages = db.stages.map((stage) => (stage.id === id ? updated : stage));
  return delay(updated, 120);
}

export async function deleteStage(id: string): Promise<void> {
  db.stages = db.stages.filter((stage) => stage.id !== id);
  return delay(undefined, 120);
}

export async function getSettings(): Promise<CrmSettings> {
  return delay({ ...db.settings });
}

export async function updateSettings(patch: Partial<CrmSettings>): Promise<CrmSettings> {
  db.settings = { ...db.settings, ...patch };
  return delay({ ...db.settings }, 100);
}
