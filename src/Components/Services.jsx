import React from "react";

const CardItems = [
  {
    iconSrc: "FingerOrange.svg",
    text: "Test Preparing & Caching",
  },
  {
    iconSrc: "Application.svg",
    text: "Application Assistance",
  },
  {
    iconSrc: "CircleTick.svg",
    text: "Education Loans & Fee Payments",
  },
  {
    iconSrc: "Insaurance.svg",
    text: "Insaurance, Forex & Travel Assistance",
  },
];

const Ambitions = [
  "Virtual & In Person Coaching and Counselling",
  "Comprehensive Assistance for Applications, Admissions & Visas",
  "High Value Scholarships and Study Loans",
];

const Card = ({ iconSrc, text }) => {
  return (
    <div className="flex justify-start gap-2 drop-shadow-lg bg-white p-3 px-6 rounded-md w-full">
      <img src={iconSrc} width={18} />
      <p>{text}</p>
    </div>
  );
};

export default function Services() {
  return (
    <div className="content my-20">
      <h1>Services we provide</h1>
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 m-auto mt-5 gap-4 max-w-[1000px]">
        {CardItems.map((item, idx) => (
          <Card {...item} key={`service_card_${idx}`}/>
        ))}
      </div>
      <button className="my-6 cursor-pointer bg-linear-to-r from-[#fd9851] to-[#ff6e58] drop-shadow-lg active:drop-shadow-none active:scale-98 rounded-lg inline-block py-3 px-5 font-bold text-lg text-white my-20">
        Enquire Now
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-end gap-10 mb-20">
        {/* Image */}
        <div className="relative">
          <img
            src="Pep1.png"
            width={450}
            height={400}
            className="rounded-md cover"
          />
          <div className="absolute -left-[7%] -top-[7%] bg-[#ffe7c8] -z-1 rounded-md w-[90%] h-[90%] md:w-[450px] md:h-[400px]"></div>
        </div>

        {/* Points */}
        <div className="flex flex-col gap-4 justify-center items-start text-left">
          <h2 className="text-center md:text-left">Realize your global ambitions with us</h2>
          <p>
            With a keen ear for your choices and preferences, our counselling
            experience is so seamless that you will land in your dream
            university even before you do!
          </p>
          <div className="flex flex-col gap-4 text-left">
            {Ambitions.map((ambition, idx) => (
              <div className="flex gap-4" key={`service_ambition_${idx}`}>
                <div className="rounded-full w-[25px] h-[25px] bg-white drop-shadow-lg flex justify-center">
                  <img src="OrangeStar.svg" width={10} />
                </div>
                <span>
                  {ambition}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
