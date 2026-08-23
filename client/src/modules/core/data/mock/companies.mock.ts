import type { Company } from "@/modules/core/types/crm";
import { daysAgo, daysFromNow } from "@/modules/core/utils/date";

type Seed = [
  name: string,
  legalSuffix: string,
  industry: string,
  city: string,
  stageId: string,
  priority: Company["priority"],
  status: Company["status"],
  ownerId: string,
  value: number,
];

const seeds: Seed[] = [
  ["ABC Industries", "Pvt Ltd", "Chemicals", "Surat", "stage-qualified", "High", "Prospect", "user-001", 4500000],
  ["Vapi Polymers", "Ltd", "Chemicals", "Vapi", "stage-contacted", "Medium", "Prospect", "user-002", 2200000],
  ["Shree Textiles", "Pvt Ltd", "Textiles", "Ahmedabad", "stage-new", "Low", "Prospect", "user-003", 1200000],
  ["Nirvana Pharma", "Ltd", "Pharmaceuticals", "Vadodara", "stage-proposal", "Urgent", "Prospect", "user-002", 8700000],
  ["Rajkot Engineering Works", "Pvt Ltd", "Engineering", "Rajkot", "stage-negotiation", "High", "Prospect", "user-004", 6400000],
  ["Sagar Logistics", "LLP", "Logistics", "Mumbai", "stage-won", "Medium", "Customer", "user-001", 3100000],
  ["Deccan Foods", "Pvt Ltd", "Food Processing", "Pune", "stage-contacted", "Medium", "Prospect", "user-003", 1850000],
  ["Meridian Auto Components", "Ltd", "Automotive", "Pune", "stage-qualified", "High", "Prospect", "user-004", 5200000],
  ["Gujarat Speciality Chemicals", "Ltd", "Chemicals", "Vadodara", "stage-proposal", "High", "Prospect", "user-002", 9400000],
  ["Krishna Weaving Mills", "Pvt Ltd", "Textiles", "Surat", "stage-lost", "Low", "Lost", "user-003", 900000],
  ["Aarav Manufacturing", "Pvt Ltd", "Manufacturing", "Ahmedabad", "stage-new", "Medium", "Prospect", "user-001", 2650000],
  ["Sunrise Packaging", "Pvt Ltd", "Manufacturing", "Vapi", "stage-contacted", "Low", "Prospect", "user-004", 1400000],
  ["Trident Pharmaceuticals", "Ltd", "Pharmaceuticals", "Ahmedabad", "stage-negotiation", "Urgent", "Prospect", "user-002", 11200000],
  ["Patel Cold Chain", "LLP", "Logistics", "Rajkot", "stage-qualified", "Medium", "Prospect", "user-003", 3350000],
  ["Om Steel Fabricators", "Pvt Ltd", "Engineering", "Surat", "stage-new", "Medium", "Prospect", "user-004", 1750000],
  ["Anand Dairy Products", "Ltd", "Food Processing", "Vadodara", "stage-won", "High", "Customer", "user-001", 4900000],
  ["Zenith Motors", "Pvt Ltd", "Automotive", "Mumbai", "stage-contacted", "High", "Prospect", "user-002", 7300000],
  ["Bharat Dyes & Intermediates", "Pvt Ltd", "Chemicals", "Vapi", "stage-qualified", "Urgent", "Prospect", "user-003", 6100000],
  ["Sahyadri Textiles", "Ltd", "Textiles", "Pune", "stage-proposal", "Medium", "Prospect", "user-004", 2950000],
  ["Nova Precision Tools", "Pvt Ltd", "Engineering", "Ahmedabad", "stage-inactive-check", "Low", "Inactive", "user-001", 800000],
];

const domainOf = (name: string) =>
  name.toLowerCase().replace(/&/g, "and").replace(/[^a-z ]/g, "").split(" ").slice(0, 2).join("");

export const mockCompanies: Company[] = seeds.map((seed, index) => {
  const [name, suffix, industry, city, stageId, priority, status, ownerId, value] = seed;
  const domain = domainOf(name);
  const n = index + 1;
  return {
    id: `company-${String(n).padStart(3, "0")}`,
    name,
    legalName: `${name} ${suffix}`,
    website: `https://www.${domain}.co.in`,
    industry,
    status,
    phone: `+91 98${String(25000000 + n * 137).slice(0, 8)}`,
    email: `info@${domain}.co.in`,
    address: `${100 + n}, ${["GIDC Estate", "Industrial Area", "Ring Road", "MIDC Phase II", "Sardar Nagar"][n % 5]}`,
    city,
    pincode: String(360000 + n * 137),
    ownerId,
    stageId: stageId === "stage-inactive-check" ? "stage-new" : stageId,
    priority,
    expectedValue: value,
    nextFollowUpAt: n % 7 === 0 ? null : daysFromNow((n % 9) - 3),
    lastActivityAt: daysAgo((n % 12) + 1),
    createdAt: daysAgo(200 - n * 7),
    updatedAt: daysAgo((n % 10) + 1),
  };
});
