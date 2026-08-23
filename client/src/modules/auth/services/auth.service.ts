/**
 * Mock authentication service.
 * Future REST contract: POST /auth/login, POST /auth/logout, POST /auth/register, GET /auth/me.
 * No real credentials are validated in this frontend phase.
 */
import { db, delay, nextId } from "@/modules/core/services/mock/db";
import type { AuthSession, LoginCredentials, SignupCredentials } from "@/modules/auth/types";
import type { User } from "@/modules/core/types/crm";

export const SESSION_STORAGE_KEY = "fairway-crm.session";

export async function signup({ fullName, email, password }: SignupCredentials): Promise<AuthSession> {
  const normalizedEmail = email.trim().toLowerCase();
  if (db.users.some((item) => item.email.toLowerCase() === normalizedEmail)) {
    throw new Error("An account with this email already exists.");
  }
  if (password.trim().length < 4) throw new Error("Password must be at least 4 characters.");
  const newUser: User = {
    id: nextId("user"),
    fullName: fullName.trim(),
    email: normalizedEmail,
    role: "ADMIN",
    status: "active",
    lastActiveAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    avatarColor: "#0F766E",
  };
  db.users.push(newUser);
  const session: AuthSession = {
    user: newUser,
    issuedAt: new Date().toISOString(),
    rememberMe: false,
  };
  return delay(session, 450);
}

export async function login({ email, password, rememberMe }: LoginCredentials): Promise<AuthSession> {
  const user = db.users.find((item) => item.email.toLowerCase() === email.trim().toLowerCase());
  if (!user) throw new Error("No account found with that email address.");
  if (user.status === "disabled") throw new Error("This account has been disabled.");
  if (password.trim().length < 4) throw new Error("Password must be at least 4 characters.");
  const session: AuthSession = {
    user,
    issuedAt: new Date().toISOString(),
    rememberMe: Boolean(rememberMe),
  };
  return delay(session, 450);
}

export function readStoredSession(): AuthSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AuthSession;
    if (!parsed?.user?.id) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function persistSession(session: AuthSession | null): void {
  if (typeof window === "undefined") return;
  if (!session) {
    window.localStorage.removeItem(SESSION_STORAGE_KEY);
    return;
  }
  window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
}
