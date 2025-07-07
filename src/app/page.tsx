import { getAgents } from "@/api-services/agent.service";
import ListingFilterBox from "@/components/custom-ui/ListingFilterBox";
import ListingLoading from "@/components/custom-ui/ListingLoading";
import Listings from "@/components/custom-ui/Listings";
import { TNextSearchParams } from "@/types/util.type.";
import { filterListing } from "@/utils/helper";
import { Metadata } from "next";
import Head from "next/head";
import { Suspense } from "react";
interface IProps {
  searchParams: Promise<any>;
}

export const metadata: Metadata = {
  title: "Home | Ai agent catalog",
  description: "This is ai agent hub",
};

async function HomePage({ searchParams }: IProps) {
  searchParams = await searchParams;
  const agents = await getAgents(); // Fetch all agents from JSON file
  const filteredAgents = filterListing(agents, searchParams as any);
  const title = filteredAgents
    ? `ArkLab AI Agents Catalog - ${filteredAgents}`
    : `ArkLab AI Agents Catalog`;

  const description = filteredAgents
    ? `Browse ArkLab's AI Agents filtered by ${filteredAgents}. Discover AI tools tailored to your needs.`
    : `Explore ArkLab's full catalog of powerful AI Agents and tools built to boost productivity and automation.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="py-10 min-h-[90vh]">
        <ListingFilterBox />
        <Suspense fallback={<ListingLoading />}>
          <Listings agents={filteredAgents} />
        </Suspense>
      </div>
    </>
  );
}

export default HomePage;
