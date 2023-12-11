import "./Home.css";
import OldMan from "../../assests/OldMan.png";
import LikeIcon from "../../assests/LikeIcon.svg";
import Icon from "../../assests/icon.svg";
import Item from "../../assests/item.svg";
import Virtual from "../../assests/Virtual.svg";
import Item3 from "../../assests/item3.svg";
import Item4 from "../../assests/item4.svg";
import Item5 from "../../assests/item5.svg";
import Icons1 from "../../assests/icons1.svg";
import Heart from "../../assests/Heart.svg";
 import Env from "../../assests/Env.svg";
import Icons4 from "../../assests/icons4.svg";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="left-side">
          <div className="left-side-container">
            <div className="old-img-container">
              <img className="old-img" src={OldMan} />
              <img src={LikeIcon} className="like-img" />
            </div>
            <button>Add to cart</button>
            <button className="book-btn">Book Now</button>
          </div>
        </div>

        <div className="right-side">
          <p className="para-1">Comprehensive Treatment Protocol</p>

          <div className="para-2">Powered by CancerMitr</div>
          <div className="right-side1">
            <p className="pa-1"> 4.5 </p>
            <p className="pa-2">
              <img className="icon" src={Icon} />
            </p>

            <p className="pa-3">| 104 ratings | 40+ bought in past month</p>
          </div>
          <button className="btn-4">Best seller</button>

          <div className=" para-3">
            <p className="mrp-1"> MRP : ₹8,000 </p>
            <span className="mrp-2"> Plus GST </span>
          </div>

          <hr />
          <div className="third-1">
            <p className="ideal-1">Ideal for</p>
            <ul className="ideal-2">
              <li >
                Cancer patients looking for a comprehensive solution to navigate
                their journey.
              </li>
              <li >
                Individuals not finding the right treatment or feeling
                overwhelmed with fragmented information.
              </li>
              <li>
                Those who believe in the power of holistic therapies alongside
                medical treatments
              </li>
              <li>
                Patients desiring a personalized approach, tailored to their
                unique needs and challenges.
              </li>
            </ul>
          </div>

          <hr />
          <div className="fourth-1">
            <p> Description </p>
            <p className="lor3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
          </div>
          <div className="fifth-1">
            <h3>Inclusions</h3>
            <div className="item-container">
              <img className="item" src={Item} />
              <div className="container-text">
                <p className="item-hed-1"> Dedicated Personal Cancer Coach </p>
                <p className="item-hed-2">
                  Expert guidance at each step of your journey, ensuring clarity
                  and support.
                </p>
              </div>
            </div>
            <div className="item-container">
              <img className="virtual" src={Virtual} />
              <div className="container-text">
                <p className="item-hed-1"> Virtual Consultation </p>
                <p className="item-hed-2">
                  Direct interaction with a medical oncologist to discuss your
                  concerns and understand your condition.
                </p>
              </div>
            </div>

            <div className="item-container">
              <img className="item3" src={Item3} />
              <div className="container-text">
                <p className="item-hed-1"> Holistic Treatment Report </p>
                <p className="item-hed-2">
                  Crafted by a team of 5 specialities: Oncologists, Integrative
                  Medicine Expert, Onco Dietician, Onco Physiotherapist, and
                  Onco Psychologist, personalized to your needs.
                </p>
              </div>
            </div>

            <div className="item-container">
              <img className="item4" src={Item4} />
              <div className="container-text">
                <p className="item-hed-1">Informed Patient Toolkit</p>
                <p className="item-hed-2">
                  Tailored questions for your doctor, along with essential tips
                  & resources, ensuring you’re equipped for every phase.
                </p>
              </div>
            </div>

            <div className="item-container">
              <img className="item5" src={Item5} />
              <div className="container-text">
                <p className="item-hed-1"> Detailed Pre-assessment </p>
                <p className="item-hed-2">
                  Dive into your medical history, lifestyle, family background,
                  and symptoms to ensure the report’s precision.
                </p>
              </div>
            </div>

            <div className="sixth">
              <h3> Benefits </h3>
              <div className="icons-container">
                <img className="icons1" src={Icons1} />
                <div className="icons-text">

                <p className="item-hed-3"> Integrated Approach </p>
                <p className="item-hed-4">
                  A combination of medical expertise and holistic therapies
                  tailored for you.
                </p>
                </div>
                </div>

                <div className="icons-container">
                  <img className="Env" src={Env} />
                  <div className="icons-text">

                  <p className="item-hed-3"> Empowerment </p>
                  <p className="item-hed-4">
                    Equip yourself with knowledge, resources, and tools to take
                    charge.
                  </p>
                </div>
                </div>

                <div className="icons-container">
                  <img className="Heart" src={Heart} />
                  <div className="icons-text">

                  <p className="item-hed-3"> Consistent Support </p>
                  <p className="item-hed-4">
                    Never feel alone or lost with a dedicated coach by your
                    side.
                  </p>
                </div>
                </div>

                <div className="icons-container">
                  <img className="icons4" src={Icons4} />
                  <div className="icons-text">

                  <p className="item-hed-3"> Personalized Care </p>
                  <p className="item-hed-4">
                    Treatment recommendations and resources tailored to your
                    unique needs.
                  </p>
                </div>
                </div>

                <div className="seven">
                  <p className="item-hed-6"> Prerequires </p>
                  <ul>
                    <li>Completed Medical History Form.</li>
                    <li>
                      Recent medical records, including but not limited to
                    </li>
                    <li>Blood routine</li>
                    <li>Scans (CT scan, PET scan, etc.)</li>
                    <li>Biopsy report</li>
                    <li>Histopatholo</li>
                  </ul>
                </div>
          </div>
        </div>
      </div>
      </div>

    </>
  );
};
export default HomePage;
