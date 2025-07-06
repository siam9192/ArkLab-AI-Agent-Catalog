import { EAgentStatus, IAgent } from "@/types/agent.type";
import { TSeachParams } from "@/types/util.type.";

export async function delay(delay = 1000) {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000);
  });
}

export function getStatusColor(status: EAgentStatus): string {
  switch (status) {
    case EAgentStatus.ACTIVE:
      return "bg-green-100 text-green-800";

    case EAgentStatus.BETA:
      return "bg-yellow-100 text-yellow-800";

    case EAgentStatus.ARCHIVED:
      return "bg-gray-200 text-gray-600";

    default:
      return "bg-gray-100 text-gray-800"; // fallback
  }
}

export function filterListing(agents: IAgent[], searchParams: TSeachParams): IAgent[] {
  const { search_query, category, status, pricing_model } = searchParams;

  let filtered = [...agents];

  if (search_query?.trim()) {
    const query = search_query.toLowerCase().trim();
    filtered = filtered.filter(
      (agent) =>
        agent.name.toLowerCase().includes(query) || agent.description.toLowerCase().includes(query),
    );
  }

  if (category?.trim()) {
    const categories = category
      .toLowerCase()
      .split(",")
      .map((c) => c.trim());
    filtered = filtered.filter((agent) => categories.includes(agent.category.toLowerCase()));
  }

  if (status?.trim()) {
    const statuses = status
      .toLowerCase()
      .split(",")
      .map((s) => s.trim());
    filtered = filtered.filter((agent) => statuses.includes(agent.status.toLowerCase()));
  }

  if (pricing_model?.trim()) {
    const pricing = pricing_model.toLowerCase().trim();
    filtered = filtered.filter((agent) => agent.pricingModel.toLowerCase() === pricing);
  }

  return filtered;
}
