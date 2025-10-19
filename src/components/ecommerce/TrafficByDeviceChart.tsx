"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function TrafficByDeviceChart() {
  const options: ApexOptions = {
    colors: [
      "#c7d2fe",
      "#a5b4fc",
      "#312e81",
      "#818cf8",
      "#e0e7ff",
      "#a5b4fc",
    ],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
        borderRadiusApplication: "end",
        distributed: true, // This is key for multi-colored bars
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#6b7280",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `${val}M`,
        style: {
          colors: "#6b7280",
        },
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        }
      }
    },
    legend: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}M Visitors`,
      },
    },
  };

  const series = [
    {
      name: "Traffic",
      data: [18, 22, 19, 24, 8, 22],
    },
  ];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        Traffic by Device
      </h3>
      <div id="traffic-by-device-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
}