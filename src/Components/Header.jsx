import React, { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <div className="cursor-pointer">Study Destination</div>
      <div className="cursor-pointer">Services</div>
      <div className="cursor-pointer">Company</div>
      <button className="cursor-pointer border-1 py-2 px-4 rounded-md">
        Course Finder
      </button>
    </>
  );
};

const Nav = ({ setIsOpen, isOpen }) => {
  return (
    <div className="flex justify-between items-center mt-4 relative">
      <div>
        <img src="name.svg" className="w-36" />
      </div>
      <div className="md:hidden relative">
        <img
          src="Menu.svg"
          className="cursor-pointer z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-end font-semibold items-center gap-6">
        <NavLinks />
      </div>
    </div>
  );
};

const Intro = () => {
  return (
    <div className="flex flex-col m-auto gap-6 pt-8 pb-16 md:py-12 relative">
      <div className="flex gap-2 justify-center font-semibold">
        <span className="opacity-50">Home</span>
        <span className="-translate-y-1 opacity-50">.</span>
        <span>Pune Branch</span>
      </div>
      <h1>
        {" "}
        KC Overseas Education
        <br />
        Pune
      </h1>
      <p className="w-auto md:w-3xl m-auto">
        We value your career aspirations, which is why we map your preferences
        with the best that our global universities have to offer. Thousands of
        our students are pursuing their programs and aspirations in eminent
        universities globally and we welcome you to pursue yours!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <button className="cursor-pointer bg-linear-to-r from-[#fd9851] to-[#ff6e58] drop-shadow-lg active:drop-shadow-none active:scale-98 rounded-lg inline-block py-3 px-5 font-bold text-lg">
          Enquire Now
        </button>
        <div className="flex justify-center items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer bg-white drop-shadow-lg active:drop-shadow-none active:scale-98">
            <img src="ArrowDown.svg" width={15} />
          </div>
          <div className="text-none">Branch Address</div>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src="Bubble1.svg"
          width={4}
          className="absolute left-[35%] top-[5%] animate-bounce"
        />
        <img
          src="Bubble2.svg"
          width={8}
          className="absolute right-[40%] top-[7%] animate-pulse"
        />
        <img
          src="Star.svg"
          width={10}
          className="absolute right-[10%] top-[18% animate-bounce"
        />
        <img
          src="Star.svg"
          width={10}
          className="absolute left-[20%] top-[23%] animate-pulse"
        />
        <img
          src="Bubble1.svg"
          width={4}
          className="absolute left-[20%] bottom-[25%] animate-pulse"
        />
        <img
          src="Star.svg"
          width={10}
          className="absolute right-[20%] bottom-[15%] opacity-50 animate-pulse"
        />
      </div>
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Mobile Nav */}
      {isOpen && (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[#6C48F0] z-50 text-white">
            <img
              src="Cross.svg"
              className="cursor-pointer z-55 absolute right-4 top-4"
              onClick={() => setIsOpen(!isOpen)}
            />
            <div className="flex flex-col justify-center font-semibold  items-center h-full gap-6">
              <NavLinks />
            </div>
          </div>
        </>
      )}
      <div className="header overflow-hidden">
        <div className="content m-auto text-white">
          <Nav setIsOpen={setIsOpen} isOpen={isOpen} />
          <Intro isOpen={isOpen} />
        </div>
      </div>
    </>
  );
}
