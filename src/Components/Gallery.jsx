import React from "react";

function Gallery() {
  let loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main
      style={{
        backgroundImage: `url(${require("../Images/gallery_banner.jpg")})`,
        backgroundRepeat: "no-repeat",
      }}
      className="relative h-full w-full bg-no-repeat bg-cover "
      id="product gallery"
    >
      <section className=" py-10 max-w-[90rem] flex flex-col items-center justify-center mx-auto  ">
        <h1 className=" z-10 text-center text-5xl font-bold text-white mb-8">
          Product <span className="text-green-500">Gallery</span>
        </h1>
        <div className=" z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8  ">
          {loop.map((value) => (
            <img
              key={value}
              src={require(`../Images/gallery_${value}.jpg`)}
              alt={`gallery ${value}`}
              className={`object-cover w-full h-full rounded-lg ${
                value === 1 || value === 5 ? "row-span-2" : ""
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Gallery;
