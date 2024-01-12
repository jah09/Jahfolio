import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full bg-black text-white px-16'>
      <div className='grid max-w-[1240px] mx-auto lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>You want tips?</h1>
            <p>Sign up now and pay later.</p>
        </div> 
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
                <input type="email" name="" id=""  placeholder='Enter your email' className='p-3 flex w-full rounded-md text-black'/>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 py-3 text-black ">Send me</button>
          
            </div>
            <p>Lorem ipsum dolor sit amet consectetur <span className='text-[#00df9a]'>Privacy</span></p>
        </div>
       
        </div> 
    </div>
  )
}

export default NewsLetter
