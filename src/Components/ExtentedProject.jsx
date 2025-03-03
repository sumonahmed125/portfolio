import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const ExtendedProjects = [
    {
      id:1,
      bgColor:"#d1c2f252",
      bgImg:"#c0b5eec7",
      title:"Project1",
      image:"./images/project1.png"
    },
    {
        id:2,
        bgColor:"#d1c2f252",
        bgImg:"#e4ccbc",
        title:"Project2",
        image:"./images/project2.png"
      },
      {
        id:3,
        bgColor:"#b4ccf570",
        bgImg:"#75bae04d",
        title:"Project3",
        image:"./images/project3.png"
      },
      {
        id:4,
        bgColor:"#f2c2ef7a",
        bgImg:"#e8a5e387",
        title:"Project4",
        image:"./images/project4.png"
      },
      {
        id:5,
        bgColor:"#b7ecd05c",
        bgImg:"#a2dcc3",
        title:"Project5",
       image:"./images/project2.png"
      },
  ]
function ExtentedProject() {
    return (
      <div className='mt-20 w-full bg-white px-10 py-12'> 
      <div className='sm:w-[70%] border-t border-t-stone-200 mx-auto relative'>
        
        <div className='flex border-x border-x-stone-200  justify-center absolute -top-3 sm:left-[40%] left-[25%] items-center 
        bg-white px-2 text-sm'>
          <img src="./images/pin.png" alt="" className='h-[50px]'/>
          <h3 className=' text-blue-950 font-semibold'> Extended Projects</h3>
        </div>
       
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 items-center mt-5'>
        {ExtendedProjects.map((p) => (
  <div key={p.id} style={{ backgroundColor: `${p.bgColor}` }} 
  className="rounded-3xl mt-16 px-16 py-10   ">
   <div className='p-8 rounded-2xl pb-0' style={{backgroundColor: `${p.bgImg}`}}>
   <img src={p.image} alt="" className='rounded-2xl sm:h-[300px] sm:w-[500px] w-[400px] h-[150px]'/>
   </div>
      <h3 className='mt-4 text-2xl text-blue-950 font-bold open-sans-font'>{p.title}</h3>
      <button 
      className='px-5 py-3 bg-gray-800  text-white rounded-md mt-5
      hover:bg-transparent hover:border hover:border-gray-800 hover:text-gray-800'>
        View Project
      </button>
    </div>
   
))}
<div className='mt-16 px-16 py-10 text-center flex justify-center'>
<div className='sm:w-[200px] sm:h-[200px] h-[150px] w-[150px] rounded-full bg-indigo-400 flex justify-center items-center cursor-pointer '>
    <div  className='flex flex-col text-white w-[150px] items-center justify-center '>
    <MdArrowOutward />
    <h3 className='w-[50%]'>View All Project</h3>
    </div>
</div>
</div>
        </div>

        </div>
        <div className='mt-20  sm:w-[70%] mx-auto '>
            <h3 className='text-2xl text-blue-950 font-bold open-sans-font'> Research Assistantship at Lorem ipsum dolor </h3>
            <div className='flex sm:flex-row flex-col gap-20 items-center mt-3'>
               <div className='sm:w-[60%]'>
               <p className='text-base text-gray-500 font-semibold'>Lorem ipsum dolor sit,  numquam quasi velit dolore quod vel. Rem, eveniet molestiae. Earum autem quidem vero temporibus reiciendis nostrum, dolorum nam qui quisquam est, maiores nisi exercitationem necessitatibus esse accusantium fugiat facilis debitis<br/> <br/> cum mollitia.  maiores nisi exercitationem necessitatibus esse accusantium fugiat Iste, eos. Illo excepturi quasi culpa nostrum unde?</p>

<h4 className='font-bold text-blue-950 mt-5'> Contributions and Learning:</h4>
<div className='grid grid-cols-2 gap-4 items-center mt-3'>
<div  className='px-4 py-3 border border-blue-500  text-blue-500 rounded-md  text-center cursor-pointer'>Data Management</div>
<div className='px-4 py-3 border border-blue-500  text-blue-500 rounded-md  text-center cursor-pointer'>Model Development</div>
<div className='px-4 py-3 border border-blue-500  text-blue-500 rounded-md  text-center cursor-pointer'> Research Evaluation</div>
</div>
               </div>
               <div className='bg-stone-100 rounded-2xl p-10 -mt-16'>
                <div>
                    <h3 className='text-blue-950 font-bold'>Position :</h3>
                    <p className='text-gray-600'>Research Assistant</p>
                </div>
                <div className='mt-4'>
                    <h3 className='text-blue-950 font-bold'> Location :</h3>
                    <p className='text-gray-600'>Ashulia, Savar, Dhaka</p>
                </div>
                <div className='mt-4'>
                    <h3 className='text-blue-950 font-bold'>Duration :</h3>
                    <p className='text-gray-600'>Starting February 6, 2023, with potential annual renewals 
                    based on performance and project needs.</p>
                </div>
                <div className='mt-4'>
                    <h3 className='text-blue-950 font-bold'> Weekly Hours :</h3>
                    <p className='text-gray-600'>20 hours per week</p>
                </div>
               </div>
            </div>
        </div>
      </div>
      
    )
  }

export default ExtentedProject