import type { AuditLog } from "@/modules/core/types/crm";
import { daysAgo } from "@/modules/core/utils/date";

type Seed = [companyIndex: number, user: number, field: string, from: string, to: string, ago: number];

const seeds: Seed[] = [
  [1, 1, "Prospect Stage", "Contacted", "Qualified", 9],
  [1, 2, "Owner", "Rahul Shah", "Bhavya Sheth", 12],
  [1, 1, "Priority", "Medium", "High", 14],
  [2, 2, "Prospect Stage", "New", "Contacted", 12],
  [4, 2, "Prospect Stage", "Qualified", "Proposal", 5],
  [4, 2, "Expected Value", "₹65,00,000", "₹87,00,000", 6],
  [5, 4, "Prospect Stage", "Proposal", "Negotiation", 8],
  [6, 1, "Prospect Stage", "Negotiation", "Won", 20],
  [6, 1, "Company Status", "Prospect", "Customer", 20],
  [8, 4, "Priority", "Medium", "High", 7],
  [9, 2, "Prospect Stage", "Qualified", "Proposal", 10],
  [10, 3, "Prospect Stage", "Contacted", "Lost", 14],
  [10, 3, "Company Status", "Prospect", "Lost", 14],
  [13, 2, "Prospect Stage", "Proposal", "Negotiation", 6],
  [13, 1, "Owner", "Neha Mehta", "Rahul Shah", 18],
  [16, 1, "Company Status", "Prospect", "Customer", 22],
  [17, 2, "Priority", "Medium", "High", 4],
  [18, 3, "Prospect Stage", "Contacted", "Qualified", 11],
  [19, 4, "Owner", "Bhavya Sheth", "Amit Patel", 9],
  [20, 1, "Company Status", "Active", "Inactive", 30],
];

export const mockAuditLogs: AuditLog[] = seeds.map((seed, index) => {
  const [companyIndex, user, field, fromValue, toValue, ago] = seed;
  const n = index + 1;
  return {
    id: `audit-${String(n).padStart(3, "0")}`,
    companyId: `company-${String(companyIndex).padStart(3, "0")}`,
    userId: `user-${String(user).padStart(3, "0")}`,
    field,
    fromValue,
    toValue,
    changedAt: daysAgo(ago),
  };
});
