import Link from 'next/link'
import React from 'react'
import Button from './UI/Button'
import backgroundImage from '../assets/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.jpg'
import Image from 'next/image'

const WelcomeSection = () => {
  const [user, setUser] = React.useState('')

  React.useEffect(() => {
    fetch('https://finsweet-three.vercel.app/api/hello', {
      method:'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json()).then(data => setUser(data))
  }, [])
  console.log(user.name)
  return (
    <section className=' flex bg-image w-full h-screen overlay relative desktop:px-[80px] mobile:px-[30px] m-auto flex-col mobile:pt-[100px] desktop:justify-center'>
      <Image src={backgroundImage} className={'full-image mobile:h-screen w-full z-0 absolute left-0 top-0 object-cover object-center'} />
        <div className='flex flex-col gap-[24px] text-white z-[1000]'>
          <h3  className='text-[16px] uppercase'>Posted on <b>startup</b></h3>
          <h1 className='text-bold desktop:text-[56px] mobile:text-[25px]'>Step-by-step guide to choosing great font pairs</h1>
          <span>By <Link className='text-amber-500' href={'#'}>{user?.name}</Link>  |  May 23, 2022 </span>
          <p className='text-[16px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <Button textColor={'#232536'} bgColor='bg-amber-500' hoverBgColor={'bg-amber-400'} label='Read More'/>
        </div>
      </section>
  )
}

export default WelcomeSection
