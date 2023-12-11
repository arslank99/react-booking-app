import React from "react";
import "./MailList.css";
const MailList = () => {
  return (
    <>
      <div className="mailList">
        <h1 className="mailTitle">Save time Save Money!</h1>
        <span className="mailDesc">
          Sign up and we will send you best deals.
        </span>
        <div className="inputContainer">
          <input type="Search" placeholder="your email..." />
          <button type="submit">Subcribe</button>
        </div>
      </div>
    </>
  );
};

export default MailList;
