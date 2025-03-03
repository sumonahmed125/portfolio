import React from 'react'
import { SiComma } from "react-icons/si";
function Career() {
  return (
    <div className='sm:w-[70%] mx-auto bg-[#ffeadbba] py-10 sm:px-20 rounded-2xl my-20 '>
        <div className='border-b border-b-orange-700 sm:p-10 p-5'>
          <h3 className='text-2xl text-blue-950 font-bold '>Career Aspirations</h3>
          <div className='flex gap-5 mt-5 w-[90%] mx-auto items-center '>
         <div className='text-2xl text-orange-500 font-bold  w-[50%] hidden sm:flex'> 
            <SiComma /> <SiComma />
        </div>
          <p className='sm:text-lg text-base text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptas excepturi non voluptate autem, magnam nemo amet labore quam consequuntur ducimus suscipit cupiditate cum inventore quos iure reprehenderit adipisci vel.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptas excepturi non voluptate autem, magnam nemo amet labore quam consequuntur ducimus suscipit cupiditate cum inventore quos iure reprehenderit adipisci vel.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptas excepturi non voluptate autem, magnam nemo amet labore quam consequuntur ducimus suscipit cupiditate cum inventore quos iure reprehenderit adipisci vel.</p>
          </div>
        </div>

        <div className='mt-10 border-b border-b-orange-700 p-10'>
          <h3 className='text-2xl text-blue-950 font-bold '>Commitment to Excellence</h3>
          <div className='flex gap-5 mt-5 w-[90%] mx-auto items-center'>
         <div className='text-2xl text-orange-500 font-bold hidden sm:flex w-[50%]'> 
            <SiComma /> <SiComma />
        </div>
          <p className='sm:text-lg text-base text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptas excepturi non voluptate autem, magnam nemo amet labore quam consequuntur ducimus suscipit cupiditate cum inventore quos iure reprehenderit adipisci vel.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptas excepturi non voluptate autem, magnam nemo amet labore quam consequuntur ducimus suscipit cupiditate cum inventore quos iure reprehenderit adipisci vel.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptas excepturi non voluptate autem, magnam nemo amet labore quam consequuntur ducimus suscipit cupiditate cum inventore quos iure reprehenderit adipisci vel.</p>
          </div>
        </div>
        <div className='py-5'>
            <p className='sm:text-2xl text-gray-500  text-center  font-semibold w-[80%] mx-auto mt-4'> 
                Thank you for considering my application. I am excited about the possibility of joining the University of Bremen and contributing to the vibrant academic community. My contact details are provided at the beginning of this portfolio for any further inquiries.</p>
        </div>
    </div>
  )
}

export default Career