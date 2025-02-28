import { AreaChart, ScaleTypes } from "@carbon/charts-react";
import React from "react";
import "@carbon/charts/styles.css";

const data = [
    { group: "uv", date: new Date(2023, 0, 1), value: 1000 },
    { group: "uv", date: new Date(2023, 1, 1), value: 1500 },
    { group: "uv", date: new Date(2023, 2, 1), value: 1550 },
    { group: "uv", date: new Date(2023, 3, 1), value: 1600 },
    { group: "uv", date: new Date(2023, 4, 1), value: 2000 },
    { group: "uv", date: new Date(2023, 5, 1), value: 4000 },
    { group: "uv", date: new Date(2023, 6, 1), value: 4500 },
    { group: "uv", date: new Date(2023, 7, 1), value: 4600 },
    { group: "uv", date: new Date(2023, 8, 1), value: 4650 },
    { group: "uv", date: new Date(2023, 9, 1), value: 4700 },
    { group: "uv", date: new Date(2023, 10, 1), value: 4720 },
    { group: "uv", date: new Date(2023, 11, 1), value: 4500 },
];

const options = {
    title: "Graphe de sinistres",
    axes: {
        bottom: {
            title: "Mois",
            mapsTo: "date",
            scaleType: ScaleTypes.TIME,
        },
        left: {
            title: "Valeur",
            mapsTo: "value",
            scaleType: ScaleTypes.LINEAR,
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

const GrapheSinistres = () => {
    return <AreaChart data={data} options={options} />;
};

export default GrapheSinistres;
