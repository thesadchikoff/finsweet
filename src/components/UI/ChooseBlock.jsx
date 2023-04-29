import React from 'react'
import Image from 'next/image'

const ChooseBlock = ({logo, label, content}) => {
  return (
    <div className={'p-[32px] border flex flex-col gap-[16px] hover:bg-[#FFD050] transition-all delay-150 cursor-pointer'}>
        <div className={'bg-[#FBF6EA] p-[12px] rounded-[5px] w-max'}>
            <Image src={logo}/>
        </div>
        <div className={'flex flex-col gap-[4px]'}>
            <h1 className={'text-[#232536] text-[28px] font-bold'}>{label}</h1>
            <span className={'text-[#6D6E76] text-[16px]'}>{content}</span>
        </div>
    </div>
  )
}

export default ChooseBlock