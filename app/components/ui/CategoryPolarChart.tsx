// components/CategoryPolarChart.tsx
"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const data = {
    labels: ["Coffee", "Pastry", "Specialty", "Food"],
    datasets: [
        {
            data: [18, 9, 7, 14],
            backgroundColor: [
                "#18181B", // zinc-900 — Coffee
                "#D97706", // amber — Pastry
                "#A1A1AA", // zinc-400 — Specialty
                "#F4F4F5", // zinc-100 — Food
            ],
            borderColor: [
                "#18181B",
                "#D97706",
                "#A1A1AA",
                "#E4E4E7",
            ],
            borderWidth: 0,
        },
    ],
};

export default function CategoryPolarChart() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        chartRef.current = new Chart(canvasRef.current, {
            type: "doughnut",
            data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                },
                cutout: "40%",
            },
        });
        return () => {
            chartRef.current?.destroy();
        };
    }, []);

    return <canvas ref={canvasRef} />;
}