import React from "react";
import Star from "../../assests/Star.svg";
import User from "../../assests/User.svg";
import Drop from "../../assests/Drop.svg";
import Rating from "../../assests/Rating.svg";
import "./Review.css";

const Review = () => {
  return (
    <>
      <div className="rating">
        <div className="rating-1">
          <p className="rate-1">Rate Package :</p>
          <img src={Star} className="Star-img" />
        </div>
        <div className="rating-2">
          <p className="rate2"> Write a review </p>
          <p className="rate3"> Write your review here..... </p>
          <button className="btn67"> Submit </button>
        </div>
      </div>
      <div className="customer-4">
        <div className="customer-rating">
          <div className="customer-rating1">
            <p className="rate6"> Customer ratings</p>
            <img src={Star} className="Star"></img>
            <p className="rate9"> 4.1 out of 5</p>
          </div>
        </div>

        <div className="customer-review">
          <div className="customer-rating2">
            <p> Customer reviews </p>
            <div className="customer-rating3">
              <p className="top1"> Top reviews </p>
              <img className="Drop-img" src={Drop} />
            </div>
          </div>
          <div className="customer-rating4">
            <img className="User-img" src={User} />
            <p className="singh1"> Deepak Singh </p>
          </div>
          <div className="customer-rating5">
            <img className="Rating" src={Rating} />
            <p>4.1 </p>
            <p className="date"> Posted on 06 October 2023 </p>
          </div>
          <p className="para56">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.
          </p>
          <div className="customer-rating4">
            <img className="User-img" src={User} />
            <p> Deepak Singh </p>
          </div>
          <div className="customer-rating5">
            <img className="Rating" src={Rating} />
            <p>4.1 </p>
            <p> Posted on 06 October 2023 </p>
          </div>
          <p className="para56">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.
          </p>
          <div className="customer-rating4">
            <img className="User-img" src={User} />
            <p> Deepak Singh </p>
          </div>
          <div className="customer-rating5">
            <img className="Rating" src={Rating} />
            <p>4.1 </p>
            <p> Posted on 06 October 2023 </p>
          </div>
          <p className="para56">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.
          </p>
          <div className="customer-rating4">
            <img className="User-img" src={User} />
            <p> Deepak Singh </p>
          </div>
          <div className="customer-rating5">
            <img className="Rating" src={Rating} />
            <p>4.1 </p>
            <p> Posted on 06 October 2023 </p>
          </div>

          <p className="para56">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;