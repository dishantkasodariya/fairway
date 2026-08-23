/**
 * Activities & notes service.
 * Future REST contract:
 *   GET  /crm/activities
 *   GET  /companies/:id/activities
 *   POST /companies/:id/activities
 *   GET  /companies/:id/notes
 *   POST /companies/:id/notes
 *   PUT  /notes/:id
 *   DELETE /notes/:id
 */
import { db, delay, nextId } from "@/modules/core/services/mock/db";
import type { Activity, AuditLog, Note } from "@/modules/core/types/crm";

export async function listActivities(): Promise<Activity[]> {
  return delay([...db.activities]);
}

export async function listCompanyActivities(companyId: string): Promise<Activity[]> {
  return delay(db.activities.filter((activity) => activity.companyId === companyId));
}

export async function createActivity(input: Omit<Activity, "id">): Promise<Activity> {
  const activity: Activity = { ...input, id: nextId("activity") };
  db.activities = [activity, ...db.activities];
  return delay(activity, 120);
}

export async function listNotes(): Promise<Note[]> {
  return delay([...db.notes]);
}

export async function createNote(input: Omit<Note, "id" | "createdAt" | "updatedAt">): Promise<Note> {
  const now = new Date().toISOString();
  const note: Note = { ...input, id: nextId("note"), createdAt: now, updatedAt: now };
  db.notes = [note, ...db.notes];
  return delay(note, 120);
}

export async function updateNote(id: string, content: string): Promise<Note> {
  const existing = db.notes.find((note) => note.id === id);
  if (!existing) throw new Error("Note not found");
  const updated: Note = { ...existing, content, updatedAt: new Date().toISOString() };
  db.notes = db.notes.map((note) => (note.id === id ? updated : note));
  return delay(updated, 120);
}

export async function deleteNote(id: string): Promise<void> {
  db.notes = db.notes.filter((note) => note.id !== id);
  return delay(undefined, 120);
}

export async function listAuditLogs(): Promise<AuditLog[]> {
  return delay([...db.auditLogs]);
}

export async function createAuditLog(input: Omit<AuditLog, "id">): Promise<AuditLog> {
  const log: AuditLog = { ...input, id: nextId("audit") };
  db.auditLogs = [log, ...db.auditLogs];
  return delay(log, 120);
}
