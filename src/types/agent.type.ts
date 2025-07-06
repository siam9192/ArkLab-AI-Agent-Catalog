export interface IAgent {
  id: string;
  name: string;
  description: string;
  iconUrl?: string;
  status: EAgentStatus;
  category: string;
  pricingModel: EAgentPricingModel;
}

export enum EAgentStatus {
  BETA = "Beta",
  ACTIVE = "Active",
  ARCHIVED = "Archived",
}

export enum EAgentPricingModel {
  FREE_TIER = "Free Tier",
  SUBSCRIPTION = "Subscription",
  PER_USE = "Per Use",
}
