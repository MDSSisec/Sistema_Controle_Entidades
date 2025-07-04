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
  const percent = Math.max(0, Math.min(1, concluido / total));
  const angle = 360 * percent;
  const startAngle = 90;
  const endAngle = 90 - angle;
  const chartData = [
    { name: "progresso", value: 100, fill: "#3b82f6" }
  ];

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-28 bg-transparent flex items-center justify-center">
      <RadialBarChart
        data={chartData}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={40}
        outerRadius={60}
      >
        <PolarGrid gridType="circle" radialLines={false} stroke="none" />
        <RadialBar dataKey="value" background={false} cornerRadius={20} barSize={6} />
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
                      className="fill-foreground text-lg font-bold"
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
