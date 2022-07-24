import React from "react";

import "../App.css";

const Articles = ({ articles }) => {
    return (
        <div>
            <div className="card w-50 mx-auto Article-Table ">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Upvotes</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article, idx) => (
                            <tr key={idx}>
                                <td>{article.title}</td>
                                <td>{article.upvotes}</td>
                                <td>{article.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Articles;
