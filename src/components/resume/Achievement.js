import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="2x Badminton National Player"
            subTitle="Represented Gujarat at Badminton Nationals"
            result="Qualified for quater finals"
            des="I won Championship at district and state level and got selected in Gujarat Badminton National Team consicutively for two years 2016 & 2017."
          />
          <ResumeCard
            title="Diploma in Tabla"
            subTitle="Junior Diploma Desgree in Tabla"
            result="73%"
            des="Compeleted my Jr. Diploma degree in tabla. It a 6 year course."
          />
          <ResumeCard
            title="Leader"
            subTitle="Leader at Entrepreneurship Development Cell, Acropolis."
            result="2022-23"
            des="I was selected as Leader of EDC, Acropolis and leading team of 32 core team members. My role was to foster entrepreneurial mindset among youth and manage smooth functioning of cell."
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
           title="Advisory Head"
           subTitle="Advisory Head at Entrepreneurship Development Cell, Acropolis."
           result="2023-till date"
           des="I was selected as Advisory Head of EDC, Acropolis and leading team of 8 Advisors and 30 Core Team Members."
          />
          <ResumeCard
            title="Technical Head"
            subTitle=" Technical Head at Yavnika Hobby Club, Acropolis"
            result="2022-23"
            des="I was selected as Technical Head at YHC and was responsible for creating website and manage social media."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
