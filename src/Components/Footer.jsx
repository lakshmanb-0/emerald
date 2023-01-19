import { Diamond } from "@mui/icons-material";
import React from "react";
import { Link } from "react-scroll";

function Footer() {
  const list = [
    "Home",
    "About Us",
    "Product Gallery",
    "Our Team",
    "Feedback",
    "Contact",
  ];
  return (
    <footer className="border-t-2 border-green-500 py-5 bg-black text-stone-400 ">
      <main className="max-w-[1300px] px-10 grid sm:grid-cols-2 lg:grid-cols-4 mx-auto space-y-8 space-x-3 lg:space-y-0">
        <section>
          <div className="text-white flex items-center space-x-1">
            <Diamond fontSize="large" />
            <h1 className="text-3xl font-bold">
              EMERALDS <span className="font-normal">ZAMBIA</span>
            </h1>
          </div>
          <p className="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa
            similique voluptas, iusto consequatur possimus. Facilis repudiandae
            hic porro, autem distinctio rerum voluptas ducimus ipsum?
          </p>
        </section>
        <section className="sm:py-0 ">
          <h6 className="border-l-2 border-green-500 px-2 mb-3">Short Links</h6>
          <ul className="text-green-500 space-y-1 pl-2 flex flex-col">
            {list.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className=" text-gray-200 font-semibold hover:text-green-500"
              >
                {item}
              </Link>
            ))}
          </ul>
        </section>
        <section className="lg:col-span-2  ">
          <h6 className="border-l-2 border-green-500 px-2 mb-3">Gallery</h6>
          <div className="flex flex-col items-center space-x-3 py-2 sm:flex-row w-[10rem]">
            <img
              className="footer_img"
              src={`${require("../Images/footer_1.jpg")}`}
              alt=""
            />
            <img
              className="footer_img"
              src={`${require("../Images/footer_2.jpg")}`}
              alt=""
            />
            <img
              className="footer_img"
              src={`${require("../Images/footer_3.jpg")}`}
              alt=""
            />
          </div>
        </section>
      </main>
    </footer>
  );
}

export default Footer;
