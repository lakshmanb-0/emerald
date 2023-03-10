import {
  Close,
  Diamond,
  DiamondOutlined,
  EngineeringOutlined,
  KeyboardArrowDown,
  LocalShippingOutlined,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import headerBanner from "../Images/header_banner.webp";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

function Header() {
  const [hamburger, setHamburger] = useState(false);
  const [nav, setnav] = useState(false);

  // function run on resize
  useEffect(() => {
    let windowWidth = window.innerWidth;
    windowWidth <= 1024 && setHamburger(true);
    window.onresize = function () {
      if (window.innerWidth <= 1024) {
        setHamburger(true);
      } else {
        setHamburger(false);
        setnav(false);
      }
    };
  }, []);

  const list = [
    "Home",
    "About Us",
    "Product Gallery",
    "Our Team",
    "Feedback",
    "Contact",
  ];

  return (
    <div id="home">
      {/* nav  */}
      <nav className="flex items-center py-4 justify-between px-10  bg-green-500 text-white fixed w-full top-0 z-50 ">
        <div className="flex items-center text-xl md:text-2xl">
          <Diamond fontSize="large" />
          <p className="font-bold ">
            EMERALDS <span className="font-normal">ZAMBIA</span>
          </p>
        </div>
        {/* menu icon  */}
        {hamburger && !nav ? (
          <MenuIcon
            onClick={() => setnav(!nav)}
            className="cursor-pointer flex"
          />
        ) : (
          ""
        )}
        {/* close icon  */}
        {nav && (
          <Close onClick={() => setnav(!nav)} className="cursor-pointer flex" />
        )}
        <ul
          className={
            nav
              ? `absolute flex flex-col bg-green-500 top-[4.5rem] right-2 space-y-2 p-3 text-md tracking-wider whitespace-nowrap`
              : `hidden lg:flex items-center md:space-x-8 text-lg font-normal tracking-wider whitespace-nowrap`
          }
        >
          {list.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="font-semibold  hover:text-green-900"
            >
              {item}
            </Link>
          ))}
        </ul>
      </nav>

      <img
        src={headerBanner}
        alt="header_ban"
        className="h-screen w-full relative z-90 object-cover select-none"
      />
      <div className="bg-black/60 absolute top-0 left-0 w-full h-screen" />

      {/* header  */}
      <header className=" flex flex-col justify-center items-center z-20 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]  h-full w-full ">
        <h1 className="  text-green-500 font-bold text-6xl mb-2 text-center">
          EMERALDS ZAMBAI
        </h1>
        <h6 className="text-white font-medium text-xl">
          We supply rough Emeralds directly from the Mines
        </h6>
        <button className="bg-green-500 px-4 py-2 rounded-md mt-10 font-medium">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact Us
          </Link>
        </button>
      </header>

      {/* arrow  */}
      <Link
        to="priorities"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="absolute bottom-10 left-[50%] -translate-x-[50%] text-green-500 z-20 cursor-pointer hover:scale-125 transition duration-100 ease-in "
      >
        <KeyboardArrowDown sx={{ fontSize: 60 }} />
      </Link>

      {/* our Priorities section */}
      <section
        className="bg-stone-900 text-white px-11 py-4 text-center"
        id="priorities"
      >
        <h1 className="section_headings ">
          Our <span className="text-green-500">Priorities</span>
        </h1>
        <div className="flex flex-col my-3 gap-10 justify-center mb-10 lg:flex-row max-w-[80rem] mx-auto">
          <div>
            <LocalShippingOutlined
              fontSize=""
              className="text-6xl text-green-500"
            />
            <h1 className="tracking-wider text-2xl font-semibold my-2  ">
              Deliver on Expectations
            </h1>
            <p className="text-gray-400 leading-6 text-lg ">
              Ensure our existing portfolio delivers on expectations. Survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged
            </p>
          </div>
          <div>
            <DiamondOutlined fontSize="" className="text-6xl  text-green-500" />
            <h1 className="tracking-wider text-2xl font-semibold my-2  ">
              100% Pure Emerald
            </h1>
            <p className="text-gray-400 leading-6 text-lg  ">
              100% Authentic Emeralds. Survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged, remaining essentially unchanged
            </p>
          </div>
          <div>
            <EngineeringOutlined
              fontSize=""
              className="text-6xl  text-green-500"
            />
            <h1 className="tracking-wider text-2xl font-semibold my-2  ">
              Operate With Responsibility
            </h1>
            <p className="px-5 text-gray-400 leading-6 text-lg ">
              Operate With Responsibility on expectations. Survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
