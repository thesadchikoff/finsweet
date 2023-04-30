import Image from 'next/image'
import React from 'react'
import preview from '../assets/close-up-photography-of-man-wearing-sunglasses-1212984.png'
import Button from './UI/Button'

const WhyWeStarted = () => {
  return (
    <div className='mobile:p-[20px] desktop:p-[80px] relative flex justify-center items-center'>
        <Image className='desktop:-z-50 object-cover' fill src={preview}/>
            <div className='mobile:p-[20px] desktop:p-[80px] bg-white z-50 desktop:w-[906px] desktop:h-[584px] flex flex-col justify-between mobile:gap-[20px]'>
                <h3 className='text-[#232536] uppercase text-[16px] font-bold'>Why we started</h3>
                <h1 className='mobile:text-[24px] desktop:text-[48px] text-[#232536] font-bold'>It started out as a simple idea and evolved into our passion</h1>
                <p className='text-[16px] text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <Button className={'bg-[#FFD050] hover:bg-[#fad265] text-[#232536]'} label={'Discover our story >'}/>
            </div>
    </div>
  )
}

export default WhyWeStarted