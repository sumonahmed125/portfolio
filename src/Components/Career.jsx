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
            I am always committed to maintaining high academic and research
            excellence. My goal is to create practical and usable solutions by
            researching the intersection of Digital Media & AI. I have
            maintained an innovative approach and focus at every step of
            research, creative thinking, and acquiring technical skills. In my
            honors thesis, I researched Sentiment Analysis on Bangladesh Cricket
            through social media and created a new Bengali NLP dataset called
            CricBakko. Here, I analyzed sentiment with 70.37% accuracy by
            applying Logistic Regression, SVM, and Naïve Bayes models. This
            research has helped me to understand AI-driven digital media
            optimization and Interactive Media Technologies in a deeper way. I
            am interested in researching under Prof. Dr. Rainer Malaka, who is
            an expert in Human-Computer Interaction & AI-driven Digital Media
            Optimization. I believe that the Digital Media program at the
            University of Bremen will make me more skilled in research and
            technical excellence. By studying here, I will be able to explore
            new research horizons in Sentiment Analysis, AI-powered UX Design,
            and Digital Media Technologies.
          </p>
        </div>
      </div>
      <div className="py-5">
        <p className="sm:text-2xl text-gray-500  text-center  font-semibold w-[80%] mx-auto mt-4">
          The opportunity to study at the University of Bremen is perfectly
          aligned with my academic and research goals. The interdisciplinary
          curriculum, research opportunities, and industry-linked projects of
          this program will help me gain deeper expertise in AI-powered Digital
          Media Research & Optimization. I am confident that this opportunity
          will enable me to make a global contribution through research on
          AI-driven Content Personalization, Human-Computer Interaction, and
          Digital Media Technologies. I am grateful for this unique opportunity
          and look forward to joining the vibrant academic community of Bremen.
        </p>
      </div>
    </div>
  );
}

export default Career;
