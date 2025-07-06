import React from "react";
import AgentCardSkeleton from "../cards/AgentCardSkeleton";

function ListingLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 20 }).map((_, index) => (
        <AgentCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default ListingLoading;
