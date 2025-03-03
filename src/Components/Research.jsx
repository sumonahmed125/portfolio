import React from 'react'

function Research() {
  return (
    <div className='sm:w-[70%] mx-auto rounded-3xl bg-stone-100 mt-16 px-16 py-10 flex sm:flex-row flex-col gap-4 '>
        <div className='sm:w-[60%]'>
            <h3 className='text-2xl text-blue-950 font-bold poppins-regular'>Research Contributions</h3>
            <h4 className='text-base font-semibold text-gray-700 mt-3 '>Thesis Title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. quis a autem ducimus laudantium cupiditate iure rerum! Aliquam repudiandae assumenda laborum."</h4>
            <p className='mt-10 text-base text-gray-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa dicta obcaecati possimus voluptatem minus voluptates recusandae facere modi soluta, asperiores ducimus quisquam omnis eius expedita quis ex sunt assumenda numquam enim rem nam aperiam? Blanditiis deserunt itaque repellendus quam quidem nisi cumque dolore incidunt provident.earum sunt, consequuntur vel!</p>
        </div>
        <div className='sm:block hidden'>
          <div className='flex shadow-md'> 
           <img src="./images/graph1.png" alt="" className='relative w-[200px]' />
           <img src="./images/graph2.png" alt="" className='relative w-[200px] ml-6 top-5'/>
           </div>
           <img src="./images/graph4.png" alt="" className='relative w-[250px] z-10 -top-5 left-16'/>
           <div className='flex '>
           <img src="./images/graph3.png" alt="" className='relative w-[200px] -top-28 '/>
           <img src="./images/graph5.png" alt="" className='relative w-[200px] left-3 -top-20'/>
           </div>
        </div>
    </div>
  )
}

export default Research