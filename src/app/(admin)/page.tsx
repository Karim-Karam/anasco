import type { Metadata } from "next";
import { SecOne } from "@/components/ecommerce/SecOne";
import React from "react";
import TrafficByDeviceChart from "@/components/ecommerce/TrafficByDeviceChart";
import TrafficByLocationChart from "@/components/ecommerce/TrafficByLocationChart";
import SecThree from "@/components/ecommerce/SecThree";


export const metadata: Metadata = {
  title:
    "ANASCO",
  description: "This is ANASCO",
};

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-12">
        <SecOne />

        <div className="col-span-12">
          <SecThree />
        </div>
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="flex flex-1">
            <TrafficByDeviceChart />
          </div>
          <div className="flex ">
            <TrafficByLocationChart />
          </div>
        </div>

      </div>





    </div>
  );
}
