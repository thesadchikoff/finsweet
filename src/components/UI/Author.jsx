import Image from 'next/image'
import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Author = ({avatar, fullName, action}) => {
  return (
    <section className='px-[40px] py-[20px] bg-[#F4F4F4] hover:bg-[#FBF6EA] transition-all delay-150 flex flex-col justify-center items-center cursor-pointer gap-[20px]'>
        <Image width={128} height={128} src={avatar} alt='avatar of member'/>
        <div className='flex flex-col text-center'>
            <h2 className='text-[28px] text-[#232536] font-bold'>{fullName}</h2>
            <span className='text-[#6D6E76] text-[14px]'>{action}</span>
        </div>
        <div className='flex items-center gap-[16px] text-[20px] text-[#232536]'>
            <FaFacebook className='hover:text-[#4d5175] transition-all delay-100'/>
            <FaTwitter className='hover:text-[#4d5175] transition-all delay-100'/>
            <FaInstagram className='hover:text-[#4d5175] transition-all delay-100'/>
            <FaLinkedin className='hover:text-[#4d5175] transition-all delay-100'/>
        </div>
    </section>
  )
}

export default Author