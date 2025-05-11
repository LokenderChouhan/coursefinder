import React, { useEffect, useState } from "react";

const items = [
  {
    id: 0,
    review:
      "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    name: "Mandar Suryawanshi",
    desg: "Northeastern University, USA",
  },
  {
    id: 1,
    review:
      "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    name: "Aarohi Sighel",
    desg: "University of South Australia, Australia",
  },
  {
    id: 2,
    review:
      "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
    name: "Susan Mendonca",
    desg: "Conestoga College, Canada",
  },
  {
    id: 3,
    review:
      "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    name: "Mandar Suryawanshi",
    desg: "Northeastern University, USA",
  },
  {
    id: 4,
    review:
      "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    name: "Aarohi Sighel",
    desg: "University of South Australia, Australia",
  },
];

const Card = ({ id, review, name, desg, activeId }) => {
  return (
    <div
      className="relative bg-white drop-shadow-lg p-4 md:p-8 rounded-lg text-left w-[330px] md:w-[370px] h-[320px] md:h-[350px] flex justify-between m-4 flex-col"
      style={{
        top: id == activeId ? "30px" : "0",
      }}
    >
      <div>
        <img src="BlueQuotes.svg" width={32} />
        <p className="pt-4 md:pt-8">
          {id} : {review}
        </p>
      </div>
      <div className="mt-4 md:mt-8">
        <div className="font-semibold">{name}</div>
        <div>{desg}</div>
      </div>
    </div>
  );
};

export default function Reviews() {
  const [activeId, setActiveId] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    return () =>
      window.addEventListener("resize", () =>
        setIsMobile(window.innerWidth <= 768)
      );
  }, []);

  const handleSlide = (action) => {
    const newAcitve = activeId + action;
    if (
      isMobile
        ? newAcitve >= 0 && newAcitve < items.length
        : newAcitve >= 1 && newAcitve < items.length - 1
    )
      setActiveId(newAcitve);
  };

  const enablePrev = isMobile ? activeId > 0 : activeId >= 1;
  const enableNext = isMobile
    ? activeId < items.length - 1
    : activeId < items.length - 2;

  const pagesCount = isMobile ? items.length : items.length - 2;
  const activeIdx = items.findIndex((item) => item.id == activeId);
  const activeIdPageIdx = isMobile ? activeIdx : activeIdx - 1;

  return (
    <div className="bg-[#FFDCD8] py-20">
      <h1>Our students love us</h1>
      <div className="relative w-full p-4 md:p-8 overflow-x-hidden">
        {/* Previous button */}
        <div
          className={`absolute left-[5%] top-[50%] -translate-1/2 z-2 w-10 h-10 bg-white rounded-full flex justify-center items-center bg-white drop-shadow-lg select-none ${
            enablePrev
              ? "cursor-pointer active:drop-shadow-none active:scale-98"
              : "opacity-50"
          }`}
          onClick={() => handleSlide(-1)}
        >
          <img src="ArrowDown.svg" className="rotate-90" width={15} />
        </div>
        {/* Next button */}
        <div
          className={`absolute left-[95%] top-[50%] -translate-1/2 z-2 w-10 h-10 bg-white rounded-full flex justify-center items-center bg-white drop-shadow-lg select-none ${
            enableNext
              ? "cursor-pointer active:drop-shadow-none active:scale-98"
              : "opacity-50"
          } `}
          onClick={() => handleSlide(1)}
        >
          <img src="ArrowDown.svg" className="rotate-270" width={15} />
        </div>
        {/* Desktop 3 card view */}
        <div className="hidden md:flex relative justify-center gap-[30px]">
          {items.map((item) =>
            Math.abs(activeId - item.id) <= 1 ? (
              <Card {...item} activeId={activeId} key={item.id} />
            ) : null
          )}
        </div>
        {/* Mobile 1 card view */}
        <div className="flex md:hidden relative justify-center gap-[30px]">
          {items.map((item) =>
            activeId == item.id ? (
              <Card {...item} activeId={activeId} key={item.id} />
            ) : null
          )}
        </div>
        <div className="flex gap-2 justify-center items-center z-2 mt-10">
          {new Array(pagesCount)
            .fill(null)
            .map((_, idx) =>
              activeIdPageIdx == idx ? (
                <div
                  className="w-[12px] h-[12px] rounded-full bg-[#0E1B2C] opacity-100"
                  key={`review_bullet_${idx}`}
                />
              ) : (
                <div
                  className="w-[8px] h-[8px] rounded-full bg-[#0E1B2C] opacity-25"
                  key={`review_bullet_${idx}`}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
}
