import React from 'react'
import { ImArrowUpRight2 } from "react-icons/im";

const Stories = () => {
  return (
    <div id='story-div' className='w-[100vw] h-auto bg-tertiary-100 py-28 px-[200px] md:px-[5%] flex flex-col items-center'>
      <h1 className='text-[100px] md:text-[60px] leading-[100px] text-primary-10 font-extrabold'>STORIES</h1>

      <div className='flex md:flex-col w-full gap-[34px] mt-12 items-center'>
        <div className='w-[50%] md:w-full h-[250px] bg-tertiary-15 rounded-tl-[12px] rounded-br-[12px] rounded-tr-[60px] rounded-bl-[60px] flex items-center justify-center'>
        <div className="w-[144px] h-[144px] rounded-full bg-secondary-20  text-[20px] md:text-[16px] leading-[30px] md:leading-[20.5px] flex flex-col justify-center items-center gap-2">
          <h3 className='text-[#A27E82] font-extrabold text-[10px] leading-[15px]'>CHURCH</h3>
          <p className='text-secondary-base font-extrabold text-[14px] leading-[20px]'>PREACHING</p>
          <ImArrowUpRight2 size={"16px"} className='text-secondary-base' />
        </div>
        </div>
        <div className='w-[50%] md:w-full h-[250px] bg-tertiary-15 rounded-bl-[12px] rounded-tr-[12px] rounded-br-[60px] rounded-tl-[60px]' />
      </div>
      <div className='flex md:flex-col w-full gap-[34px] mt-[34px] items-center'>
        <div className='w-[50%] md:w-full h-[250px] bg-tertiary-15 rounded-tr-[12px] rounded-bl-[12px] rounded-tl-[60px] rounded-br-[60px]'></div>
        <div className='w-[50%] md:w-full h-[250px] bg-tertiary-15 rounded-tr-[12px] rounded-br-[12px] rounded-tl-[60px] rounded-bl-[60px]' />
      </div>

    </div>
  )
}

export default Stories