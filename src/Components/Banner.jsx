import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

function Banner() {
  return (
    <div className="sm:w-[92%] w-full  mx-auto rounded-3xl sm:mt-5 mt-3 sm:bg-gradient-to-r from-[#fff8f3] via-sky-100 to-pink-50 bg-[#fff8f3] sm:px-16 px-4 py-8">
      <div className="flex flex-col md:flex-row sm:justify-center sm:items-center gap-4  p-4">
        <div className="sm:w-[60%]">
          <h3 className="md:text-3xl text-xl font-semibold">Hello, I’m</h3>
          <h1 className="md:text-5xl text-3xl font-bold sm:mt-2 text-gray-800">
            Suman Ahmed Masum
          </h1>
          <h2 className="md:text-4xl text-2xl font-semibold open-sans-font mt-1 text-gray-700">
            I am a Web Developer
          </h2>
          <p className="mt-10 text-base text-gray-700 hidden md:block">
            A graphic designer, video editor, and UI/UX enthusiast with an
            educational background in Computer Science and Engineering. My
            passion for the digital world has led me to creative design, video
            editing, and web development. I am proficient in Adobe Photoshop,
            Premiere Pro, Blender, and Figma, which allow me to create beautiful
            designs and engaging multimedia content. I also have experience in
            front-end web development using Tailwind CSS, React, JavaScript,
            Python, and HTML/CSS, which helps me bridge the gap between design
            and functionality. I love user-centric design, interactive
            experiences, and creating innovative digital solutions. Whether it’s
            UI/UX design, video editing, or web development—I’m always
            interested in creating high-quality and meaningful
            digital experiences.
          </p>
          <div className="mt-8 gap-6 hidden md:flex ">
            <a
              href="https://www.linkedin.com/in/sumon-ahmed-masum-677993215/"
              className="px-5 py-3 bg-gray-800  text-white rounded-md 
                hover:bg-transparent hover:border hover:border-gray-700 hover:text-gray-800"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sumonahmed125"
              className="px-5 py-3 text-gray-800 bg-transparent border border-gray-800 rounded-md
                hover:bg-gray-800  hover:text-white"
            >
              Github Profile
            </a>
          </div>
          <p className="md:hidden block text-sm mt-1">
            A Web Developer, graphic designer, video editor, and UI/UX
            enthusiast with an educational background in Computer Science and
            Engineering.
          </p>
          <div className="flex md:hidden gap-2 mt-4">
            <div
              className="border-2 bg-gray-800 p-2 rounded-full text-xl text-white
            hover:bg-transparent hover:border hover:border-gray-700 hover:text-gray-800"
            >
              <FaLinkedinIn />
            </div>
            <div
              className="border-2 bg-gray-800 p-2 rounded-full text-xl text-white
             hover:bg-transparent hover:border hover:border-gray-700 hover:text-gray-800"
            >
              <TbBrandGithubFilled />
            </div>
          </div>
        </div>
        <div className="w-[40%] bg-slate-100 sm:rounded-3xl rounded-full hidden md:block ">
          <img src="./images/masum.JPG" alt="" className="w-full" />
        </div>
        <img
          src="./images/masum.JPG"
          alt=""
          className="w-full block md:hidden"
        />
      </div>
    </div>
  );
}

export default Banner;
