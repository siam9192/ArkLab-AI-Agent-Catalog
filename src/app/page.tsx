import ListingFilterBox from "@/components/custom-ui/ListingFilterBox";
import ListingLoading from "@/components/custom-ui/ListingLoading";
import Listings from "@/components/custom-ui/Listings";
import { Suspense } from "react";

async function HomePage() {
  return (
    <div className="py-10">
      <ListingFilterBox />
      <Suspense fallback={<ListingLoading />}>
        <Listings />
      </Suspense>
    </div>
  );
}

export default HomePage;
