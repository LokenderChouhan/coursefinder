import React from "react";

export default function Updates() {
  return (
    <div className="my-10 flex flex-col gap-10">
      <h1>Latest KC Updates</h1>
      <div className="flex overflow-x-auto pb-4 gap-6 p-4 snap-x snap-mandatory md:justify-center px-4">
        {/* Yellow Card */}
        <div className="flex flex-col items-start justify-between rounded-lg drop-shadow-lg p-8 bg-[#FDAF4D] w-[470px] h-[400px] flex-shrink-0 snap-center">
          <div className="text-left">
            <h1>We're Hiring!</h1>
            <p className="pt-4">
              KC continues recruitments for its offices across India and Asia
              even during the unprecedented times of Covid.
            </p>
          </div>
          <div>
            <button className="bg-white px-8 py-2 rounded-md text-[#FF7361] cursor-pointer drop-shadow-lg active:drop-shadow-none font-semibold p-2 drop-shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
        {/* 1st Card */}
        <div className="flex flex-col items-center bg-white p-8 rounded-lg drop-shadow-lg w-[250px] flex-shrink-0 snap-center">
          <div className="flex flex-col items-center justify-between h-2/4">
            <img src="RecCouncil.png" width={70} />
            <p className="text-center text-lg">
              American International Recruitment Council
            </p>
            <img src="ThreeGrayStar.png" width={70} />
          </div>
          <div className="h-2/4 flex flex-col items-center justify-center">
            <div>
              <p className="text-[#226CF5] text-[22px]">Certified Agents</p>
              <p className="text-lg">October 2018 - 2028</p>
            </div>
          </div>
        </div>
        {/* 2nd Card */}
        <div className="flex flex-col items-center bg-white p-8 rounded-lg drop-shadow-lg w-[250px] flex-shrink-0 snap-center">
          <div className="flex flex-col items-center justify-between h-2/4">
            <img src="BritishCouncil.png" width={120} />
            <p className="text-center text-lg">The British Council</p>
            <img src="ThreeGrayStar.png" width={70} />
          </div>
          <div className="h-2/4 flex flex-col items-center justify-center">
            <div>
              <p className="text-[#226CF5] text-[22px]">Advanced Agent Certificate</p>
              <p className="text-lg">August 2016 - 2018</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#FF7361] font-semibold cursor-pointer hover:font-bold">
        More News &gt;
      </div>
    </div>
  );
}



