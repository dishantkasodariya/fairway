import type { Activity, ActivityType } from "@/modules/core/types/crm";
import { daysAgo } from "@/modules/core/utils/date";

type Seed = [
  companyIndex: number,
  contactIndex: number | null,
  type: ActivityType,
  title: string,
  description: string,
  user: number,
  ago: number,
];

const seeds: Seed[] = [
  [1, 1, "Call", "Called Rahul Shah", "Discussed warehouse requirement for Q3 expansion.", 1, 1],
  [1, null, "Note", "Note added", "Company expanding production capacity at Surat plant.", 1, 3],
  [1, 2, "Email", "Email sent", "Shared commercial proposal and rate card.", 2, 6],
  [1, null, "Stage Change", "Stage changed", "Contacted → Qualified", 1, 9],
  [2, 4, "Meeting", "Site meeting at Vapi", "Walked through polymer unit and storage needs.", 2, 2],
  [2, null, "Stage Change", "Stage changed", "New → Contacted", 2, 12],
  [3, 6, "Call", "Introductory call", "Requirement still being finalised internally.", 3, 4],
  [4, 7, "Meeting", "Proposal presentation", "Presented full formulation logistics proposal.", 2, 2],
  [4, 8, "Email", "Proposal shared", "Sent detailed proposal with SLA annexure.", 2, 5],
  [4, null, "Stage Change", "Stage changed", "Qualified → Proposal", 2, 5],
  [5, 9, "Call", "Rate negotiation", "Client seeking 6% reduction on annual contract.", 4, 1],
  [5, null, "Stage Change", "Stage changed", "Proposal → Negotiation", 4, 8],
  [6, 10, "Meeting", "Service review", "Reviewed dispatch performance for last quarter.", 1, 3],
  [6, null, "Stage Change", "Stage changed", "Negotiation → Won", 1, 20],
  [7, 12, "Email", "Capability deck sent", "Shared food-grade handling capability document.", 3, 7],
  [8, 13, "Call", "Tooling requirement", "Requires 12 new fixtures by next quarter.", 4, 2],
  [8, 14, "Note", "Note added", "Design engineer prefers phased delivery.", 4, 6],
  [9, 15, "Meeting", "Plant audit walkthrough", "Audit scheduled with EHS team next week.", 2, 1],
  [9, null, "Stage Change", "Stage changed", "Qualified → Proposal", 2, 10],
  [10, 17, "Call", "Lost deal feedback", "Awarded to incumbent vendor on price.", 3, 14],
  [10, null, "Stage Change", "Stage changed", "Contacted → Lost", 3, 14],
  [11, 18, "Call", "Requirement qualification", "Volumes approx 400 MT per month.", 1, 4],
  [12, 19, "Follow-up", "Packaging samples follow-up", "Samples under evaluation at their QC lab.", 4, 3],
  [13, 20, "Meeting", "Contract discussion", "Legal review of indemnity clauses pending.", 2, 1],
  [13, 21, "Email", "Regulatory checklist", "Shared compliance documentation set.", 3, 8],
  [13, null, "Stage Change", "Stage changed", "Proposal → Negotiation", 2, 6],
  [14, 22, "Call", "Cold chain capacity", "Interested in 2 reefer trucks monthly.", 3, 5],
  [15, 23, "Email", "Fabrication estimate", "Sent budgetary estimate for structural work.", 4, 2],
  [16, 24, "Meeting", "Renewal discussion", "Renewal likely at 4% escalation.", 1, 3],
  [17, 25, "Meeting", "Procurement committee", "Presented to five-member evaluation panel.", 2, 2],
  [17, 26, "Note", "Note added", "Plant engineer flagged loading bay constraints.", 2, 4],
  [18, 27, "Follow-up", "Technical evaluation", "Awaiting lab test results on dye batch.", 3, 6],
  [18, null, "Stage Change", "Stage changed", "Contacted → Qualified", 3, 11],
  [19, 28, "Call", "Mill audit scheduling", "Audit window confirmed for month end.", 4, 4],
  [20, 29, "Email", "Reactivation outreach", "Re-engaging after 6 months of inactivity.", 1, 9],
  [3, null, "Note", "Note added", "Budget approval expected next fiscal quarter.", 3, 15],
  [5, 9, "Email", "Revised commercials", "Shared revised annual contract commercials.", 4, 4],
  [7, null, "Stage Change", "Stage changed", "New → Contacted", 3, 13],
  [11, null, "Note", "Note added", "Considering second unit at Changodar.", 1, 8],
  [12, null, "Call", "Follow-up call", "Purchase head requested revised MOQ.", 4, 7],
];

export const mockActivities: Activity[] = seeds
  .map((seed, index) => {
    const [companyIndex, contactIndex, type, title, description, user, ago] = seed;
    const n = index + 1;
    return {
      id: `activity-${String(n).padStart(3, "0")}`,
      companyId: `company-${String(companyIndex).padStart(3, "0")}`,
      contactId: contactIndex ? `contact-${String(contactIndex).padStart(3, "0")}` : null,
      userId: `user-${String(user).padStart(3, "0")}`,
      type,
      title,
      description,
      occurredAt: daysAgo(ago),
    };
  })
  .sort((a, b) => b.occurredAt.localeCompare(a.occurredAt));
