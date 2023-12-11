import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Feature from "../feature/Feature";
import PropertyList from "../property/PropertyList";
import PropertySection from "../propertySect/PropertySection";
import MailList from "../mailList/MailList";
import Footer from "../footer/Footer";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Feature />
          <h1 className="homeTitle">browse by Property type</h1>
          <PropertyList />
          <h1 className="homeTitle">homes guests love</h1>
          <PropertySection />
          <MailList />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
