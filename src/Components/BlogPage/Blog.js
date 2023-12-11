import React from "react";
import "./Blog.css";
import Drop from "../../assests/Drop.svg";
import Star from "../../assests/Star.svg";
import User from "../../assests/User.svg";
import Rating from "../../assests/Rating.svg";

const Blog = () => {
  return (
    <div className="container2">
      <div className="head">
        Frequently asked <span> questions</span>
      </div>
      <div className="head-1">
        Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </div>
      <div className="dropdown-1">
        <div className="item">
          <p>How will this card help me?</p>
          <img className="Drop-img" src={Drop} />
        </div>

        <div className="item">
          <p>How will this card help me financially?</p>
          <img className="Drop-img" src={Drop} />
        </div>

        <div className="item">
          <p>How should i contact cancer guru?</p>
          <img className="Drop-img" src={Drop} />
        </div>

        <div className="item">
          <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img className="Drop-img" src={Drop} />
        </div>

      </div>
    </div> 

  );
};

export default Blog;
