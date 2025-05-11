import React from "react";

export default function Footer() {
  return (
    <div className="relative">
      <img
        src="FooterIcon.svg"
        className="absolute left-[15%] md:-top-9 z-10 w-[50px] md:w-[120px]"
      />
      <div className="footer  text-white flex justify-center items-center p-10 pt-12">
        <div>
          <h1>Stay updated with KC Overseas</h1>
          <div className="flex flex-col content md:flex-row justify-center gap-2 md:gap-4 py-10">
            <input
              type="text"
              className="bg-white rounded-lg inline-block py-2 px-5 text-lg text-black"
              placeholder="Email Id"
            />
            <input
              type="text"
              className="bg-white rounded-lg inline-block py-2 px-5 text-lg text-black"
              placeholder="I’m Interested in"
            />
            <button className="cursor-pointer bg-linear-to-r from-[#fd9851] to-[#ff6e58] drop-shadow-lg active:drop-shadow-none active:scale-98 rounded-lg inline-block py-2 px-5 font-bold text-lg text-white ">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
