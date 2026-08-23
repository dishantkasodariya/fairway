import type { CrmStage } from "@/modules/core/types/crm";

export const mockStages: CrmStage[] = [
  { id: "stage-new", name: "New", order: 1, color: "#3B82F6", isActive: true },
  { id: "stage-contacted", name: "Contacted", order: 2, color: "#8B5CF6", isActive: true },
  { id: "stage-qualified", name: "Qualified", order: 3, color: "#0F766E", isActive: true },
  { id: "stage-proposal", name: "Proposal", order: 4, color: "#F59E0B", isActive: true },
  { id: "stage-negotiation", name: "Negotiation", order: 5, color: "#EA580C", isActive: true },
  { id: "stage-won", name: "Won", order: 6, color: "#16A34A", isActive: true, isWon: true },
  { id: "stage-lost", name: "Lost", order: 7, color: "#DC2626", isActive: true, isLost: true },
];
