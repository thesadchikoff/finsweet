import React from 'react'
import Button from './UI/Button'

const AboutUs = () => {
  return (
    <div className={'w-full desktop:p-[80px]'}>
        <div className={'flex'}>
            <div className={'flex-1'}/>
            <div className={'w-[843px] h-[23px] bg-[#FFD050]'}/>
            <div className={'w-[282px] h-[23px] bg-[#592EA9]'}/>
        </div>
        <div className={'bg-[#F4F0F8] mobile:p-[20px] desktop:p-[80px] flex flex-col mobile:gap-[40px] desktop:gap-0'}>
            <div className={'flex desktop:flex-row  mobile:flex-col mobile:gap-[50px]'}>
            <div className={'desktop:w-1/2 flex flex-col gap-[25px]'}>
                <h2 className={'uppercase text-[#232536] text-[16px] font-bold'}>About Us</h2>
                <h1 className={'text-[#232536] mobile:text-[24px] w-full desktop:text-[36px] font-bold'}>We are a community of content writers who share their learnings</h1>
                <p className={'text-[#6D6E76] text-[16px]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={'desktop:w-1/2 flex flex-col gap-[25px]'}>
                <h2 className={'uppercase text-[#232536] text-[16px] font-bold'}>Our mision</h2>
                <h1 className={'text-[#232536] mobile:text-[24px] w-full desktop:text-[36px] font-bold'}>Creating valuable content for creatives all around the world</h1>
                <p className={'text-[#6D6E76] text-[16px]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            </div>
            <Button className={'bg-[#592EA9] delay-150 hover:bg-[#7142ca] text-white'} label={'Read More'}/>
        </div>
    </div>
  )
}

export default AboutUs