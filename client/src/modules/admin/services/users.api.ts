/**
 * Users service.
 * Future REST contract:
 *   GET  /users
 *   POST /users
 *   PUT  /users/:id
 *   PUT  /users/:id/status
 *   POST /users/:id/reset-password
 */
import { db, delay, nextId } from "@/modules/core/services/mock/db";
import type { Notification, User, UserInput } from "@/modules/core/types/crm";

export async function listUsers(): Promise<User[]> {
  return delay([...db.users]);
}

export async function createUser(input: UserInput): Promise<User> {
  const now = new Date().toISOString();
  const user: User = { ...input, id: nextId("user"), lastActiveAt: now, createdAt: now };
  db.users = [user, ...db.users];
  return delay(user, 120);
}

export async function updateUser(id: string, patch: Partial<UserInput>): Promise<User> {
  const existing = db.users.find((user) => user.id === id);
  if (!existing) throw new Error("User not found");
  const updated = { ...existing, ...patch };
  db.users = db.users.map((user) => (user.id === id ? updated : user));
  return delay(updated, 120);
}

export async function resetUserPassword(id: string): Promise<{ ok: true }> {
  void id;
  return delay({ ok: true } as const, 200);
}

export async function listNotifications(): Promise<Notification[]> {
  return delay([...db.notifications]);
}

export async function markNotificationsRead(): Promise<Notification[]> {
  db.notifications = db.notifications.map((item) => ({ ...item, isRead: true }));
  return delay([...db.notifications], 80);
}
