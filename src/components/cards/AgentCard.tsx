import React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import {IAgent } from "@/types/agent.type";
import { cn } from "@/lib/utils";
import { getStatusColor } from "@/utils/helper";
interface IProps {
  agent: IAgent;
}
function AgentCard({ agent }: IProps) {
  const { name, iconUrl,description,status,pricingModel } = agent;
  const fallbackValue = name
    .trim()
    .split(/\s+/)
    .map((word) => word[0]?.toUpperCase() || "")
    .slice(0, 2)
    .join("");
  
   enum EAgentStatus {
  ACTIVE = 'Active',
  BETA = 'Beta',
  ARCHIVED = 'Archived'
}



  return (
    <Card className="p-6 gap-3 relative">
      <Badge className=" bg-secondary rounded-full px-2 py-1  absolute right-1 top-1">
        {agent.category}
      </Badge>
      <div className="flex items-center gap-2">
        {iconUrl ? (
          <img
            src={
              iconUrl
            }
            className="size-12 rounded-full object-cover"
          />
        ) : (
          <div className="size-10 text-lg rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-semibold">
            {fallbackValue}
          </div>
        )}

        <CardTitle className="text-xl  text-primary-text">{name}</CardTitle>
      </div>

      <CardDescription>
      {description}
      </CardDescription>

      <div className="flex flex-wrap gap-2 text-sm mt-2">
        <span className={cn("px-2 py-1 rounded-full",getStatusColor(status))}>{status}</span>
        <span className=" px-2 py-1 rounded-full bg-blue-100 text-blue-800 font-medium">
       {pricingModel}
        </span>
      </div>
    </Card>
  );
}

export default AgentCard;
