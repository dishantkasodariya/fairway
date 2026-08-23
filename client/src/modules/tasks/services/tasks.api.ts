/**
 * Tasks service.
 * Future REST contract:
 *   GET  /crm/tasks
 *   GET  /companies/:id/tasks
 *   POST /companies/:id/tasks
 *   PUT  /tasks/:id
 *   DELETE /tasks/:id
 *   GET  /crm/followups
 */
import { db, delay, nextId } from "@/modules/core/services/mock/db";
import type { Task, TaskInput } from "@/modules/core/types/crm";

export async function listTasks(): Promise<Task[]> {
  return delay([...db.tasks]);
}

export async function listCompanyTasks(companyId: string): Promise<Task[]> {
  return delay(db.tasks.filter((task) => task.companyId === companyId));
}

export async function createTask(input: TaskInput): Promise<Task> {
  const task: Task = { ...input, id: nextId("task"), createdAt: new Date().toISOString() };
  db.tasks = [task, ...db.tasks];
  return delay(task, 120);
}

export async function updateTask(id: string, patch: Partial<TaskInput>): Promise<Task> {
  const existing = db.tasks.find((task) => task.id === id);
  if (!existing) throw new Error("Task not found");
  const updated = { ...existing, ...patch };
  db.tasks = db.tasks.map((task) => (task.id === id ? updated : task));
  return delay(updated, 120);
}

export async function deleteTask(id: string): Promise<void> {
  db.tasks = db.tasks.filter((task) => task.id !== id);
  return delay(undefined, 120);
}
