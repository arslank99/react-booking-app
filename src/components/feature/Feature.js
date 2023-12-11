import React from "react";
import View1 from "../../images/view1.jpg";
import View2 from "../../images/view2.jpg";
import View3 from "../../images/view3.jpg";
import "./Feature.css";
const Feature = () => {
  return (
    <>
      <div className="featured">
        <div className="featuredItem">
          <img src={View1} alt="" className="featureImg" />
          <div className="featuredTitle">
            <h1>Dublin</h1>
            <h2>123 Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img src={View2} alt="" className="featureImg" />
          <div className="featuredTitle">
            <h1>Austin</h1>
            <h2>532 Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img src={View3} alt="" className="featureImg" />
          <div className="featuredTitle">
            <h1>Reno</h1>
            <h2>543 Properties</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
