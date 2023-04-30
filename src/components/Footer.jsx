import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/Logo.svg'
import Button from './UI/Button'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='desktop:px-[80px] desktop:py-[56px] mobile:px-[30px] mobile:py-[26px] bg-[#232536] flex flex-col gap-[54px]'>
        <div className='bg-[#232536] z-[1000] w-full h-[80px] flex items-center justify-between'>
            <Link href={'/'}>
            <Image className='w-[140px] h-[29px]' src={logo}/>
            </Link>
            <nav className='desktop:flex items-center gap-[32px] mobile:hidden'>
                <ul className='text-white flex flex-row gap-[24px] text-[16px]'>
                    <li><Link href={'#'}>Home</Link></li>
                    <li><Link href={'#'}>Blog</Link></li>
                    <li><Link href={'#'}>About Us</Link></li>
                    <li><Link href={'#'}>Contact Us</Link></li>
                    <li><Link href={'#'}>Privacy Policy</Link></li>
                </ul>
            </nav>
        </div>
        <div className='desktop:px-[64px] desktop:py-[80px] mobile:px-[34px] mobile:py-[50px] bg-[#2E3040] flex desktop:flex-row mobile:flex-col desktop:justify-between mobile:gap-[30px] desktop:gap-0'>
            <h1 className='text-white font-bold desktop:text-[36px] mobile:text-[26px]'>Subscribe to our news letter to get latest updates and news</h1>
            <div className='flex desktop:items-center gap-[24px] mobile:flex-col desktop:flex-row'>
                <input type="text" placeholder='Enter Your Email' className='outline-none border bg-inherit border-[#4C4C4C] px-[24px] py-[17px] text-white'/>
                <Button className={'text-[#232536] bg-[#FFD050] hover:bg-[#fcd468]'} label={'Subscribe'}/>
            </div>
        </div>
        <div className={'flex justify-between items-center'}>
            <span className='text-[#6D6E76] mobile:text-[12px] desktop:text-[16px]'>
                Finstreet 118 2561 Fintown
                <article>Hello@finsweet.com  020 7993 2905</article>
            </span>
            <div className='flex items-center gap-[16px] text-[20px] text-[#6D6E76]'>
                <FaFacebook className='hover:text-[#4d5175] transition-all delay-100'/>
                <FaTwitter className='hover:text-[#4d5175] transition-all delay-100'/>
                <FaInstagram className='hover:text-[#4d5175] transition-all delay-100'/>
                <FaLinkedin className='hover:text-[#4d5175] transition-all delay-100'/>
        </div>
        </div>
    </div>
  )
}

export default Footer