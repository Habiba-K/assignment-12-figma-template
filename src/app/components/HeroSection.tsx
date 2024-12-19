import React from 'react'
import Button from './Button'
import { GoArrowRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className='flex justify-center w-full bg-[#043873]  max-w-[1920px] max-h-[829px]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-0'>
        <div className=' w-1/2 h-[361px] ml-5 md:ml-20  '>
            <div className='pt-4  h-[361px] '>
                <h2 className='text-white font-bold text-[30px] md:text-[40px] lg:text-[50px]'>Get More Done with whitepace</h2>
                <p className=' font-serif text-white w-[400px]'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                <Button btnText='Try Whitepace free ->' bgColor='bg-[#4F9CF9]' btnColor='text-white' mrl='mt-14'pdy='py-5' pdx='px-5'> </Button>
                </div>
                
            </div>
        <div className='hidden lg:flex mt-10 ml-20    md:w-[70%] max-w-[824px] bg-[#C4DEFD] h-[400px] max-h-[549px]'></div>
      </div>
    </div>
  )
}

export default HeroSection
