import type { Facility, FacilityStatus, FacilityType } from "@/modules/core/types/crm";
import { daysAgo } from "@/modules/core/utils/date";

type Seed = [
  companyIndex: number,
  name: string,
  type: FacilityType,
  city: string,
  lat: number,
  lng: number,
  status: FacilityStatus,
  contact: string,
];

const seeds: Seed[] = [
  [1, "Surat Plant", "Plant", "Surat", 21.1702, 72.8311, "Operational", "Rahul Shah"],
  [1, "Vapi Warehouse", "Warehouse", "Vapi", 20.3893, 72.9106, "Operational", "Amit Patel"],
  [2, "Vapi Polymer Unit I", "Plant", "Vapi", 20.3717, 72.9043, "Operational", "Kiran Joshi"],
  [3, "Narol Weaving Unit", "Plant", "Ahmedabad", 22.9666, 72.5983, "Operational", "Sunita Agarwal"],
  [4, "Makarpura Formulation Plant", "Plant", "Vadodara", 22.2587, 73.1812, "Operational", "Dr. Nilesh Bhatt"],
  [4, "Vadodara R&D Center", "R&D Center", "Vadodara", 22.3072, 73.1812, "Operational", "Ritu Kapadia"],
  [5, "Aji GIDC Workshop", "Plant", "Rajkot", 22.3039, 70.8022, "Operational", "Jayesh Vora"],
  [6, "JNPT Logistics Hub", "Warehouse", "Mumbai", 18.9498, 72.9525, "Operational", "Sameer Kulkarni"],
  [6, "Bhiwandi Depot", "Depot", "Mumbai", 19.2969, 73.0629, "Operational", "Pooja Nair"],
  [7, "Chakan Food Plant", "Plant", "Pune", 18.7606, 73.8636, "Operational", "Anil Deshmukh"],
  [8, "Ranjangaon Components Plant", "Plant", "Pune", 18.7627, 74.2437, "Operational", "Vikram Chauhan"],
  [9, "Nandesari Chemicals Plant", "Plant", "Vadodara", 22.4166, 73.0833, "Operational", "Hitesh Trivedi"],
  [10, "Pandesara Mill", "Plant", "Surat", 21.1364, 72.8236, "Closed", "Manish Gupta"],
  [11, "Changodar Unit", "Plant", "Ahmedabad", 22.8879, 72.4494, "Under Construction", "Sneha Pandya"],
  [12, "Vapi Packaging Line", "Plant", "Vapi", 20.3654, 72.9251, "Operational", "Rakesh Modi"],
  [13, "Sanand API Plant", "Plant", "Ahmedabad", 22.9855, 72.3819, "Operational", "Dr. Alok Verma"],
  [14, "Rajkot Cold Store", "Warehouse", "Rajkot", 22.2734, 70.7963, "Operational", "Bhavesh Patel"],
  [16, "Anand Processing Plant", "Plant", "Vadodara", 22.5645, 72.9289, "Operational", "Kalpesh Amin"],
  [17, "Chakala Corporate Office", "Office", "Mumbai", 19.1136, 72.8697, "Operational", "Rohit Bansal"],
  [18, "Sarigam Dye Works", "Plant", "Vapi", 20.2617, 72.8781, "Operational", "Sanjay Mistry"],
];

export const mockFacilities: Facility[] = seeds.map((seed, index) => {
  const [companyIndex, name, type, city, latitude, longitude, status, contactName] = seed;
  const n = index + 1;
  return {
    id: `facility-${String(n).padStart(3, "0")}`,
    companyId: `company-${String(companyIndex).padStart(3, "0")}`,
    name,
    type,
    address: `Plot ${20 + n}, ${city} Industrial Estate`,
    city,
    latitude,
    longitude,
    status,
    contactName,
    contactPhone: `+91 96${String(41000000 + n * 617).slice(0, 8)}`,
    createdAt: daysAgo(150 - n * 4),
  };
});
