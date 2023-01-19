import { FormatQuote, Star } from "@mui/icons-material";
import React from "react";

function Feedback() {
  const data = [
    {
      id: 1,
      image: `${require("../Images/fed_1.jpg")}`,
      title: "The Rock ",
      type: "Wrestler",
      overview:
        "It was a good material I purchased at that rate. It was a worthy deal. Only gem cutting needs more concern.",
    },
    {
      id: 2,
      image: `${require("../Images/fed_2.jpg")}`,
      title: "Salman Boi ",
      type: "All Rounder",
      overview:
        "Wearing an emerald gives strength to the planet Mercury located in the person's horoscope",
    },
    {
      id: 3,
      image: `${require("../Images/fed_3.jpg")}`,
      title: "Ajey Nagar",
      type: "Youtuber",
      overview:
        "Excellent gemstone at such a reasonable price. Superb quality and finish.",
    },
  ];
  return (
    <main
      style={{
        background: `url(${require("../Images/fed_banner.jpg")}) no-repeat center `,
        backgroundSize: "cover",
      }}
      className=" text-white py-10"
      id="feedback"
    >
      <h1 className="section_headings">
        Client <span className="text-green-500">Feedback</span>
      </h1>
      <section className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((item) => (
          <div
            className="flex flex-col items-center p-5 bg-black w-fit relative mx-auto overflow-hidden mt-7"
            key={item.id}
          >
            <img
              src={item.image}
              alt="fed_avatar"
              className="rounded-full w-[200px] h-[200px] object-cover select-none"
            />
            <h1 className="font-bold text-3xl mt-3">{item.title}</h1>
            <p className="text-green-500 my-3">{item.type}</p>
            <div className="flex space-x-2 ">
              <Star className="text-white" sx={{ color: "yellow" }} />
              <Star className="text-white" sx={{ color: "yellow" }} />
              <Star className="text-white" sx={{ color: "yellow" }} />
              <Star className="text-white" sx={{ color: "yellow" }} />
              <Star className="text-white" sx={{ color: "yellow" }} />
            </div>
            <p className="mt-5 text-gray-300 w-[18rem] ">{item.overview}</p>
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
