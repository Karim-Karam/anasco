"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

export default function TrafficByLocationChart() {
    const chartData = [
        { name: "United States", value: 38.6, color: "#312e81" },
        { name: "Canada", value: 22.5, color: "#a7f3d0" },
        { name: "Mexico", value: 30.8, color: "#a5b4fc" },
        { name: "Other", value: 8.1, color: "#bae6fd" },
    ];

    const options: ApexOptions = {
        chart: {
            type: "donut",
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 0,
        },
        colors: chartData.map((item) => item.color),
        labels: chartData.map((item) => item.name),
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "75%",
                },
            },
        },
        legend: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: (val: number) => `${val}%`,
            },
        }
    };

    const series = chartData.map((item) => item.value);

    return (
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Traffic by Location
            </h3>
            <div className="mt-4 flex items-center justify-between gap-8">
                <div className="h-48 w-48">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="donut"
                        height={220}
                    />
                </div>
                <div className="flex w-full flex-col gap-4">
                    {chartData.map((item) => (
                        <div key={item.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-800 dark:text-white/90">
                                {item.value}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}