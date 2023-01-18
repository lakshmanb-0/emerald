import { Diamond } from "@mui/icons-material";
import React from "react";

function Footer() {
  return (
    <footer className="border-t-2 border-green-500 py-5 bg-black text-stone-400">
      <div className="max-w-[1400px] px-8">
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
        <section className="py-10">
          <h6 className="border-l-2 border-green-500 px-2 mb-3">Short Links</h6>
          <ul className="text-green-500 space-y-1 pl-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Product Gallery</li>
            <li>Our Team</li>
            <li>Feedback</li>
            <li>Contact Us</li>
          </ul>
        </section>
        <section>
          <h6>Gallery</h6>
          <div className="flex items-center">
            <img src={`${require("../Images/footer_1.jpg")}`} alt="" />
            <img src={`${require("../Images/footer_2.jpg")}`} alt="" />
            <img src={`${require("../Images/footer_3.jpg")}`} alt="" />
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
