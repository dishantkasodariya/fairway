import type { Contact } from "@/modules/core/types/crm";
import { daysAgo } from "@/modules/core/utils/date";

type Seed = [companyIndex: number, name: string, designation: string, department: string, primary: boolean];

const seeds: Seed[] = [
  [1, "Rahul Shah", "Plant Manager", "Operations", true],
  [1, "Amit Patel", "Purchase Manager", "Procurement", false],
  [1, "Neha Mehta", "Operations Head", "Operations", false],
  [2, "Kiran Joshi", "Managing Director", "Leadership", true],
  [2, "Devang Rana", "Production Engineer", "Production", false],
  [3, "Sunita Agarwal", "Proprietor", "Leadership", true],
  [4, "Dr. Nilesh Bhatt", "Quality Head", "Quality", true],
  [4, "Ritu Kapadia", "Procurement Lead", "Procurement", false],
  [5, "Jayesh Vora", "Works Manager", "Operations", true],
  [6, "Sameer Kulkarni", "Logistics Head", "Supply Chain", true],
  [6, "Pooja Nair", "Key Account Manager", "Sales", false],
  [7, "Anil Deshmukh", "Plant Head", "Operations", true],
  [8, "Vikram Chauhan", "Sourcing Manager", "Procurement", true],
  [8, "Meera Iyer", "Design Engineer", "Engineering", false],
  [9, "Hitesh Trivedi", "General Manager", "Leadership", true],
  [9, "Falguni Shah", "EHS Manager", "Safety", false],
  [10, "Manish Gupta", "Owner", "Leadership", true],
  [11, "Sneha Pandya", "Factory Manager", "Operations", true],
  [12, "Rakesh Modi", "Purchase Head", "Procurement", true],
  [13, "Dr. Alok Verma", "R&D Director", "R&D", true],
  [13, "Shweta Rane", "Regulatory Lead", "Compliance", false],
  [14, "Bhavesh Patel", "Fleet Manager", "Logistics", true],
  [15, "Nitin Solanki", "Workshop Supervisor", "Production", true],
  [16, "Kalpesh Amin", "Supply Chain Head", "Supply Chain", true],
  [17, "Rohit Bansal", "Procurement Director", "Procurement", true],
  [17, "Anita Rao", "Plant Engineer", "Engineering", false],
  [18, "Sanjay Mistry", "Technical Director", "Engineering", true],
  [19, "Prashant Jadhav", "Mill Manager", "Operations", true],
  [20, "Divya Shah", "Business Head", "Leadership", true],
  [20, "Karan Malhotra", "Tooling Manager", "Production", false],
];

const slug = (name: string) => name.toLowerCase().replace(/[^a-z ]/g, "").trim().replace(/\s+/g, ".");

export const mockContacts: Contact[] = seeds.map((seed, index) => {
  const [companyIndex, fullName, designation, department, isPrimary] = seed;
  const n = index + 1;
  return {
    id: `contact-${String(n).padStart(3, "0")}`,
    companyId: `company-${String(companyIndex).padStart(3, "0")}`,
    fullName,
    designation,
    department,
    phone: `+91 97${String(31000000 + n * 971).slice(0, 8)}`,
    email: `${slug(fullName)}@example.co.in`,
    linkedinUrl: `https://linkedin.com/in/${slug(fullName).replace(/\./g, "-")}`,
    isPrimary,
    notes: isPrimary ? "Primary decision maker for procurement discussions." : "",
    createdAt: daysAgo(120 - n * 3),
  };
});
