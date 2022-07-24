import React, { useState } from "react";

import "./App.css";
import logo from "./logo.svg";

import Articles from "./components/Articles";

const App = ({ articles }) => {
    const [sortOrder, setSortOrder] = useState("upvote");

    const getArticles = () => {
        let sortedArticles = articles;
        if (sortOrder === "upvote") sortedArticles.sort((a, b) => (a.upvotes < b.upvotes ? 1 : -1));
        else sortedArticles.sort((a, b) => (a.date < b.date ? 1 : -1));

        return <Articles articles={sortedArticles} />;
    };

    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                Sorting Articles
            </header>
            <div className="App">
                <div className="Articles-button">
                    <span className="mr-4">SORT BY</span>
                    <button
                        className="btn btn-success mr-4"
                        onClick={() => {
                            setSortOrder("upvote");
                        }}
                    >
                        Most Upvoted
                    </button>
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            setSortOrder("date");
                        }}
                    >
                        Most Recent
                    </button>
                </div>
            </div>
            {getArticles()}
        </div>
    );
};

export default App;
