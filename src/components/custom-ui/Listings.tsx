import { delay, filterListing } from "@/utils/helper";
import React from "react";
import AgentCard from "../cards/AgentCard";
import { IAgent } from "@/types/agent.type";
interface IProps {
  agents: IAgent[];
}
async function Listings({ agents }: IProps) {
  await delay(2000); // Optional delay for simulating loading
  return (
    <div>
      {/*  Display no result message on empty filtered agents */}
      {agents.length === 0 ? (
        <div className="mt-10 overflow-hidden">
          <img src="/no-result.jpg" alt="" className="md:w-1/3 mx-auto" />
          <div className="text-center">
            <p className="font-semibold text-2xl">No results found</p>
            <p className="text-gray-600 mt-2">
              We couldn't find any AI agents matching your search or filters.
              <br />
              Try adjusting your keywords or selecting different filters.
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {agents.map((agent) => (
            <AgentCard agent={agent} key={agent.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Listings;
