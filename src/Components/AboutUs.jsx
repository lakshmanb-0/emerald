import React from "react";
import aboutImage from "../Images/aboutus.jpg";

function AboutUs() {
  return (
    <main className="px-10 bg-black py-10 ">
      <h1 className="text-center text-5xl font-bold text-white mb-8">
        About <span className="text-green-500">Us</span>
      </h1>
      <div className="flex flex-col justify-center items-center gap-8 lg:flex-row mb-10 max-w-[90%] mx-auto">
        <div className="text-gray-300 md:w-[45rem] text-xl leading-8 ">
          Improving the quality and value of our business is a focus for
          Emeralds Zambia. Our team of highly-skilled geologists is dedicated to
          growing our exploration and development pipeline, with a focus on
          politically stable and proven Emerald-producing regions where projects
          and mines can drive the future of our business. We continue to commit
          significant resources to our exploration program.
          <br /> <br /> Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          <br /> <br /> Sydney College in Virginia, looked up one of the more
          obscure Latin.
        </div>
        <div className="md:h-[25rem]">
          <img
            src={aboutImage}
            alt="AboutImage"
            className="object-cover h-full rounded-2xl w-full"
          />
        </div>
      </div>

      <section className="flex items-center justify-evenly flex-wrap">
        <div className="bg-green-500 flex flex-col items-center rounded px-3 w-42 py-2 mb-8  ">
          <h1 className="text-3xl lg:text-4xl font-bold">60+</h1>
          <p className=" text-white tracking-wide lg:text-xl">
            Years of Experience
          </p>
        </div>
        <div className="bg-green-500 flex flex-col items-center rounded px-3 w-42 py-2 mb-8 ">
          <h1 className="text-3xl lg:text-4xl font-bold ">200+</h1>
          <p className=" text-white tracking-wide lg:text-xl">Happy Client</p>
        </div>
        <div className="bg-green-500 flex flex-col items-center rounded px-3 w-42 py-2 mb-8 ">
          <h1 className="text-3xl lg:text-4xl font-bold ">30+</h1>
          <p className=" text-white tracking-wide lg:text-xl">Team Member</p>
        </div>
        <div className="bg-green-500 flex flex-col items-center rounded px-3 w-42 py-2 mb-8 ">
          <h1 className="text-3xl lg:text-4xl font-bold ">5+</h1>
          <p className=" text-white tracking-wide lg:text-xl">Emerald's Mine</p>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
