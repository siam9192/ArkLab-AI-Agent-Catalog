import { EAgentStatus } from "@/types/agent.type";

export async function delay(delay = 1000) {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000);
  });
}



export function getStatusColor(status: EAgentStatus): string {
  switch (status) {
    case EAgentStatus.ACTIVE:
      return 'bg-green-100 text-green-800';

    case EAgentStatus.BETA:
      return 'bg-yellow-100 text-yellow-800';

    case EAgentStatus.ARCHIVED:
      return 'bg-gray-200 text-gray-600';

    default:
      return 'bg-gray-100 text-gray-800'; // fallback
  }
}