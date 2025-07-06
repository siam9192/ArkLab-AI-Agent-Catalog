"use server";

import { IAgent } from "@/types/agent.type";
import fs from "fs";
import path from "path";

export async function getAgents() {
  const filePath = path.join(process.cwd(), "json-data/mock-agents.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data) as IAgent[];
}
