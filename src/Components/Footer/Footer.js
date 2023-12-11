import React from "react";
import "./Footer.css";
import Companylogo from "../../assests/Layer_1.svg";
import Facebook from "../../assests/Facebook.svg";
import Youtube from "../../assests/youtube.svg";
import Instragram from "../../assests/instragram.svg";
import Twitter from "../../assests/Cross.svg";
import Linkedln from "../../assests/indeed.svg";

 
 
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="logo">
          <img src={Companylogo} alt="companylogo" />
          <p className="paragraph-2">
            B-302, Dipti Clasic, Suren Road, Off Sir M.V Road, Near Western
            Express Highway Metro Station, Andheri East, Mumbai 400093.
          </p>
          <p className="paragraph-7"> Email: hello@cancermitr.com </p>

          <p className="paragraph-7">Bangladesh: bangladesh@cancermitr.com </p>
          <p className="paragraph-7"> Africa: africa@cancermitr.com</p>
          <p className="paragraph-7"> Call us: +91 7718819099 </p>
        </div>

        <div className="footer-container2">
          <h3> Services </h3>
          <ul>
            <li>Diagnostics</li>
            <li>Supportive Therapies</li>
            <li>Medical Stay</li>
            <li>Discounted Medicines</li>
            <li> Preventive Health </li>
          </ul>
          <p> View all services </p>
        </div>
        <div className="footer-container3">
          <h3> Company </h3>
          <ul>
            <li>About Us</li>
            <li>Our Partners</li>
            <li>Careers</li>
            <li>Become a Partner</li>
            <li> Contact us </li>
          </ul>
          <p> Get in touch </p>
        </div>
        <div className="footer-container4">
          <h3> Let us help you </h3>
          <ul>
            <li>Treatment</li>
            <li>Walk with us</li>
            <li>Second Opinion</li>
            <li>Blogs</li>
            <li> Help </li>
          </ul>
          <p> Get a Treatment plan </p>
        </div>
      </div>

      <div className="footer-container5">
        <div className="item1-container">
          <ul>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
            <li>Cancellation & Return Policy</li>
            <li> Copywrite @ 2023 by CancerMitr.</li>
          </ul>
        </div>
        <div className="item2-container">
          <img src={Facebook} className="facebook-img"  /> 
          <img src={Youtube} className="youtube-img"   />
          <img src={Instragram} className="instragram-img"   />
          <img src={Twitter} className="twitter-img"   />
          <img src={Linkedln} className="Linedln-img"   />

        </div>
      </div>
    </>
  );
};

export default Footer;
