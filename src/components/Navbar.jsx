import React, { Children } from "react";
import Logo from "../assets/images/png/Logo.png";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = ({ b, bg, d, Dropdown, arrow, children }) => {
  const [show, setshow] = useState(true);
  function showNav() {
    setshow(!show);
  }
  if (!show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <nav className={`py-4 ${bg}`}>
        <Container>
          <div className="d-flex align-items-center justify-content-between ">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div>
              <ul className="d-lg-flex align-items-center d-none ">
                <li>
                  <a href="#">
                    Home <img src={Dropdown} alt="dropdown" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    About <img src={Dropdown} alt="dropdown" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Work <img src={Dropdown} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    {d}
                    <img src={arrow} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">{b}</a>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
            <div className="d-lg-flex d-none align-items-center ">
              <botton className={`button1 me-3  ${bg}`}>Cart</botton>
              <botton className="button2 ">All Pages</botton>
            </div>
            <div className=" d-lg-none lg-pos z_999" onClick={showNav}>
              <h2 className="fs_xl text-white">
                {show ? <HiMenuAlt1 /> : <AiOutlineClose />}
              </h2>
            </div>
            <ul
              className={`d-flex gap-4 mb-0 sm_nav mb-0 ps-0 d-lg-none ${
                show ? "" : "start-0"
              }`}
            >
              <li>
                <a href="#">
                  Home <img src={Dropdown} alt="dropdown" />
                </a>
              </li>
              <li>
                <a href="#">
                  About <img src={Dropdown} alt="dropdown" />
                </a>
              </li>
              <li>
                <a href="#">
                  Work <img src={Dropdown} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  {d}
                  <img src={arrow} alt="" />
                </a>
              </li>
              <li>
                <a href="#">{b}</a>
                <a href="#"></a>
              </li>
              <botton className={`button1   ${bg}`}>Cart</botton>
              <botton className="button2 ">All Pages</botton>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
