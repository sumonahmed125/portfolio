import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ExtendedProjects = [
  {
    id: 1,
    bgColor: "#d1c2f252",
    bgImg: "#c0b5eec7",
    title: "Calculator App",
    link: "https://sumonahmed125.github.io/simple-calculator/",
    image: "./images/project1.png",
  },
  {
    id: 2,
    bgColor: "#d1c2f252",
    bgImg: "#e4ccbc",
    title: "Wether App",
    link: "https://sumonahmed125.github.io/wether/",
    image: "./images/project2.png",
  },
  {
    id: 3,
    bgColor: "#b4ccf570",
    bgImg: "#75bae04d",
    title: "tic tac toe",
    link: "https://sumonahmed125.github.io/tic-tac-toe/",
    image: "./images/project3.png",
  },
  {
    id: 4,
    bgColor: "#f2c2ef7a",
    bgImg: "#e8a5e387",
    title: "image search engine",
    link: "https://sumonahmed125.github.io/image-search-/",
    image: "./images/project4.png",
  },
];
function ExtentedProject() {
  return (
    <div className="mt-20 w-full bg-white px-10 py-12">
      <div className="sm:w-[70%] border-t border-t-stone-200 mx-auto relative">
        <div
          className="flex border-x border-x-stone-200  justify-center absolute -top-3 sm:left-[40%] left-[25%] items-center 
        bg-white px-2 text-sm"
        >
          <img src="./images/pin.png" alt="" className="h-[50px]" />
          <h3 className=" text-blue-950 font-semibold"> Extended Projects</h3>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 items-center mt-5">
          {ExtendedProjects.map((p) => (
            <div
              key={p.id}
              style={{ backgroundColor: `${p.bgColor}` }}
              className="rounded-3xl mt-16 px-16 py-10   "
            >
              <div
                className="p-8 rounded-2xl pb-0"
                style={{ backgroundColor: `${p.bgImg}` }}
              >
                <img
                  src={p.image}
                  alt=""
                  className="rounded-2xl sm:h-[300px] sm:w-[500px] w-[400px] h-[150px]"
                />
              </div>
              <h3 className="mt-4 text-2xl text-blue-950 font-bold open-sans-font">
                {p.title}
              </h3>
              <a
                href={p.link}
                className="px-5 py-3 bg-gray-800  text-white rounded-md mt-5
      hover:bg-transparent hover:border hover:border-gray-800 hover:text-gray-800 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 px-16 flex justify-center items-center py-10 text-center">
        <a
          href="https://github.com/sumonahmed125?tab=repositories"
          className="sm:w-[200px] sm:h-[50px] h-[50px] w-[100px]  bg-indigo-400 flex justify-center items-center cursor-pointer rounded"
        >
          <div className="flex text-white w-[150px] items-center justify-center">
            <MdArrowOutward />
            <h3 className="w-[50%]">All Project</h3>
          </div>
        </a>
      </div>
      <div className="mt-20  sm:w-[70%] mx-auto ">
        <h3 className="text-2xl text-blue-950 font-bold open-sans-font">
          {" "}
          Research Assistant at Metropolitan University of Bangladesh{" "}
        </h3>
        <div className="flex sm:flex-row flex-col gap-20 items-center mt-3">
          <div className="sm:w-[60%]">
            <p className="text-base text-gray-500 font-semibold">
              As a Research Assistant, I worked on sentiment analysis of
              Bangladesh Cricket discussions on social media using Natural
              Language Processing (NLP) & Machine Learning (ML). The research
              aimed to build CricBakko, the first Bangla cricket-focused
              sentiment analysis dataset, by collecting and analyzing public
              opinions from Facebook & YouTube
            </p>
            <p>
              <h4 className="text-gray-700 font-semibold">
                {" "}
                Key Contributions:
              </h4>
              <h5 className="text-gray-500 font-semibold">
                {" "}
                ✅ Data Collection & Preprocessing:{" "}
              </h5>
              <p className="text-gray-500 font-semibold">
                • Collected 54,000+ social media comments using Google Scripts &
                Apify Web Scraper.
              </p>
              <p className="text-gray-500 font-semibold">
                {" "}
                • Filtered and cleaned Bangla & Banglish text, removing
                irrelevant data.
              </p>
              <h5 className="text-gray-500 font-semibold">
                ✅ Dataset Annotation & Text Processing:
              </h5>
              <p className="text-gray-500 font-semibold">
                {" "}
                • Categorized data into Positive, Negative, Neutral, and
                Off-Topic sentiments.
              </p>
            </p>
            {/* <h4 className="font-bold text-blue-950 mt-5">
              {" "}
              Contributions and Learning:
            </h4>
            <div className="grid grid-cols-2 gap-4 items-center mt-3">
              <div className="px-4 py-3 border border-blue-500  text-blue-500 rounded-md  text-center cursor-pointer">
                Data Management
              </div>
              <div className="px-4 py-3 border border-blue-500  text-blue-500 rounded-md  text-center cursor-pointer">
                Model Development
              </div>
              <div className="px-4 py-3 border border-blue-500  text-blue-500 rounded-md  text-center cursor-pointer">
                {" "}
                Research Evaluation
              </div>
            </div> */}
          </div>
          <div className="bg-stone-100 mt-7 rounded-2xl p-10 ">
            <div>
              <h3 className="text-blue-950 font-bold">Position :</h3>
              <p className="text-gray-600">Research Assistant</p>
            </div>
            <div className="mt-4">
              <h3 className="text-blue-950 font-bold"> Location :</h3>
              <p className="text-gray-600">Sylhet,Bangladesh</p>
            </div>
            <div className="mt-4">
              <h3 className="text-blue-950 font-bold">Duration :</h3>
              <p className="text-gray-600 w-[400px]">
                Starting November 6, 2023, with potential six-month extensions
                based on research performance and thesis progress, focusing on
                Sentiment Analysis and dataset development for Bangladesh
                cricket-related social media data.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-blue-950 font-bold"> Weekly Hours :</h3>
              <p className="text-gray-600">16 hours per week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtentedProject;
