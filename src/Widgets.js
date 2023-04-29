import { FiberManualRecord, Info } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="wigets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="wigets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newArticle("React is back", "just for test")}
    </div>
  );
};

export default Widgets;
