"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowUpIcon } from "@/icons";
import { statsCardsData } from '../../data/data'
export const SecOne = () => {
  return (
    <div className="flex w-full gap-2.5 overflow-hidden flex-wrap">
      {/* <!-- Metric Item Start --> */}

      {statsCardsData?.map((stat) => (
        <div key={stat.id} className="rounded-2xl flex-1 border border-[##e5ecf6] bg-[#e5ecf6] p-3 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">


          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-md  dark:text-gray-400">
                {stat?.title}
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {stat.value}
              </h4>
            </div>
            <Badge color="light" >
              {stat.percent}
              <ArrowUpIcon />
            </Badge>
          </div>
        </div>
      ))}

    </div>
  );
};
