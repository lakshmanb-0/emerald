import { FormatQuote, Star } from "@mui/icons-material";
import React from "react";

function Feedback() {
  const data = [
    {
      id: 1,
      image: `${require("../Images/person_1.jpg")}`,
      title: "Anya  Forger ",
      type: "Scientist",
      overview: "",
    },
    {
      id: 2,
      image: `${require("../Images/person_1.jpg")}`,
      title: "Anya  Forger ",
      type: "Scientist",
      overview: "",
    },
    {
      id: 2,
      image: `${require("../Images/person_1.jpg")}`,
      title: "Anya  Forger ",
      type: "Scientist",
      overview: "",
    },
  ];
  return (
    <main
      style={{
        background: `url(${require("../Images/fed_banner.jpg")}) no-repeat center `,
        backgroundSize: "cover",
      }}
      className=" text-white py-10"
    >
      <h1 className="text-center text-5xl font-bold text-white pb-8">
        Client <span className="text-green-500">Feedback</span>
      </h1>
      <section className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((item) => (
          <div className="flex flex-col items-center p-5 bg-black w-fit relative mx-auto overflow-hidden mt-7">
            <img
              src={`${require("../Images/fed_banner.jpg")}`}
              alt="fed_avatar"
              className="rounded-full w-[200px] h-[200px] object-cover select-none"
            />
            <h1 className="font-bold text-3xl mt-3">title</h1>
            <p className="text-green-500 my-3">Scientist</p>
            <div className="flex space-x-2 ">
              <Star className="text-white" sx={{ color: "yellow" }} />
              <Star className="text-white" sx={{ color: "yellow" }} />
              <Star className="text-white" sx={{ color: "yellow" }} />
              <Star className="text-white" sx={{ color: "yellow" }} />
              <Star className="text-white" sx={{ color: "yellow" }} />
            </div>
            <p className="mt-5 text-gray-300 w-[20rem] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              omnis harum, est dignissimos deserunt nemo earum dolor rerum.
            </p>
            <div className="absolute -top-[8%] -right-[8%] bg-green-500 rounded-full p-8">
              <FormatQuote sx={{ fontSize: "3rem" }} className="pt-2" />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Feedback;
