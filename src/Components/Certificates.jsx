import React from "react";

function Certificates() {
  return (
    <div className="mt-20 w-full bg-white px-10 py-12">
      <div className="sm:w-[70%] border-t border-t-stone-200 mx-auto relative p-8">
        <div
          className="border-x border-x-stone-200  absolute -top-3 sm:left-[40%] left-[25%]
      bg-white px-2 w-[150px] text-center"
        >
          <h3 className=" text-blue-950 font-semibold text-sm">
            {" "}
            CERTIFICATES AND ACHIVEMENTS
          </h3>
        </div>

        <div className="w-full mx-auto mt-10 p-4">
          <div className=" flex flex-col sm:flex-row justify-between mt-20">
            <h3 className="text-3xl text-blue-950 poppins-regular sm:w-[30%]  font-bold">
              Certifications
            </h3>
            <div className="sm:w-[60%]">
              <div>
                <h3 className="text-blue-950 font-bold text-2xl poppins-regular ">
                  Lorem ipsum dolor :
                </h3>
                <p className="text-blue-500 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-blue-950 font-bold text-2xl poppins-regular ">
                  INTERNSHIP CERTIFICATE :
                </h3>
                <p className="text-blue-500 font-semibold">
                  successfully completed an internship as a software Developer
                  at GoPayra Technology & IT.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-blue-950 font-bold text-2xl poppins-regular ">
                  Data Analys :
                </h3>
                <p className="text-blue-500 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row justify-between mt-20">
            <h3 className="text-3xl text-blue-950 poppins-regular sm:w-[30%]  font-bold">
              {" "}
              Academic Honors
            </h3>
            <div className="sm:w-[60%]">
              <div>
                <h3 className="text-blue-950 font-bold text-2xl poppins-regular ">
                  Lorem ipsum dolor :
                </h3>
                <p className="text-blue-500 font-semibold ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit adipisicing
                  elit. Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-blue-950 font-bold text-2xl poppins-regular ">
                  Lorem ipsum dolor :
                </h3>
                <p className="text-blue-500 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
