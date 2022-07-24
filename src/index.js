import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ARTICLES = [
    {
        title: "Scaling to 100k Users",
        upvotes: 72,
        date: "2019-01-21",
    },
    {
        title: "A message to our customers",
        upvotes: 12,
        date: "2020-01-24",
    },
    {
        title: "Aplhabet earnings",
        upvotes: 22,
        date: "2019-11-23",
    },
    {
        title: "Simple text editor has 15k monthly Users",
        upvotes: 7,
        date: "2010-12-31",
    },
    {
        title: "What's SAP",
        upvotes: 1,
        date: "2019-11-21",
    },
    {
        title: "the Emu War",
        upvotes: 24,
        date: "2019-10-21",
    },
    {
        title: "Artifical Mountains",
        upvotes: 2,
        date: "2019-11-22",
    },
];
root.render(
    <React.StrictMode>
        <App articles={ARTICLES} />
    </React.StrictMode>,
);
