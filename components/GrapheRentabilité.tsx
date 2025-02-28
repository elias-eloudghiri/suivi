import { AreaChart, ScaleTypes } from "@carbon/charts-react";
import React from "react";
import "@carbon/charts/styles.css";

const data = [
    { group: "uv", date: new Date(2023, 0, 1), value: 4000 },
    { group: "pv", date: new Date(2023, 0, 1), value: 2400 },
    { group: "uv", date: new Date(2023, 1, 1), value: 3000 },
    { group: "pv", date: new Date(2023, 1, 1), value: 1398 },
    { group: "uv", date: new Date(2023, 2, 1), value: 2000 },
    { group: "pv", date: new Date(2023, 2, 1), value: 9800 },
    { group: "uv", date: new Date(2023, 3, 1), value: 2780 },
    { group: "pv", date: new Date(2023, 3, 1), value: 3908 },
    { group: "uv", date: new Date(2023, 4, 1), value: 1890 },
    { group: "pv", date: new Date(2023, 4, 1), value: 4800 },
    { group: "uv", date: new Date(2023, 5, 1), value: 2390 },
    { group: "pv", date: new Date(2023, 5, 1), value: 3800 },
    { group: "uv", date: new Date(2023, 6, 1), value: 3490 },
    { group: "pv", date: new Date(2023, 6, 1), value: 4300 },
    { group: "uv", date: new Date(2023, 7, 1), value: 2000 },
    { group: "pv", date: new Date(2023, 7, 1), value: 9800 },
    { group: "uv", date: new Date(2023, 8, 1), value: 2780 },
    { group: "pv", date: new Date(2023, 8, 1), value: 3908 },
    { group: "uv", date: new Date(2023, 9, 1), value: 1890 },
    { group: "pv", date: new Date(2023, 9, 1), value: 4800 },
    { group: "uv", date: new Date(2023, 10, 1), value: 2390 },
    { group: "pv", date: new Date(2023, 10, 1), value: 3800 },
    { group: "uv", date: new Date(2023, 11, 1), value: 3490 },
    { group: "pv", date: new Date(2023, 11, 1), value: 4300 },
];

const options = {
    title: "Graphe de rentabilité",
    axes: {
        bottom: {
            title: "Mois",
            mapsTo: "date",
            scaleType: ScaleTypes.TIME,
        },
        left: {
            title: "Valeur",
            mapsTo: "value",
            stacked: true,
        },
    },
    height: "400px",
    color: {
        gradient: {
            enabled: true,
        },
    },
    points: {
        enabled: false,
    },
    legend: {
        enabled: false,
    },
};

const GrapheRentabilité = () => {
    return <AreaChart data={data} options={options} />;
};

export default GrapheRentabilité;
