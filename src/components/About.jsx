import React from "react";
import Pagelogo from "../assets/images/png/page_logo.png";
import { Row, Col } from "react-bootstrap";
import pic1 from "../assets/images/png/endurance.png";
import pic2 from "../assets/images/png/mobility.png";
import pic3 from "../assets/images/png/speed.png";
import pic4 from "../assets/images/png/stability.png";
import pic5 from "../assets/images/png/straight.png";
import vec1 from "../assets/images/png/upper_vec.png";
import vec2 from "../assets/images/png/lower_vec.png";
const About = ({ p1 }) => {
  const data = [
    {
      h4: "Endurance",
      pera: "A high intensity workout to release dopamine or running incessantly to lose fat leaves out the main role of endurance as a tool to optimize energy so we can think, perform and play with great vitality.",
      pic: pic1,
    },
    {
      h4: "Mobility",
      pera: "Being able to move a joint through its full range of motion without compensating with other neighboring joints is the true measure of joint mobility.",
      pic: pic2,
    },
    {
      h4: "Speed",
      pera: "The Achilles tendon, the largest and strongest tendon in the body, acts like a bow by stretching when our foot hits the ground and then recoiling to propel us forward with speed.",
      pic: pic3,
    },
    {
      h4: "Stability",
      pera: "Muscles are not intrinsically power generators, the amount of force they can produce is highly dependent on a given joint’s position in space.",
      pic: pic4,
    },
    {
      h4: "Stability",
      pera: "Strength is not about growing bigger muscles or engaging daily in challenging workouts but rather to engage the right muscles at the right time with the right degree of contraction to create a harmonious movement with great force.",
      pic: pic5,
    },
  ];
  return (
    <>
      <section className="bg-black border_radius py-5 position-relative">
        <div className="upper_vec">
          <img src={vec1} alt="vec" />
        </div>
        <div className="lower_vec">
          <img src={vec2} alt="vec" />
        </div>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center pt-5 mt-5">
            <img src={Pagelogo} alt="pagelogo" />
            <p className="text-center mb-0 color_white mw_1025 pt-4 ff_poppins fw-normal">
              {p1}
            </p>
            <button className="get_button ff_poppins text-white my-3 fw-medium fs_sm">
              Get in touch
            </button>
          </div>
          <Row className="pt-5">
            {data.map((val, ad) => {
              return (
                <Col md={6} className="p-2">
                  <div className="bg_dark   radius_10 h-100 d-flex flex-column justify-content-between pt_30  ">
                    <div className="px_30">
                      <img src={val.pic} alt="img" />{" "}
                    </div>
                    <h4 className="mb-0 text-white ff_poppins fs_sm pt-3 px_30">
                      {val.h4}
                    </h4>
                    <div className="bg_light radius_bottom_10 ps_30 pb_30">
                      <p className="pt-3 mb-0 color_white ff_poppins   fs_sm mw_493px">
                        {val.pera}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};

export default About;
