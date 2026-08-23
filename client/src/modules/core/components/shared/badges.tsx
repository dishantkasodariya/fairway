import { cn } from "@/modules/core/lib/utils";
import type { CompanyStatus, CrmStage, FacilityStatus, Priority, TaskStatus } from "@/modules/core/types/crm";

const base =
  "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[12px] font-medium whitespace-nowrap";

const statusStyles: Record<CompanyStatus, string> = {
  Active: "border-success/30 bg-success/10 text-success",
  Inactive: "border-border bg-muted text-muted-foreground",
  Prospect: "border-info/30 bg-info/10 text-info",
  Customer: "border-primary/30 bg-primary/10 text-primary",
  Lost: "border-destructive/30 bg-destructive/10 text-destructive",
};

export function StatusBadge({ status }: { status: CompanyStatus }) {
  return <span className={cn(base, statusStyles[status])}>{status}</span>;
}

const priorityStyles: Record<Priority, string> = {
  Low: "border-border bg-muted text-muted-foreground",
  Medium: "border-info/30 bg-info/10 text-info",
  High: "border-warning/40 bg-warning/15 text-warning-foreground",
  Urgent: "border-destructive/30 bg-destructive/10 text-destructive",
};

const priorityDot: Record<Priority, string> = {
  Low: "bg-muted-foreground",
  Medium: "bg-info",
  High: "bg-warning",
  Urgent: "bg-destructive",
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span className={cn(base, priorityStyles[priority])}>
      <span className={cn("h-1.5 w-1.5 rounded-full", priorityDot[priority])} aria-hidden />
      {priority}
    </span>
  );
}

export function StageBadge({ stage }: { stage?: CrmStage }) {
  if (!stage) return <span className="text-[13px] text-muted-foreground">—</span>;
  return (
    <span
      className={cn(base, "border-transparent")}
      style={{ backgroundColor: `${stage.color}1a`, color: stage.color, borderColor: `${stage.color}33` }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: stage.color }} aria-hidden />
      {stage.name}
    </span>
  );
}

const taskStatusStyles: Record<TaskStatus, string> = {
  Pending: "border-warning/40 bg-warning/15 text-warning-foreground",
  Completed: "border-success/30 bg-success/10 text-success",
  Cancelled: "border-border bg-muted text-muted-foreground",
};

export function TaskStatusBadge({ status }: { status: TaskStatus }) {
  return <span className={cn(base, taskStatusStyles[status])}>{status}</span>;
}

const facilityStatusStyles: Record<FacilityStatus, string> = {
  Operational: "border-success/30 bg-success/10 text-success",
  "Under Construction": "border-warning/40 bg-warning/15 text-warning-foreground",
  Closed: "border-destructive/30 bg-destructive/10 text-destructive",
};

export function FacilityStatusBadge({ status }: { status: FacilityStatus }) {
  return <span className={cn(base, facilityStatusStyles[status])}>{status}</span>;
}

export function MetaTag({ children }: { children: React.ReactNode }) {
  return <span className={cn(base, "border-border bg-muted text-muted-foreground")}>{children}</span>;
}
