"use client";
import React from "react";
import { ApexOptions } from "apexcharts";
import ChartTab from "../common/ChartTab";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function SecThree() {
  const options: ApexOptions = {
    legend: {
      show: false, // Hide legend as per the UI
    },
    colors: ["#6699FF", "#333333"], // Light blue and dark gray/black for the lines
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "area", // The UI shows an area chart
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth", // The lines in the UI look smooth
      width: [2, 2], // Line width for each dataset
      dashArray: [0, 5], // First line solid (0), second line dashed (5)
    },
    fill: {
      type: ["solid", "solid"], // The image shows a solid fill for the blue line
      opacity: [0.2, 0], // Reduced opacity for the fill under the blue line, 0 for the black line
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    markers: {
      size: [0, 0], // No markers by default
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 6,
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true, // Keep y-axis grid lines as in the UI
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      x: {
        format: "MMM",
      },
      y: {
        formatter: function (val: number) {
          return val + "M"; // Format tooltip values to show 'M'
        },
      },
    },
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Only up to July as per the image
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#6B7280",
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return val === 0 ? "0" : val / 10 + "M"; // Convert values to M for labels (e.g., 100 -> 10M)
        },
        style: {
          fontSize: "12px",
          colors: ["#6B7280"],
        },
      },
      min: 0,
      max: 300, // Adjusted max to fit 30M
      tickAmount: 3, // To get 0, 10M, 20M, 30M
      title: {
        text: "",
      },
    },
    annotations: {
      points: [{
        x: 'Mar', // X-axis category where the marker should appear
        y: 170, // Y-axis value for the marker (adjust based on your data)
        marker: {
          size: 6,
          fillColor: '#fff',
          strokeColor: '#6699FF', // Match the blue line color
          strokeWidth: 2,
          cssClass: 'apexcharts-custom-point',
        },
        label: {
          borderColor: '#E0E0E0',
          offsetY: -30, // Adjust position
          style: {
            color: '#333',
            background: '#fff',
            fontSize: '12px',
            padding: {
              left: 8,
              right: 8,
              top: 4,
              bottom: 4,
            },
          },
          text: '3,256,598', // The value from the image
        }
      }]
    }
  };

  const series = [
    {
      name: "Current Week",
      data: [120, 150, 170, 155, 180, 200, 220], // Adjusted data to somewhat match the blue line trend up to July
    },
    {
      name: "Previous Week",
      data: [100, 110, 130, 140, 170, 190, 200], // Adjusted data to somewhat match the dashed black line trend up to July
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 flex flex-col xl:flex-row">
      {/* Left Chart Section */}
      <div className="w-full xl:w-3/4 bg-[#f5f7fa] rounded-2xl dark:bg-[#161e2e] px-2">
        <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">

          <div className="flex items-center flex-wrap w-full gap-3 sm:justify-between overflow-hidden">
            <div className="">
              <ChartTab />
            </div>
            <div className="flex items-center space-x-2">
              <span className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6699FF] mr-1.5"></span>
                Current Week
              </span>
              <span className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                <span className="w-2.5 h-2.5 rounded-full border border-gray-500 bg-transparent mr-1.5 border-dashed"></span>
                Previous Week
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-full overflow-x-auto custom-scrollbar">
          <div className=""> {/* Adjust min-width if needed */}
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              height={310}
            />
          </div>
        </div>
      </div>

      {/* Right Sidebar Section - Traffic by Website */}
      <div className="w-full xl:w-1/4 xl:ml-6 mt-6 xl:mt-0 p-4 bg-[#f5f7fa] dark:bg-[#161e2e] rounded-2xl border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-4">
          Traffic by Website
        </h3>
        <div className="space-y-4">
          {["Google", "YouTube", "Instagram", "Pinterest", "Facebook", "Twitter", "Tumblr"].map((site, index) => (
            <div key={site} className="flex items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300 w-20">{site}</span>
              <div className="flex-grow bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                {/* Adjust width based on actual traffic data if available */}
                <div
                  className={`h-2 rounded-full ${site === "Instagram" ? "bg-black" : "bg-gray-400 dark:bg-gray-500"}`}
                  style={{ width: `${site === "Instagram" ? "60%" : (100 / (index + 2)) + "%"}` }} // Example widths
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}