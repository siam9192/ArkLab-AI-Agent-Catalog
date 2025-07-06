import { getAgents } from "@/api-services/agent.service";
import { delay, filterListing } from "@/utils/helper";
import React from "react";
import AgentCard from "../cards/AgentCard";
import { TSeachParams } from "@/types/util.type.";
interface IProps {
  searchParams: TSeachParams;
}
async function Listings({ searchParams }: IProps) {
  const agents = await getAgents(); // Fetch all agents from JSON file
  await delay(); // Optional delay for simulating loading
  const filteredAgents = filterListing(agents, searchParams);

  // Display no result message on empty filtered agents
  if(filteredAgents.length === 0){
  return <div className="mt-10">
    <img src="/no-result.jpg" alt="" className="md:w-1/3 mx-auto" />
    <div className="text-center">
  <p className="font-semibold text-2xl">No results found</p>
  <p className="text-gray-600 mt-2">
    We couldn't find any AI agents matching your search or filters.<br />
    Try adjusting your keywords or selecting different filters.
  </p>
</div>
  </div>
  }

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {filteredAgents.map((agent) => (
        <AgentCard agent={agent} key={agent.id} />
      ))}
    </div>
  );
}

export default Listings;
