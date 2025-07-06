import { getAgents } from "@/api-services/agent.service";
import AgentCardSkeleton from "@/components/cards/AgentCardSkeleton";
import ListingFilterBox from "@/components/custom-ui/ListingFilterBox";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const data = await getAgents();
  console.log(data);
  return (
    <div className="py-10">
      <ListingFilterBox />
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 20 }).map((_, index) => (
          // <AgentCard key={index} />
          <AgentCardSkeleton key={index} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Button>Load more...</Button>
      </div>
    </div>
  );
}
