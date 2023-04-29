import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/Logo.svg'
import Button from './UI/Button'

const Header = () => {
  return (
    <div className='bg-[#232536] z-[1000] w-full h-[80px] desktop:pl-[80px] desktop:pr-[80px] mobile:pl-[10px] mobile:pr-[10px] flex items-center justify-between'>
        <Image className='w-[140px] h-[29px]' src={logo}/>
        <nav className='desktop:flex items-center gap-[32px] mobile:hidden'>
            <ul className='text-white flex flex-row gap-[24px] text-[16px]'>
                <li><Link href={'#'}>Home</Link></li>
                <li><Link href={'#'}>Blog</Link></li>
                <li><Link href={'#'}>About Us</Link></li>
                <li><Link href={'#'}>Contact Us</Link></li>
            </ul>
            <Button bgColor={'bg-white'} label={'Subscribe'} textColor={'#232536'} />
            <Button bgColor={'bg-slate-400'} label={'Sign In'} textColor={'#232536'} />
        </nav>
    </div>
  )
}

export default Header