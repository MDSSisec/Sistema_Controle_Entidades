"use client"

import { PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, Label } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartRadialText({ concluido = 2, total = 20 }: { concluido?: number, total?: number }) {
  const chartData = [
    { name: "concluido", value: concluido, fill: "#3b82f6" },
    { name: "restante", value: total - concluido, fill: "transparent" }
  ];

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-16 bg-transparent flex items-center justify-center">
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={-270}
        innerRadius={30}
        outerRadius={40}
      >
        <PolarGrid gridType="circle" radialLines={false} stroke="none" />
        <RadialBar dataKey="value" background={false} cornerRadius={20} barSize={8} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-base font-bold"
                    >
                      {concluido}/{total}
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
