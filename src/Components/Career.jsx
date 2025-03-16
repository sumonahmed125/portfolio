import React from "react";
import { SiComma } from "react-icons/si";
function Career() {
  return (
    <div className="sm:w-[70%] mx-auto bg-[#ffeadbba] py-10 sm:px-20 rounded-2xl my-20 ">
      <div className="border-b border-b-orange-700 sm:p-10 p-5">
        <h3 className="text-2xl text-blue-950 font-bold ">
          Career Aspirations
        </h3>
        <div className="flex gap-5 mt-5 w-[90%] mx-auto items-center ">
          <div className="text-2xl text-orange-500 font-bold  w-[50%] hidden sm:flex">
            <SiComma /> <SiComma />
          </div>
          <p className="sm:text-lg text-base text-gray-500 font-semibold">
            My goal is to create innovative solutions using the intersection of
            Digital Media & Artificial Intelligence (AI), which will improve
            user experience and accelerate technological progress. In
            particular, I have research experience in Sentiment Analysis, User
            Interaction Design, and AI-driven Content Personalization, which
            makes me an ideal candidate for the Digital Media Master's Program
            in Bremen.The Digital Media Master's program at the University of
            Bremen will give me the opportunity to acquire advanced technical
            skills as well as actively participate in research. In particular, I
            am attracted to research related to Interactive Media, Digital Media
            Technologies, and AI-powered UX Design. I am interested in
            conducting research under Prof. Dr. Rainer Malaka, who specializes
            in AI-driven digital media optimization.The interdisciplinary
            curriculum and research opportunities of this program will prepare
            me to shape the future of digital media technology, and I look
            forward to applying this knowledge to industry and research.
          </p>
        </div>
      </div>

      <div className="mt-10 border-b border-b-orange-700 p-10">
        <h3 className="text-2xl text-blue-950 font-bold ">
          Commitment to Excellence
        </h3>
        <div className="flex gap-5 mt-5 w-[90%] mx-auto items-center">
          <div className="text-2xl text-orange-500 font-bold hidden sm:flex w-[50%]">
            <SiComma /> <SiComma />
          </div>
          <p className="sm:text-lg text-base text-gray-500 font-semibold">
            I am deeply committed to maintaining a high standard of academic and
            professional excellence. Throughout my academic and professional
            journey, I have consistently demonstrated a strong work ethic, a
            passion for learning, and a dedication to achieving outstanding
            results. I am confident that my drive for excellence will allow me
            to make meaningful contributions to the University of Bremen’s
            esteemed program and to the broader digital media landscape.
          </p>
        </div>
      </div>
      <div className="py-5">
        <p className="sm:text-2xl text-gray-500  text-center  font-semibold w-[80%] mx-auto mt-4">
          Thank you for considering my application. I am excited about the
          possibility of joining the University of Bremen and contributing to
          the vibrant academic community. My contact details are provided at the
          beginning of this portfolio for any further inquiries.
        </p>
      </div>
    </div>
  );
}

export default Career;
