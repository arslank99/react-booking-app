import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns/esm";
import { useNavigate } from "react-router-dom";
const Header = ({ type }) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setopenOption] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOption = (name, operation) => {
    console.log(name);
    console.log(operation);
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const searchHandle = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <>
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listmodel" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span> Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span> Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span> Car Rental</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span> Attraction</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span> AirPort Taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="header-title">
                A LifeTime of discount? it's Genius
              </h1>
              <p className="header-desc">
                Get rewarded for your travel-unlock instant savings of 10% more
                with a free booking account.
              </p>
              <div className="btnCenter">
                <button type="" className="btnHeader">
                  Sign in / Register
                </button>
              </div>

              <div className="headerSearch">
                <div className="headerSearchItems">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going? "
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItems">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(date[0].startDate, "MM/dd/yy")}  to ${format(
                    date[0].endDate,
                    "MM/dd/yy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                    />
                  )}
                </div>
                <div className="headerSearchItems">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    className="headerSearchText"
                    onClick={() => setopenOption(!openOption)}
                  >
                    {`${options.adults} adults - ${options.children} children - ${options.room} room`}
                  </span>
                  {openOption && (
                    <div className="options">
                      <div className="optionsItem">
                        <span className="optionsText">Adults</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleOption("adults", "i")}
                          >
                            +
                          </button>
                          <span className="optionCountNumber">
                            {options.adults}
                          </span>
                          <button
                            disabled={options.adults <= 1}
                            className="optionCounterBtn"
                            onClick={() => handleOption("adults", "d")}
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div className="optionsItem">
                        <span className="optionsText">Children</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                          <span className="optionCountNumber">
                            {options.children}
                          </span>
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterBtn"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div className="optionsItem">
                        <span className="optionsText">Room</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                          <span className="optionCountNumber">
                            {options.room}
                          </span>
                          <button
                            disabled={options.children <= 1}
                            className="optionCounterBtn"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItems">
                  <button className="btnHeader" onClick={searchHandle}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
