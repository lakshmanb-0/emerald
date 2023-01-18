import { LocalPhone, LocationOn, Mail } from "@mui/icons-material";
import React from "react";

function Contact() {
  return (
    <main className="bg-black text-white py-10">
      <h1 className="text-center text-5xl font-bold text-white pb-8">
        Contact <span className="text-green-500">Us</span>
      </h1>
      <section className="px-9 grid lg:grid-cols-2 mx-auto max-w-7xl gap-8">
        <div>
          <div className="text-stone-400 text-lg space-y-3 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in
              quia quo repellendus minima exercitationem architecto quidem
              corporis nesciunt. Sequi eveniet corporis provident optio.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
              eveniet ipsa. Voluptatibus neque, assumenda repellendus labore
              quod ipsa corrupti esse nostrum maiores, excepturi eveniet?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              consectetur dicta similique velit nesciunt magni.
            </p>
          </div>
          <div className="space-y-3 my-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-500 rounded-full p-1 flex ">
                <LocalPhone />
              </div>
              <p className="text-md">78597465165, 78459587584</p>
            </div>
            <div className="flex items-center gap-3 ">
              <div className="bg-green-500 rounded-full p-1 flex ">
                <Mail />
              </div>
              <p>Emerald@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-500 rounded-full p-1 flex ">
                <LocationOn />
              </div>
              <p>Local City, Mumbai, India</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent text-white border-2 py-1 px-3 border-green-500 outline-none rounded placeholder-stone-400"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="E-mail"
            className="bg-transparent text-white border-2 py-1 px-3 border-green-500 outline-none rounded placeholder-stone-400"
          />
          <textarea
            name=""
            id=""
            cols="10"
            rows="8"
            placeholder="Your Message"
            className="bg-transparent text-white border-2 py-1 px-3 border-green-500 outline-none rounded placeholder-stone-400 resize-none"
          ></textarea>
          <button className="bg-green-500 py-2 text-lg transition duration-200 active:scale-95 ">
            SUBMIT
          </button>
        </div>
      </section>
    </main>
  );
}

export default Contact;
