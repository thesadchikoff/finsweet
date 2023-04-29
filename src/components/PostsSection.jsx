import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import preview from '../assets/white-concrete-building-1838640.png'
import Button from './UI/Button'
import { posts } from '@/data/posts'

const PostsSection = () => {
  const [user, setUser] = React.useState('')

  React.useEffect(() => {
    fetch('http://localhost:3000/api/hello', {
      method:'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json()).then(data => setUser(data))
  }, [])
  return (
    <section className=' flex w-full desktop:py-[100px] desktop:px-[80px] m-auto desktop:flex-row mobile:flex-col mobile:mt-10'>
        <div className='desktop:w-1/2 flex flex-col gap-[64px] p-2'>
        <h1 className='text-[#232536] text-[36px] font-bold'>Featured Post</h1>
        <div className={'flex flex-col gap-[16px] p-[32px] border'}>
          <Image className={'w-full h-[352px]'} src={preview}/>
          <span className={'text-[#4C4C4C]'}>By <Link className='text-[#592EA9]' href={'#'}><b>{user?.name}</b></Link>  |  May 23, 2022 </span>
          <h1 className={'text-[28px] font-bold text-[#232536]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
          <p className={'text-[16px] text-[#6D6E76]'}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <Button textColor={'#232536'} bgColor='bg-amber-500' className={'hover:bg-amber-400'} label='Read More'/>
        </div>
        </div>
        <div className='desktop:w-1/2 p-2'>
          <div className='flex flex-row justify-between items-center mb-[64px]'>
            <h1 className='text-[#232536] text-[36px] font-bold'>All Posts</h1>
            <Link className='text-[#592EA9]' href={'#'}>View All</Link>
          </div>
          <div className={'flex flex-col w-full'}>
            {
              posts.map(post => {
                return(
                  <div className={'p-[32px] hover:bg-[#FBF6EA] cursor-pointer flex flex-col gap-6'}>
                    <h3 className={'text-[14px] text-[#4C4C4C]'}>{post.author}</h3>
                    <h1 className={'text-[24px] text-[#232536] font-bold'}>{post.content}</h1>
                  </div>
                )
              })
            }
        </div>
        </div>
    </section>
  )
}

export default PostsSection