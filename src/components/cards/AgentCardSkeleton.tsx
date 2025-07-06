import React from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function AgentCardSkeleton() {
  return (
    <Card className="p-6 gap-3 relative">
      <Skeleton className="  rounded-full  w-32 h-5 bg-gray-300  absolute right-1 top-1" />
      <div className="flex items-center gap-2">
        <Skeleton className="size-10 text-lg rounded-full bg-gray-200 flex items-center justify-center text-blue-800 font-semibold" />
      </div>

      <Skeleton className="rounded-full  w-[90%] h-5 bg-gray-200  " />
      <Skeleton className=" h-20 bg-gray-200  " />
      <div className="flex flex-wrap gap-2 text-sm mt-2">
        <Skeleton className="px-2 py-1 rounded-full  font-medium w-24 h-4 bg-gray-200" />
        <Skeleton className="px-2 py-1 rounded-full  font-medium w-24 h-4 bg-gray-200" />
      </div>
    </Card>
  );
}

export default AgentCardSkeleton;
