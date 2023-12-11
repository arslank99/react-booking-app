import React from "react";
import Plist1 from "../../images/plist1.jpg";
import Plist2 from "../../images/plist2.jpg";
import Plist3 from "../../images/plist3.jpg";
import Plist4 from "../../images/plist4.jpg";
import Plist5 from "../../images/plist5.jpg";
import Plist6 from "../../images/plist6.jpg";
import "./PropertyList.css";
const PropertyList = () => {
  return (
    <>
      <div className="pList">
        <div className="PListItem">
          <img src={Plist1} alt="" className="PlistImg" />
          <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 Hotels</h2>
          </div>
        </div>
        <div className="PListItem">
          <img src={Plist2} alt="" className="PlistImg" />
          <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>233 Hotels</h2>
          </div>
        </div>
        <div className="PListItem">
          <img src={Plist3} alt="" className="PlistImg" />
          <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>233 Hotels</h2>
          </div>
        </div>
        <div className="PListItem">
          <img src={Plist5} alt="" className="PlistImg" />
          <div className="pListTitles">
            <h1>Villas</h1>
            <h2>233 Hotels</h2>
          </div>
        </div>
        <div className="PListItem">
          <img src={Plist6} alt="" className="PlistImg" />
          <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 Hotels</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyList;
