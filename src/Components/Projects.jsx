import React from "react";

const projects = [
  {
    id: 1,
    title: "Task management System",
    bgImage: "./images/bg-1.png",
    tools: [
      {
        id: 1,
        s: "HTML",
      },
      {
        id: 2,
        s: "CSS",
      },
      {
        id: 3,
        s: "tailwind",
      },
      {
        id: 4,
        s: "JavaScript",
      },
    ],
    description:
      "task management system is a web application that helps you to manage your daily tasks. you can add, delete, and update your tasks.",
    image: "./images/dashboard.png",
    link: "https://github.com/sumonahmed125/dev-board",
  },
  {
    id: 2,
    title: "Kids-School",
    bgImage: "images/bg-2.png",
    tools: [
      {
        id: 1,
        s: "HTML",
      },
      {
        id: 2,
        s: "CSS",
      },
      {
        id: 3,
        s: "Tailwind CSS",
      },
      {
        id: 4,
        s: "JavaScript",
      },
    ],
    description:
      "kisd school is a web application that helps you to manage your school. you can add, delete, and update your school information.",
    image: "./images/Kids-School.png",
    link: "https://github.com/sumonahmed125/Kids-School",
  },
  {
    id: 3,
    title: "Pets Care",
    bgImage: "images/bg-3.png",
    tools: [
      {
        id: 1,
        s: "HTML",
      },
      {
        id: 2,
        s: "CSS",
      },
      {
        id: 3,
        s: "Tailwind CSS",
      },
      {
        id: 4,
        s: "JavaScript",
      },
    ],
    description:
      "pets care is a web application that helps you to manage your pets. you can add, delete, and update your pets information.",
    image: "./images/petcare.jpg",
    link: "https://github.com/sumonahmed125/Pets-Care",
  },
  {
    id: 4,
    title: "e-commerce vegitable shop",
    bgImage: "images/bg-2.png", // change the image path
    // bgImage: "images/bg-3.png",
    tools: [
      {
        id: 1,
        s: "HTML",
      },
      {
        id: 2,
        s: "CSS",
      },
      {
        id: 3,
        s: "Tailwind CSS",
      },
      {
        id: 4,
        s: "JavaScript",
      },
    ],
    description:
      "e commerce vegitable shop is a web application that helps you to manage your vegitable shop. you can add, delete, and update your vegitable information.",
    image: "./images/vegist.jpg",
    link: "https://github.com/sumonahmed125/e-vegist",
  },
];

function Projects() {
  return (
    <div className="mt-20 w-full bg-stone-100 px-10 py-12">
      <div className="sm:w-[70%] border-t border-t-stone-300 mx-auto relative">
        <div className="flex border-x border-x-stone-300  justify-center gap-2 absolute -top-3 sm:left-[40%] left-[25%] items-center bg-stone-100 px-2 sm:text-xl">
          <img src="./images/pencil.png" alt="" className="h-[20px]" />
          <h3 className=" text-blue-950 font-bold">P R O J E C T</h3>
        </div>

        {projects.map((p) => (
          <div
            key={p.id}
            style={{ backgroundImage: `url(${p.bgImage})` }}
            className="rounded-3xl mt-16 px-16 py-10 flex flex-col sm:flex-row gap-4 items-center bg-no-repeat w-full bg-cover"
          >
            <div className="order-2 sm:order-1">
              <h3 className="text-2xl text-blue-950 font-semibold">
                {p.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tools.map((t) => (
                  <div
                    key={t.id}
                    className="px-2 py-3 w-[100px] text-sm text-center rounded-md bg-gray-800 text-white"
                  >
                    {t.s}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-base">{p.description}</p>
              <a
                href={p.link}
                className="inline-block px-5 py-2 bg-orange-400  text-white rounded-md mt-5
      hover:bg-transparent hover:border hover:border-orange-400 hover:text-orange-400"
              >
                Learn More
              </a>
            </div>
            <img
              src={p.image}
              alt=""
              className="sm:w-[500px]  mt-10 sm:mt-0 order-1 sm:order-2"
            />
          </div>
        ))}

        <div className="mt-20 flex flex-col sm:flex-row gap-6 items-center mx-auto w-full">
          <div className="">
            <img
              className="w-[500px] rounded-3xl grayscale"
              src="./images/chat.png"
              alt=""
            />
            <h3 className="text-xl text-blue-950 font-semibold mt-4">
              Chatting App
            </h3>
            <p className="mt-2 text-sm">
              chat app is a web application that helps you to chat with your
              friends. you can add, delete, and update your chat information.
            </p>
            <button
              className="px-5 py-3 bg-stone-400  text-white rounded-md mt-5
      hover:bg-transparent hover:border hover:border-orange-400 hover:text-orange-400"
            >
              Coming Soon
            </button>
          </div>
          <div>
            <img
              className="w-[450px] rounded-3xl grayscale"
              src="./images/travel.png"
              alt=""
            />
            <h3 className="text-xl text-blue-950 font-semibold mt-4">
              Travel Agency
            </h3>
            <p className="mt-2 text-sm">
              travel agency is a web application that helps you to manage your
              travel agency. you can add, delete, and update your travel agency
              information.
            </p>
            <button
              className="px-5 py-3 bg-stone-400  text-white rounded-md mt-5
      hover:bg-transparent hover:border hover:border-orange-400 hover:text-orange-400"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
