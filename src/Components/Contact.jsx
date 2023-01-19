import { LocalPhone, LocationOn, Mail } from "@mui/icons-material";
import React, { useState } from "react";

function Contact() {
  const [input, setInput] = useState({ name: "", email: "", text: "" });
  const clearAll = () => {
    setInput({ name: "", email: "", text: "" });
  };
  return (
    <main className="bg-black text-white py-10" id="contact">
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
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="E-mail"
            className="bg-transparent text-white border-2 py-1 px-3 border-green-500 outline-none rounded placeholder-stone-400"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <textarea
            name=""
            id=""
            cols="10"
            rows="8"
            placeholder="Your Message"
            className="bg-transparent text-white border-2 py-1 px-3 border-green-500 outline-none rounded placeholder-stone-400 resize-none"
            value={input.text}
            onChange={(e) => setInput({ ...input, text: e.target.value })}
          ></textarea>
          <button
            className="bg-green-500 py-2 text-lg transition duration-200 active:scale-95 "
            onClick={() => clearAll()}
          >
            SUBMIT
          </button>
        </div>
      </section>
    </main>
  );
}

export default Contact;
