import { FileText, GitBranch, Mail, Phone, StickyNote, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/modules/core/lib/utils";
import { formatDate, formatDateTime } from "@/modules/core/utils/date";
import type { ActivityType } from "@/modules/core/types/crm";

export const activityIcons: Record<ActivityType, LucideIcon> = {
  Call: Phone,
  Email: Mail,
  Meeting: Users,
  Note: StickyNote,
  "Follow-up": FileText,
  "Stage Change": GitBranch,
};

const activityTone: Record<ActivityType, string> = {
  Call: "bg-info/10 text-info",
  Email: "bg-primary/10 text-primary",
  Meeting: "bg-warning/15 text-warning-foreground",
  Note: "bg-muted text-muted-foreground",
  "Follow-up": "bg-success/10 text-success",
  "Stage Change": "bg-accent text-accent-foreground",
};

export interface TimelineItem {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  occurredAt: string;
  meta?: string;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-5 pl-2">
      <span className="absolute top-2 bottom-2 left-[19px] w-px bg-border" aria-hidden />
      {items.map((item) => {
        const Icon = activityIcons[item.type];
        return (
          <li key={item.id} className="relative flex gap-3">
            <span
              className={cn(
                "z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-4 ring-card",
                activityTone[item.type],
              )}
            >
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <div className="min-w-0 pt-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                  {item.type}
                </span>
                <span className="text-[12px] text-muted-foreground">{formatDate(item.occurredAt, "dd MMM")}</span>
              </div>
              <p className="text-[14px] font-medium">{item.title}</p>
              <p className="text-[13px] text-muted-foreground">{item.description}</p>
              <p className="mt-0.5 text-[12px] text-muted-foreground">
                {formatDateTime(item.occurredAt)}
                {item.meta ? ` · ${item.meta}` : ""}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
