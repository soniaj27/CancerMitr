import React from "react";
import Icons6 from "../../assests/icons6.svg";
import "./Section.css";
const Section = () => {
  return (
    <>
      <div className="main-sec">
        <div className="main-sec4">
          <img className="icons6" src={Icons6} />
          <div className="main-sec1">
            <p className="para7">Lead generation/enquiry section</p>
            <p className="para8">
              Norem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <button className="btn-8">Continue</button>
      </div>
    </>
  );
};

export default Section;
