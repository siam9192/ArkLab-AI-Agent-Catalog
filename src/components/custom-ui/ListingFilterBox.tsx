"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { EAgentPricingModel, EAgentStatus } from "@/types/agent.type";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import useBounce from "@/hooks/useBounce";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  "Operations",
  "Marketing",
  "Data Analysis",
  "Development",
  "HR Onboarding Bot",
  "Finance",
  "Legal",
  "Customer Service",
];

const allStatus = Object.values(EAgentStatus);
const pricingModels = Object.values(EAgentPricingModel);

function ListingFilterBox() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedPricingModel, setSelectedPricingModel] = useState("");
  const bouncedSearchQuery = useBounce(searchQuery); //Get search keyword with delay for better experience


  const router = useRouter();
  
  useEffect(()=>{
    if(!bouncedSearchQuery){
      return  router.push('/')
    }
    else return router.push(`/?search_query=${searchQuery}`)
  },[bouncedSearchQuery])

  
  function handleCheckboxChange(
    checked: boolean | string,
    value: string,
    type: "category" | "status",
  ) {
    const updateState = <T extends string>(
      setter: React.Dispatch<React.SetStateAction<T[]>>,
      current: T[],
    ) => {
      // If checked add value to state array otherwise remove existence value from state array
      if (checked) {
        setter([...current, value as T]);
      } else {
        setter(current.filter((item) => item !== value));
      }
    };

    // Update state base on type
    switch (type) {
      case "category":
        updateState(setSelectedCategories, selectedCategories);
        break;
      case "status":
        updateState(setSelectedStatus, selectedStatus);
        break;
    }
  }

  function handleSubmit() {
    const params = new URLSearchParams();

    if (searchQuery?.trim()) {
      params.set("search_query", searchQuery.trim());
    }

    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories.join(","));
    }

    if (selectedStatus.length > 0) {
      params.set("status", selectedStatus.join(","));
    }

    if (selectedPricingModel) {
      params.set("pricing_model", selectedPricingModel);
    }

    const queryStr = params.toString();

    if (!queryStr) return;

    router.push(`?${queryStr}`);
  }



  function handelClear() {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedStatus([]);
    setSelectedPricingModel("");
    router.push("/");
  }

  return (
    <div className="px-5 py-2 bg-background shadow-sm rounded-md ">
      <h1 className="text-2xl font-medium  mb-3">Search Box</h1>
      <div className="py-5 flex  md:flex-row  flex-col lg:gap-0 gap-2 justify-between items-center">
        <Input
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter keyword.."
          className=" w-full lg:w-1/2 xl:w-1/3  h-fit px-4 py-3 font-medium"
        />
        <Dialog>
          <DialogTrigger className="px-4 py-2 md:w-fit w-full  bg-primary flex items-center gap-2 text-white rounded-full hover:bg-secondary justify-center">
            <SlidersHorizontal className="mr-2 text-2xl" />
            Filter
          </DialogTrigger>
          <DialogContent>
            <form className="space-y-4">
              <DialogTitle className="text-xl">Filter listing</DialogTitle>
              {/* Keyword input */}
              <Input
                name="search_query"
                placeholder="Enter keyword.."
                defaultValue={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                className="w-full  h-fit px-4 py-3 font-medium"
              />
              {/* Select categories */}
              <div>
                <p className="font-semibold text-lg">Categories:</p>
                <div className=" mt-2 flex items-center gap-x-2 gap-y-4 flex-wrap ">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Checkbox
                        name="categories"
                        value={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange(checked, category, "category")
                        }
                      />
                      <Label>{category}</Label>
                    </div>
                  ))}
                </div>
              </div>
              {/* Select status */}
              <div>
                <p className="font-semibold text-lg">Status:</p>
                <div className=" mt-2 flex items-center gap-x-2 gap-y-4 flex-wrap ">
                  {allStatus.map((status, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Checkbox
                        name="status"
                        value={status}
                        checked={selectedStatus.includes(status)}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange(checked, status, "status")
                        }
                      />
                      <Label>{status}</Label>
                    </div>
                  ))}
                </div>
              </div>
              {/* Select pricing model*/}
              <div>
                <p className="font-semibold text-lg">Pricing Model:</p>
                <div className="mt-2">
                  <RadioGroup
                    onValueChange={(value) => setSelectedPricingModel(value)}
                    name="pricingModel"
                    defaultValue={selectedPricingModel}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="" id={`pricing-model-All`} />
                      <Label htmlFor={`pricing-model-all`}>All</Label>
                    </div>
                    {pricingModels.map((model, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <RadioGroupItem value={model} id={`pricing-model-${model}`} />
                        <Label htmlFor={`pricing-model-${model}`}>{model}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
              {/* Buttons */}
              <div className="mt-5 flex justify-end items-center gap-2">
                <DialogClose asChild>
                  <Button onClick={handelClear} type="button" variant="outline" size="lg">
                    Clear
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="button" onClick={handleSubmit} variant="default">
                    Apply
                  </Button>
                </DialogClose>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default ListingFilterBox;
