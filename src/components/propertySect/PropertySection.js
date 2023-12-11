import React from "react";
import Psect1 from "../../images/psect1.jpg";
import Psect2 from "../../images/psect2.jpg";
import Psect3 from "../../images/psect3.jpg";
import Psect4 from "../../images/psect4.jpg";
import "./PropertySection.css";
const propertySection = () => {
  return (
    <>
      <div className="Psect">
        <div className="PsectItem">
          <img src={Psect1} alt="" className="PsectImg" />
          <span className="FpName">Apartment hotel Miasto</span>
          <span className="FpCity">Madrid</span>
          <span className="FpPrice">Starting from $120</span>
          <div className="pRating">
            <button type="">8.9</button> <span>Excellent</span>
          </div>
        </div>
        <div className="PsectItem">
          <img src={Psect2} alt="" className="PsectImg" />
          <span className="FpName">Apartment hotel Miasto</span>
          <span className="FpCity">Madrid</span>
          <span className="FpPrice">Starting from $120</span>
          <div className="pRating">
            <button type="">8.9</button> <span>Excellent</span>
          </div>
        </div>
        <div className="PsectItem">
          <img src={Psect3} alt="" className="PsectImg" />
          <span className="FpName">Apartment hotel Miasto</span>
          <span className="FpCity">Madrid</span>
          <span className="FpPrice">Starting from $120</span>
          <div className="pRating">
            <button type="">8.9</button> <span>Excellent</span>
          </div>
        </div>
        <div className="PsectItem">
          <img src={Psect4} alt="" className="PsectImg" />
          <span className="FpName">Apartment hotel Miasto</span>
          <span className="FpCity">Madrid</span>
          <span className="FpPrice">Starting from $120</span>
          <div className="pRating">
            <button type="">8.9</button> <span>Excellent</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default propertySection;
