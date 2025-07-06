import { getAgents } from "@/api-services/agent.service";
import { delay } from "@/utils/helper";
import React from "react";
import AgentCard from "../cards/AgentCard";
import { Button } from "../ui/button";

async function Listings() {
  const agents = await getAgents(); // Fetch all agents from JSON file
  await delay(); // Optional delay for simulating loading
  return (
    <div>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {agents.map((agent) => (
          <AgentCard agent={agent} key={agent.id} />
        ))}
      </div>
      {/* <div className="text-center mt-10">
        <Button>Load more...</Button>
      </div> */}
    </div>
  );
}

export default Listings;
