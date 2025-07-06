import ListingFilterBox from "@/components/custom-ui/ListingFilterBox";
import ListingLoading from "@/components/custom-ui/ListingLoading";
import Listings from "@/components/custom-ui/Listings";
import { TNextSearchParams } from "@/types/util.type.";
import { Suspense } from "react";
interface IProps {
  searchParams: TNextSearchParams;
}
async function HomePage({ searchParams }: IProps) {
  searchParams = await (searchParams as any);
  return (
    <div className="py-10">
      <ListingFilterBox />
      <Suspense fallback={<ListingLoading />}>
        <Listings searchParams={searchParams as any} />
      </Suspense>
    </div>
  );
}

export default HomePage;
