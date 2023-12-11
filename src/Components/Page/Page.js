import React from 'react';
import "./Page.css";
import OldMan from  "../../assests/OldMan.png";
import Mother from   "../../assests/Mother.png";
import Yoga from   "../../assests/Yoga.png";
import Arrow from   "../../assests/Arrow.svg";


const Page = () => {
  return (
    <div className='img-container'>
      <div className='img'>
        <img src={OldMan} className='IMAGES' />
        <p>Comprehensive Treatment Protocol</p>
        <p>₹ 8,000</p>
      </div>
      <div className='img'>
        <img src={Mother} className='IMAGES' />
        <p>Comprehensive Treatment Protocol</p>
        <p>₹ 5,000</p>
      </div>
      <div className='img'>
        <img src={Yoga}  className='IMAGES'/>
        <p>Lung package</p>
        <p>₹ 8,000</p>
      </div>
      <div className='img img4'>
        <img src={OldMan}  className='IMAGES'/>
        <p>Comprehensive Treatment Protocol</p>
        <p>₹ 5,000</p>
        <span><img src={Arrow} /></span>
      </div>
    </div>
  )
}

export default Page