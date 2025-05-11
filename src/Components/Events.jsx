import React from "react";

const Card = ({ img, title, date, desc, flexDir }) => {
  return (
    <div className={`flex flex-col md:flex-${flexDir} rounded-lg bg-white drop-shadow-lg md:h-full min-w-md mb-4 mx-4 md:mx-0`}>
      <img src={img} className="h-[200px] md:h-auto"/>
      <div className="text-left flex flex-col gap-4 p-4 px-6 justify-center">
        <div className="text-[#226CF5] text-sm">{date}</div>
        <div className="text-xl">{title}</div>
        <div className="text-base">{desc}</div>
        <div className="text-[#FF7361] font-semibold cursor-pointer hover:font-bold">
          Register now &gt;
        </div>
      </div>
    </div>
  );
};

const Items = [
  {
    img: "Building1.png",
    flexDir: "col",
    date: "Mar 19 · 05:00 PM to 07:30 PM",
    title: "USA Vertual Addmission Day",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: "Building2.png",
    flexDir: "row",
    date: "May 18 - May 21  · 04:30 PM to 06:30 PM",
    title: "New Zealand Virtual Admissions Week",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
  },
  {
    img: "Building3.png",
    flexDir: "row",
    date: "May 24 - May 28  · 04:00 PM to 06:00 PM",
    title: "UK Virtual Admissions Week",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
  },
];

export default function Events() {
  return (
    <div className="content py-10 flex flex-col gap-10">
      <h1>Webinars & Events</h1>
      {/* Desktop View */}
      <div className="hidden md:grid grid-rows-1 grid-rows-2 grid-cols-2 place-center gap-4">
        <div className="row-span-2">
          <Card {...Items[0]}/>
        </div>
        <Card {...Items[1]} />
        <Card {...Items[2]} />
      </div>
      {/* Mobile View */}
      <div className="flex md:hidden gap-4 overflow-scroll">
        {Items.map((item, idx) => (
          <Card {...item} key={`events_card_${idx}`}/>
        ))}
      </div>
      <div className="text-[#FF7361] font-semibold cursor-pointer hover:font-bold">
        See More &gt;
      </div>
    </div>
  );
}
