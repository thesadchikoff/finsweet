import Image from 'next/image'
import React from 'react'
import partner1 from '../assets/partner1.svg'
import partner2 from '../assets/partner2.svg'
import partner3 from '../assets/partner3.svg'
import partner4 from '../assets/partner4.svg'
import partner5 from '../assets/partner5.svg'

const FeaturedIn = () => {
  return (
    <div className='w-full mobile:p-[30px] desktop:p-[80px] flex desktop:flex-row mobile:flex-col desktop:gap-0 mobile:gap-[75px] desktop:justify-between desktop:text-left desktop:items-center mobile:text-center mobile:justify-center mobile:items-center'>
        <h1 className='text-[#6D6E76] text-[24px] font-bold'>
            <article className='text-[14px] text-[#6D6E76] font-normal'>We are</article>
            Featured in
        </h1>
        <Image src={partner1}/>
        <Image src={partner2}/>
        <Image src={partner3}/>
        <Image src={partner4}/>
        <Image src={partner5}/>
    </div>
  )
}

export default FeaturedIn