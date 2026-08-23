import type { Priority, Task, TaskStatus, TaskType } from "@/modules/core/types/crm";
import { daysAgo, daysFromNow } from "@/modules/core/utils/date";

type Seed = [
  companyIndex: number,
  contactIndex: number | null,
  title: string,
  type: TaskType,
  assignee: number,
  dueOffset: number,
  priority: Priority,
  status: TaskStatus,
];

const seeds: Seed[] = [
  [1, 1, "Call Rahul Shah about warehouse requirement", "Call", 1, 0, "High", "Pending"],
  [1, 2, "Share revised quotation", "Email", 2, 1, "Medium", "Pending"],
  [2, 4, "Site meeting at Vapi polymer unit", "Meeting", 2, 1, "High", "Pending"],
  [3, 6, "Introductory call", "Call", 3, 0, "Medium", "Pending"],
  [4, 7, "Follow-up on proposal feedback", "Follow-up", 2, -2, "Urgent", "Pending"],
  [5, 9, "Negotiate annual rate contract", "Meeting", 4, 3, "High", "Pending"],
  [6, 10, "Quarterly service review", "Meeting", 1, 6, "Medium", "Pending"],
  [7, 12, "Send capability deck", "Email", 3, -1, "Medium", "Pending"],
  [8, 13, "Discuss tooling requirement", "Call", 4, 0, "High", "Pending"],
  [9, 15, "Plant visit and audit walkthrough", "Meeting", 2, 4, "Urgent", "Pending"],
  [10, 17, "Closure call - lost deal feedback", "Call", 3, -8, "Low", "Completed"],
  [11, 18, "Qualify requirement volume", "Call", 1, 2, "Medium", "Pending"],
  [12, 19, "Follow-up on packaging samples", "Follow-up", 4, -3, "Medium", "Pending"],
  [13, 20, "Contract redlines review", "Meeting", 2, 1, "Urgent", "Pending"],
  [14, 22, "Cold chain capacity discussion", "Call", 3, 5, "Medium", "Pending"],
  [15, 23, "Send fabrication estimate", "Email", 4, 0, "Low", "Pending"],
  [16, 24, "Renewal discussion", "Meeting", 1, 9, "High", "Pending"],
  [17, 25, "Procurement committee presentation", "Meeting", 2, 2, "Urgent", "Pending"],
  [18, 27, "Technical evaluation follow-up", "Follow-up", 3, -4, "High", "Pending"],
  [19, 28, "Mill audit scheduling", "Call", 4, 7, "Medium", "Pending"],
  [20, 29, "Reactivation outreach", "Email", 1, 12, "Low", "Pending"],
  [2, null, "Update company records after site visit", "Other", 2, -6, "Low", "Completed"],
  [4, 8, "Send NDA for signature", "Email", 2, -10, "Medium", "Completed"],
  [5, null, "Prepare negotiation sheet", "Other", 4, -5, "High", "Completed"],
  [6, 11, "Onboarding kickoff call", "Call", 1, -12, "Medium", "Completed"],
  [8, 14, "Share drawing revisions", "Email", 4, -7, "Medium", "Completed"],
  [9, 16, "Safety documentation handover", "Other", 2, -9, "Low", "Cancelled"],
  [13, 21, "Regulatory checklist review", "Follow-up", 3, -11, "Medium", "Completed"],
  [16, null, "Annual pricing revision note", "Other", 1, -2, "Medium", "Pending"],
  [17, 26, "Plant engineer walkthrough", "Meeting", 2, -1, "High", "Pending"],
];

export const mockTasks: Task[] = seeds.map((seed, index) => {
  const [companyIndex, contactIndex, title, type, assignee, dueOffset, priority, status] = seed;
  const n = index + 1;
  return {
    id: `task-${String(n).padStart(3, "0")}`,
    title,
    description: `${type} scheduled as part of the ongoing CRM engagement.`,
    companyId: `company-${String(companyIndex).padStart(3, "0")}`,
    facilityId: null,
    contactId: contactIndex ? `contact-${String(contactIndex).padStart(3, "0")}` : null,
    assignedToId: `user-${String(assignee).padStart(3, "0")}`,
    type,
    dueDate: dueOffset >= 0 ? daysFromNow(dueOffset) : daysAgo(-dueOffset),
    priority,
    status,
    createdAt: daysAgo(20 + (n % 15)),
  };
});
