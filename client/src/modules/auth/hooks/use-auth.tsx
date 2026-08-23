import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { roleHasPermission, type Permission } from "@/modules/core/constants/permissions";
import * as authService from "@/modules/auth/services/auth.service";
import type { AuthSession, AuthState, LoginCredentials, SignupCredentials } from "@/modules/auth/types";

interface AuthContextValue extends AuthState {
  login: (credentials: LoginCredentials) => Promise<AuthSession>;
  signup: (credentials: SignupCredentials) => Promise<AuthSession>;
  logout: () => void;
  hasPermission: (permission: Permission) => boolean;
  isSuperAdmin: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSession(authService.readStoredSession());
    setIsLoading(false);
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    const next = await authService.login(credentials);
    authService.persistSession(next);
    setSession(next);
    return next;
  }, []);

  const signup = useCallback(async (credentials: SignupCredentials) => {
    const next = await authService.signup(credentials);
    authService.persistSession(next);
    setSession(next);
    return next;
  }, []);

  const logout = useCallback(() => {
    authService.persistSession(null);
    setSession(null);
  }, []);

  const value = useMemo<AuthContextValue>(() => {
    const role = session?.user.role ?? null;
    return {
      session,
      user: session?.user ?? null,
      role,
      isAuthenticated: Boolean(session),
      isLoading,
      login,
      signup,
      logout,
      isSuperAdmin: role === "SUPER_ADMIN",
      hasPermission: (permission: Permission) => (role ? roleHasPermission(role, permission) : false),
    };
  }, [session, isLoading, login, signup, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside <AuthProvider>");
  return context;
}
