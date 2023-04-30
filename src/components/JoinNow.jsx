import React from 'react'
import Button from './UI/Button'

const JoinNow = () => {
  return (
    <div className='flex flex-col desktop:p-[80px] mobile:p-[30px] justify-center items-center gap-[32px] text-center'>
        <h1 className='text-[#232536] desktop:text-[48px] mobile:text-[28px] font-bold'>Join our team to be a part of our story</h1>
        <p className='text-[16px] text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <Button label={'Join Now'} className={'bg-[#FFD050] hover:bg-[#f8d269] transition-all delay-150'}/>
    </div>
  )
}

export default JoinNow