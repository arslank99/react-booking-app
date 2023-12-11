import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MailList from "../mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../images/Hoteldata";
import "./Hotels.css";
const Hotels = () => {
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(false);

  const slideHandler = (index) => {
    setSlide(index);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let NewSliderNumber;
    if (direction === "l") {
      NewSliderNumber = slide === 0 ? 5 : slide - 1;
    } else {
      NewSliderNumber = slide === 5 ? 0 : slide + 1;
    }
    setSlide(NewSliderNumber);
  };
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="HotelContainer">
        {open && (
          <div className="Slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="cross"
              onClick={() => {
                setOpen(false);
              }}
            />
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="SlideWrapper">
              <img src={images[slide].src} alt="" />
            </div>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="HotelWrapper">
          <button className="Booknow">Reserve or Book now!</button>
          <h1 className="HotelTitle">Grand Hotel</h1>
          <div className="HotelAddress">
            <FontAwesomeIcon icon={faLocation} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="HotelDistance">
            Excellent Location - 500m from center
          </span>
          <span className="HotelPriceHighlight">
            book a stay over $114 at this property and get free airport taxi.
          </span>
          <div className="ImagesBox">
            {images.map((item, index) => (
              <div key={index} className="HotelImages">
                <img
                  src={item.src}
                  alt=""
                  className="ImageWrapper"
                  onClick={() => slideHandler(index)}
                />
              </div>
            ))}
          </div>
          <div className="HotelDetails">
            <div className="HotelText">
              <h1 className="HotelTitle">Stay in the Heart of Krakow</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="HotelPrice">
              <h1>Perfect for 9-night stay !</h1>
              <span>
                Located in the real heart of Krakow ,this property has an
                Excellent location score of 9.8!{" "}
              </span>
              <h2>
                <strong>$945</strong> (9-night)
              </h2>
              <button type="">Reserve or book now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Hotels;
