import React, { useState } from "react";

const items = [
  {
    no: 1,
    icon: "Circles3.svg",
    iconBgColor: "#FDC98D",
    title: "Counselling",
    desc: "Plan your Academic and Career Goals",
  },
  {
    no: 2,
    icon: "Circles3.svg",
    iconBgColor: "#D3D5DB",
    title: "Test Preparation",
    desc: "Appear for Standardized Tests",
  },
  {
    no: 3,
    icon: "Circles3.svg",
    iconBgColor: "#ff6e58",
    title: "Examination",
    desc: "Appear for Exam",
  },
];

const Card = ({ no, icon, iconBgColor, title, desc, activeNo }) => {
  return (
    <div className="" key={no}>
      <div className="w-[440px] h-[360px] relative">
        <div className={`w-[45px] h-[45px] ${activeNo == no ? "bg-white drop-shadow-lg" : "bg-[#dbd9ff] border border-[#b7b6d8] text-[#b7b6d8]"} rounded-full absolute left-[50%] -translate-x-1/2 flex justify-center items-center`}>
          {no}
        </div>
        <div className="drop-shadow-lg">
          {/* card pointer */}
          <div
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            className="w-[40px] h-[27px] bg-white absolute top-[80px] left-[50%] -translate-x-1/2"
          />
          {/* Card Contend */}
          <div className="w-[440px] h-[260px] bg-white absolute top-[100px] left-[50%] -translate-x-1/2 rounded-lg flex flex-col justify-start items-center">
            {/* Icon */}
            <div className="relative">
              <img
                src={icon}
                width={40}
                height={40}
                className="translate-x-3/4 translate-y-3/4"
              />
              <div
                className="w-[100px] h-[50px] rounded-t-full"
                style={{ backgroundColor: iconBgColor }}
              />
            </div>
            {/* Text */}
            <h2 className="mt-8">{title}</h2>
            <p className="mt-5 text-sm">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Steps() {
  const [activeNo, setActiveNo] = useState(1);

  const handleChange = (action) => {
    if (activeNo + action > 0 && activeNo + action <= items.length)
      setActiveNo(activeNo + action);
  };

  return (
    <div>
      <div className="bg-[#dbd9ff] py-10 overflow-hidden relative">
        <div className="hidden md:block z-1 absolute left-0 top-0 w-[350px] h-full bg-linear-to-r from-[#dbd9ff] to=[]" />
        <div className="flex flex-col gap-10">
          <h1 className="z-2">7 Easy Steps to Land in your Dream University</h1>
          <div className="relative md:mt-10">
            <div
              className="relative w-[100vw] transition-position ease-out duration-250"
              style={{ left: `calc(50% - ${220 + 490 * (activeNo - 1)}px)` }}
            >
              <div
                className="border relative top-[25px] left-[220px] border-dashed border-[#64647A] opacity-30"
                style={{ width: `${(items.length - 1) * 490}px` }}
              />
              <div className="flex gap-[50px]">
                {items.map((item) => (
                  <Card {...item} activeNo={activeNo} key={`steps_card_${item.no}`}/>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-12 justify-center items-center font-semibold text-[#FF7361] select-none">
            <div className="cursor-pointer" onClick={() => handleChange(-1)}>
              &lt; &nbsp; Previous Step
            </div>
            <div className="cursor-pointer" onClick={() => handleChange(1)}>
              Next Step &nbsp; &gt;
            </div>
          </div>
        </div>
        <div className="hidden md:block z-1 absolute right-0 top-0 w-[350px] h-full bg-linear-to-l from-[#dbd9ff]" />
      </div>
    </div>
  );
}
