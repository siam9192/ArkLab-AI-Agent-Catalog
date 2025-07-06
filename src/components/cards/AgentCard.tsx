import React from "react";
import { Card, CardAction, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";

function AgentCard() {
  return (
    <Card className="p-6 gap-3 relative">
      <Badge className=" bg-secondary rounded-full px-2 py-1  absolute right-1 top-1">
        Customer Service
      </Badge>
      <div className="flex items-center gap-2">
        {/* <img src={"https://media.istockphoto.com/id/2058507417/vector/artificial-intelligence-icon-sign-logo-in-the-circuit-line-style-ai-processor-vector-icon.jpg?s=612x612&w=0&k=20&c=0kb5zgMcapsLizKDzLP-Y72UyyVACOy2cEZC8hNIboE="} className="size-12 rounded-full object-cover" /> */}
        <div className="size-10 text-lg rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-semibold">
          CGX
        </div>
        <CardTitle className="text-xl  text-primary-text">Intelligent Chatbot Pro</CardTitle>
      </div>

      <CardDescription>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum laudantium corporis eum
        iure modi asperiores voluptatibus eligendi culpa odit assumenda?
      </CardDescription>

      <div className="flex flex-wrap gap-2 text-sm mt-2">
        <span className="px-2 py-1 rounded-full bg-green-100 font-medium">Active</span>
        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 font-medium">
          Free tier
        </span>
      </div>
    </Card>
  );
}

export default AgentCard;
