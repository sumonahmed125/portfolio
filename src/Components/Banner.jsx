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
            Masum Ahmed
          </h1>
          <h2 className="md:text-4xl text-2xl font-semibold open-sans-font mt-1 text-gray-700">
            I am a Web Developer
          </h2>
          <p className="mt-10 text-base text-gray-700 hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nemo obcaecati architecto eius alias. Est asperiores laudantium
            laborum adipisci doloribus illo voluptatibus excepturi quia modi
            facilis incidunt nam, debitis ipsam minus consequatur? Cum, aliquam.
            Cumque corrupti ullam aperiam reiciendis iure, totam rerum dolorem
            maiores deleniti voluptates sapiente placeat voluptatem consequuntur
            vel tempora, magni minima modi deleniti assumenda reprehenderit sit
            adipisci! Amet sapiente culpa cumque ipsa?
          </p>
          <div className="mt-8 gap-6 hidden md:flex ">
            <a
              href="#"
              className="px-5 py-3 bg-gray-800  text-white rounded-md 
                hover:bg-transparent hover:border hover:border-gray-700 hover:text-gray-800"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-5 py-3 text-gray-800 bg-transparent border border-gray-800 rounded-md
                hover:bg-gray-800  hover:text-white"
            >
              Github Profile
            </a>
          </div>
          <p className="md:hidden block text-sm mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            eius!
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
