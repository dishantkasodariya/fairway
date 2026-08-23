import type { Note } from "@/modules/core/types/crm";
import { daysAgo } from "@/modules/core/utils/date";

type Seed = [companyIndex: number, content: string, user: number, ago: number];

const seeds: Seed[] = [
  [1, "Company is expanding production capacity at the Surat plant. Warehouse space requirement expected to double by Q3.", 1, 3],
  [1, "Purchase manager prefers quarterly billing cycles. Keep commercials aligned with that.", 2, 8],
  [2, "MD is the sole decision maker. Keep communication direct and concise.", 2, 5],
  [3, "Budget approval expected only in the next fiscal quarter. Nurture until then.", 3, 15],
  [4, "Quality head insists on documented SLA for temperature-controlled movement.", 2, 4],
  [5, "Negotiation stuck on price. Internal approval needed for anything beyond 4% discount.", 4, 2],
  [6, "Existing customer since last year. Renewal conversation to start two months in advance.", 1, 10],
  [7, "Food-grade compliance documentation is mandatory before any trial order.", 3, 7],
  [8, "Requires phased delivery of fixtures. Design engineer is the technical influencer.", 4, 6],
  [9, "EHS audit is a gate for onboarding. Coordinate with the safety manager early.", 2, 1],
  [10, "Deal lost to incumbent vendor on pricing. Revisit after six months.", 3, 14],
  [11, "Evaluating a second unit at Changodar — potential for expanded scope.", 1, 8],
  [12, "Packaging samples under QC evaluation. Follow up weekly until decision.", 4, 3],
  [13, "Legal team reviewing indemnity clauses. Expect two more rounds of redlines.", 2, 1],
  [14, "Interested in two reefer trucks per month. Confirm availability before committing.", 3, 5],
  [15, "Price sensitive account. Position on service reliability rather than rate.", 4, 2],
  [16, "Renewal likely at 4% escalation. Prepare comparative service report.", 1, 3],
  [17, "Procurement committee has five members — build consensus, not single-point buy-in.", 2, 2],
  [18, "Awaiting lab results for dye batch. Technical director drives the final call.", 3, 6],
  [19, "Mill audit window confirmed for month end. Block the operations team calendar.", 4, 4],
];

export const mockNotes: Note[] = seeds.map((seed, index) => {
  const [companyIndex, content, user, ago] = seed;
  const n = index + 1;
  return {
    id: `note-${String(n).padStart(3, "0")}`,
    companyId: `company-${String(companyIndex).padStart(3, "0")}`,
    content,
    createdById: `user-${String(user).padStart(3, "0")}`,
    createdAt: daysAgo(ago),
    updatedAt: daysAgo(ago),
  };
});
