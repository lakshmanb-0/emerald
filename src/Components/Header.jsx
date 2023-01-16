import { Diamond, KeyboardArrowDown, LocalShipping } from "@mui/icons-material";
import React from "react";

function Header() {
  return (
    <div>
      <div className="relative">
        {/* nav  */}
        <nav className="items-center py-4 justify-between px-2 md:px-10 bg-green-500 text-white sticky top-0 z-50 lg:flex">
          <div className="flex items-center text-xl md:text-2xl">
            <Diamond fontSize="large" />
            <p className="font-bold ">
              EMERALDS <span className="font-normal">ZAMBIA</span>
            </p>
          </div>
          <ul className="flex items-center space-x-3 md:space-x-10 text-lg font-normal tracking-wider  whitespace-nowrap ">
            <li>Home</li>
            <li>About Us</li>
            <li>Product Gallery</li>
            <li>Our Team</li>
            <li>Feedback</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        {/* background  */}
        <div className="z-0 bg-[url('../Images/header_banner.webp')] bg-center  h-[95vh] w-full   "></div>

        {/* header  */}
        <header className=" flex flex-col justify-center items-center z-20 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-[rgba(0,0,0,0.7)] h-full w-full ">
          <h1 className="  text-green-500 font-bold text-6xl mb-2">
            EMERALDS ZAMBAI
          </h1>
          <h6 className="text-white font-medium text-xl">
            We supply rough Emeralds directly from the Mines
          </h6>
          <button className="bg-green-500 px-4 py-2 rounded-md mt-10 font-medium">
            Contact Us
          </button>
        </header>

        {/* arrow  */}
        <div className="absolute bottom-10 left-2/4 text-green-500 z-20">
          <KeyboardArrowDown sx={{ fontSize: 50 }} />
        </div>
      </div>

      {/* our Priorities  */}
      <section className="bg-stone-900 text-white px-11 py-4 text-center">
        <h1 className="font-bold text-4xl tracking-wider my-5  ">
          Our <span className="text-green-500">Priorities</span>
        </h1>
        <main className="flex my-3 gap-10 justify-center ">
          <div>
            <LocalShipping fontSize="" className="text-6xl" />
            <h1 className="tracking-wider text-2xl font-semibold my-2  ">
              Deliver Expectations
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo eius praesentium voluptas! Saepe nostrum labore
              reiciendis facere error iusto culpa nemo, a hic qui quaerat,
            </p>
          </div>
          <div>
            <LocalShipping fontSize="" className="text-6xl " />
            <h1 className="tracking-wider text-2xl font-semibold my-2  ">
              Deliver Expectations
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo eius praesentium voluptas! Saepe nostrum labore
              reiciendis facere error iusto culpa nemo, a hic qui quaerat,
            </p>
          </div>
          <div>
            <LocalShipping fontSize="" className="text-6xl " />
            <h1 className="tracking-wider text-2xl font-semibold my-2  ">
              Deliver Expectations
            </h1>
            <p className="px-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo eius praesentium voluptas! Saepe nostrum labore
              reiciendis facere error iusto culpa nemo, a hic qui quaerat,
            </p>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Header;
