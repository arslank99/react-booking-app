import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Result from "./Result";
import "./Hotel.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns/esm";
const Hotel = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  console.log(location);
  return (
    <>
      <div>
        <Navbar />
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="listTitle">Search</h1>
              <div className="listItem">
                <label htmlFor="">Destination</label>
                <input type="text" placeholder={destination} />
              </div>
              <div className="listItem">
                <label htmlFor="">Check-in Date</label>
                <span>{`${format(date[0].startDate, "MM/dd/yy")}  to ${format(
                  date[0].endDate,
                  "MM/dd/yy"
                )}`}</span>
              </div>
              <div className="listItem">
                <div className="PadOption">
                  <label htmlFor="">Options</label>
                  <div className="ItemOption">
                    <span className="IsOptionText">
                      Min Price <small>per night</small>
                    </span>
                    <input type="number" className="OptionInput" />
                  </div>
                  <div className="ItemOption">
                    <span className="IsOptionText">
                      Max Price <small>per night</small>
                    </span>
                    <input type="number" className="OptionInput" />
                  </div>
                  <div className="ItemOption">
                    <span className="IsOptionText">Adults</span>
                    <input type="number" min={1} className="OptionInput" />
                  </div>
                  <div className="ItemOption">
                    <span className="IsOptionText">Children</span>
                    <input type="number" min={0} className="OptionInput" />
                  </div>
                  <div className="ItemOption">
                    <span className="IsOptionText">Room</span>
                    <input type="number" min={1} className="OptionInput" />
                  </div>
                </div>
              </div>
              <button>Search</button>
            </div>
            <div className="listReslt">
              <Result />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
