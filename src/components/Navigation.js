import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="font-bold uppercase text-xs grid grid-cols-3">
      <div className="text-left">
        <Link className="mr-16" to="/">Home</Link>
        <Link to="/works">Works</Link>
      </div>
      <div className="text-center">logo</div>
      <div className="text-right">Section</div>
    </div>
  );
};

export default Navigation;