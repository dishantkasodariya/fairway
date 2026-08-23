import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/modules/core/components/ui/button";
import { Input } from "@/modules/core/components/ui/input";
import { Label } from "@/modules/core/components/ui/label";
import { useAuth } from "@/modules/auth/hooks/use-auth";

export function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@fairway.co.in");
  const [password, setPassword] = useState("fairway123");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard", { replace: true });
  }, [isAuthenticated, navigate]);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await login({ email, password });
      navigate("/dashboard", { replace: true });
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden flex-col justify-between bg-sidebar p-12 text-sidebar-foreground lg:flex">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-card">
            <img src="/images/logo.png" alt="Fairway AI" className="h-16 w-16 object-contain" />
          </span>
          <span className="text-[26px] font-semibold text-sidebar-accent-foreground">Fairway AI</span>
        </div>
        <div>
          <h2 className="max-w-md text-3xl font-semibold text-sidebar-accent-foreground">
            Every company, facility and follow-up in one operating view.
          </h2>
          <p className="mt-4 max-w-md text-[14px] text-sidebar-foreground/70">
            Track pipeline movement, own the next action and keep field facilities separate from company records.
          </p>
        </div>
        <p className="text-[12px] text-sidebar-foreground/50">Prototype environment · mock data</p>
      </div>

      <div className="flex items-center justify-center px-6 py-12">
        <form onSubmit={onSubmit} className="w-full max-w-sm space-y-5">
          <div>
            <h1 className="text-2xl font-semibold">Sign in</h1>
            <p className="mt-1 text-[13px] text-muted-foreground">Use your Fairway AI workspace credentials.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {error ? (
            <p role="alert" className="text-[13px] text-destructive">
              {error}
            </p>
          ) : null}

          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
            Sign in
          </Button>

          <div className="relative flex items-center justify-center">
            <span className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </span>
            <span className="relative bg-background px-2 text-[12px] text-muted-foreground">or</span>
          </div>

          <Link
            to="/signup"
            className="inline-flex h-9 w-full items-center justify-center rounded-md border border-border bg-background px-4 text-[13px] font-medium text-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Create account
          </Link>

          <div className="rounded-md border border-border bg-muted/50 p-3 text-[12px] text-muted-foreground">
            <p className="font-medium text-foreground">Demo accounts</p>
            <p>admin@fairway.co.in · fairway123 (Super Admin)</p>
            <p>ops@fairway.co.in · fairway123 (Admin)</p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
