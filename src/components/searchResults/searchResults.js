import React from "react";
//import "./SearchResults.css";

const SearchResults = props =>
  <div className="search-results">
    {props.results.map((res, i) =>
      <div className="panel panel-default" key={i}>
        <div className="panel-heading">
        <h3>{res.snippet}</h3>
        </div>
        <div className="panel-body">
          <a href={res.web_url}>Read more</a>
          <p>{res.pub_date}</p></div>
          <button value={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "SAVE"
              : "UNSAVE"
          }>
           {
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "SAVE"
              : "UNSAVE"
          }
          </button>
      </div>
    )}
  </div>

export default SearchResults;
