import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/modules/core/lib/utils";

export interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  tone?: "primary" | "info" | "warning" | "success" | "destructive";
}

const tones = {
  primary: "bg-primary/10 text-primary",
  info: "bg-info/10 text-info",
  warning: "bg-warning/15 text-warning-foreground",
  success: "bg-success/10 text-success",
  destructive: "bg-destructive/10 text-destructive",
} as const;

export function StatCard({ label, value, icon: Icon, trend, tone = "primary" }: StatCardProps) {
  const isUp = (trend ?? 0) >= 0;
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-card transition-shadow hover:shadow-raised">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[12px] font-medium uppercase tracking-wide text-muted-foreground">
            {label}
          </p>
          <p className="mt-2 text-2xl font-semibold tabular-nums">{value}</p>
        </div>
        <span className={cn("flex h-9 w-9 items-center justify-center rounded-md", tones[tone])}>
          <Icon className="h-4.5 w-4.5" aria-hidden />
        </span>
      </div>
      {typeof trend === "number" ? (
        <p
          className={cn(
            "mt-3 flex items-center gap-1 text-[12px] font-medium",
            isUp ? "text-success" : "text-destructive",
          )}
        >
          {isUp ? (
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          ) : (
            <ArrowDownRight className="h-3.5 w-3.5" aria-hidden />
          )}
          {Math.abs(trend)}%
          <span className="font-normal text-muted-foreground">vs last month</span>
        </p>
      ) : null}
    </div>
  );
}
